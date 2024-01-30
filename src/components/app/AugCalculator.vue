<template>
    <TopNavBar />
    <div class="wip">WIP</div>
    <div class="container">WIP Augmenter Calculator (Exact name).</div>
    <br>
    <div class="container">
        <button @click="parseData">Augmenter Sum </button>
        <textarea v-model="inputData" placeholder="Enter your augmenter combo (Exact names):"></textarea>
        <div>
            <br><br>
            <table class="table">
                <thead>
                    <tr>
                        <th>Stat Name</th>
                        <th>Stat Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stat in outputData">
                        <td>{{stat.name}}</td>
                        <td :style="{color: stat.raw_value > 0 ? 'green' : stat.raw_value < 0 ? 'red' : 'grey'}">{{stat.value}}</td>
                    </tr>
                </tbody>
            </table>
            <br><br>
        </div>
    </div>
</template>
<script>
import aug_values from './data/aug_values.json'
import TopNavBar from './../TopNavBar.vue';
export default {
    components: {
        TopNavBar,
    },
    data() {
        return {
            inputData: `Qa'ik Urk'qii Akk'oj
Twisted Tesla Augmenter
Selenite Augmenter
Qa'ik Banu Akk'oj`,
            rawAugValues: aug_values,
            outputData: [],
            checked: false,
        };
    },
    methods: {
        parseData() {
            var outputData = this.outputData = [];
            // parse augmenter json to a friendlier format
            var converted_data = aug_values.map(function(aug_obj, idx, arr) {
                var stats = aug_obj.stats.includes(',') ? aug_obj.stats.split(',') : [aug_obj.stats];
                return {
                    name: aug_obj.name,
                    stats: stats.map(function (stat_val) {
                    var match;
                    if (match = stat_val.match(/([a-zA-Z ]+)\s([\-\+0-9]+%?)/)) {
                        return {
                            name: match[1].trim() + (stat_val.includes('%') ? '' : '_offset'),
                            value: parseFloat(match[2].trim().match(/([\-\+][0-9]+)%?/)[1])
                        };
                    }
                }),
                    tech: aug_obj.tech
                };
            });

            // converted_data + converted_input -> summed augmenter stats
            [this.inputData.split('\n').filter(e => e.trim() !== '')]
            .map(e => e.map(v => v.trim()))
            .forEach(function (input_augs) {
                var acc = new Object();
                var combine_acc_fn = function (acc, aug) {
                    aug.stats.forEach(function (stat) {
                        acc[stat.name] = (acc[stat.name] ? acc[stat.name] : 0) + stat.value;
                    });
                    return acc;
                };
                input_augs.map(function(e) {
                    return converted_data.find(function(v) {
                        return v.name == e;
                    });
                })
                .filter(e=> e !== undefined)
                .forEach(function (aug) {
                    acc = combine_acc_fn(acc, aug);
                });

                //Alphanumeric sort output
                var output_table = [];
                var keys = Object.keys(acc);
                keys.sort();
                for (var i = 0; i < keys.length; i++) {
                    var key = keys[i];
                    var value = acc[key];
                    output_table.push({name: key, value: (value > 0 ? '+' : '') + acc[key] + '%', raw_value: value});
                }
                outputData = output_table;
            });
            this.outputData = outputData;
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
</style>