<template>
<div class="wip">WIP</div>
<div class="container">Currently this will calculate total scrap value of a pasted inventory using a partial (and potentially outdated) scrap database.</div>
<br>
<div class="container">
    <button @click="parseData">Calculate Scrap Value</button>
    <textarea v-model="inputData" placeholder="Enter your inventory"></textarea>
    <div>
        <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="output in outputData" :key="output.item">
                    <td>{{output.item}}</td>
                    <td>{{output.value}}</td>
                </tr>
            </tbody>
        </table>
        <br><br>
        <table class="table">
            <thead>
                <tr>
                    <th>Unknown Item</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="output in unknownData" :key="output.item">
                    <td>{{output.item}}</td>
                </tr>
            </tbody>
        </table>
        <br><br>
    </div>
    <div>
        <label>Scrap Database (for Debugging):</label>
        <input type="checkbox" id="checkbox" v-model="checked"/>
    </div>
    <div v-if="checked">
        <table class="table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) in rawScrapValues">
                    <td>{{key}}</td>
                    <td>{{value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import scrap_values from './data/scrap_values.json'
import numberFormatter from 'number-formatter'

export default {
    data() {
        return {
            inputData: `22\t1\tHazardous Ruthless Burst[Overclocked]
22\t1\tCorrupted Cyborg Reach[Superconducting]
22\t1\tCorrupted Cyborg Reach[Evil]
22\t1\tHazardous PUT-TY Burst
23\t1\tThe Five Piece
22\t4\tCorrupted Conversion Ray
22\t3\tGargantuan Gigo Laser
22\t1\tHazardous Oomping Burst
23\t2\tM51 Benefactor
23\t1\tParadox Shield
50\tTitanium`,
            rawScrapValues: scrap_values,
            outputData: [],
            unknownData: [],
            checked: false,
        };
    },
    methods: {
        parseData() {
            var totalScrapValue = 0;
            var outputData = []
            var outputMap = new Map();
            var rawScrapValues = this.rawScrapValues; // TODO: Push to API?
            var unknownData = [];
            const regexp = /([0-9]+\t)?([0-9]+)\t(.+)/;

            // Preprocess inventory rows
            // Strip mods, ignore tech column, handle commodities, combine mutliple rows into one.
            this.inputData.split("\n").forEach(function (rawInventoryLine) {
                rawInventoryLine = rawInventoryLine.trim();
                var matches = rawInventoryLine.match(regexp);
                if (matches.length == 4) {
                    var name = matches[3];
                    if (name.includes('[')) {
                        name = name.substring(0, name.lastIndexOf('['));
                    }
                    var count = parseInt(matches[2]);
                    if (outputMap.has(name)) {
                        outputMap.set(name, outputMap.get(name) + count);
                    } else {
                        outputMap.set(name, count);
                    }
                } else {
                    console.log("Invalid input row: ", rawInventoryLine);
                }
            });
            // Compute summed values and unknowns
            outputMap.forEach(function (value, key, map) {
                if (rawScrapValues[key] != null) {
                    outputData.push({item: key, value: (value * rawScrapValues[key])});
                    totalScrapValue += value * rawScrapValues[key];
                } else {
                    unknownData.push({item: key});
                }
            });
            outputData.unshift({item: "Total Known Scrap Value", value: totalScrapValue});
            outputData.sort(function(a, b) {
                // Descending sort
                if (a.value < b.value) {
                    return 1;
                } else if (a.value > b.value) {
                    return -1;
                } else {
                    return 0;
                }
            });
            // Final polishing pass to add commas
            outputData.forEach(function(val, idx, arr) {
                arr[idx].value = numberFormatter( "#,##0.", val.value);
            });
            this.outputData = outputData;
            this.totalScrapValue = totalScrapValue;
            this.unknownData = unknownData;
        }
    }
}
</script>
<style>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.wip {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: red;
}

table td:nth-child(1) { text-align: left; }
table td:nth-child(2) { text-align: right; }
</style>