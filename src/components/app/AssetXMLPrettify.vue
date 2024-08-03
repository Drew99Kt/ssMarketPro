
<template>
    <TopNavBar />
    <div class="wip">WIP</div>
    <div class="container">WIP Asset XML Prettify utility.</div>
    <br>
    <div class="container">
        <label for="filterString">Filter string:</label>
        <input type="text" id="filterString" v-model="filterString">
        <br>
        <button @click="parseData">Parse Data</button>

        <textarea v-model="inputData" placeholder="Enter data"></textarea>

        <table class="table">
            <thead>
                <tr>
                    <th>Ship</th>
                    <th>Ship Alias</th>
                    <th>Item Count</th>
                    <th>Item</th>
                    <th>Mods</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="output in outputData">
                    <td>{{ output.ship }}</td>
                    <td>{{ output.shipAlias }}</td>
                    <td>{{ output.itemCount }}</td>
                    <td>{{ output.item }}</td>
                    <td>{{ output.mods }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script allowJs:true>
import TopNavBar from './../TopNavBar.vue';
export default {
    name: 'LootSplitter',
    components: {
        TopNavBar,
    },

    data() {
        return {
            inputData: ``,
            filterString: '',

            outputData: [],
        };
    },
    methods: {
        parseData() {
            var lines = this.inputData.split('\n');
            var filterString = this.filterString.toLowerCase();
            var outputData = [];

            var shipHull = '';
            var shipAlias = '';
            var itemName = '';
            var modList = '';
            var itemCount = '';


            var bitMaskData = [
                {
                    "mask": 1,
                    "mod": "Miniaturized"
                },
                {
                    "mask": 2,
                    "mod": "Composite"
                },
                {
                    "mask": 4,
                    "mod": "Shielded"
                },
                {
                    "mask": 8,
                    "mod": "Extended"
                },
                {
                    "mask": 16,
                    "mod": "Scoped"
                },
                {
                    "mask": 32,
                    "mod": "Dynamic"
                },
                {
                    "mask": 64,
                    "mod": "Amorphous"
                },
                {
                    "mask": 128,
                    "mod": "Radioactive"
                },
                {
                    "mask": 256,
                    "mod": "Sleek"
                },
                {
                    "mask": 512,
                    "mod": "Resonating"
                },
                {
                    "mask": 1024,
                    "mod": "Docktastic"
                },
                {
                    "mask": 2048,
                    "mod": "Intelligent"
                },
                {
                    "mask": 4096,
                    "mod": "Amplified"
                },
                {
                    "mask": 8192,
                    "mod": "Rewired"
                },
                {
                    "mask": 16384,
                    "mod": "Workhorse"
                },
                {
                    "mask": 32768,
                    "mod": "Evil"
                },
                {
                    "mask": 65536,
                    "mod": "Superconducting"
                },
                {
                    "mask": 131072,
                    "mod": "Transcendental"
                },
                {
                    "mask": 262144,
                    "mod": "Overclocked"
                },
                {
                    "mask": 524288,
                    "mod": "Forceful"
                },
                {
                    "mask": 1048576,
                    "mod": "Gyroscopic"
                },
                {
                    "mask": 2097152,
                    "mod": "Buffered"
                },
                {
                    "mask": 4194304,
                    "mod": "Super Intelligent"
                },
                {
                    "mask": 8388608,
                    "mod": "Reinforced"
                },
                {
                    "mask": 16777216,
                    "mod": "Angelic"
                }
            ];
            function decodeModBitmask(value) {
                var outputMods = '[';
                var numberMods = 0;

                bitMaskData.forEach(function(modMask) {
                    if (value & modMask.mask) {
                        outputMods = outputMods + (numberMods ? '|' : '') + modMask.mod;
                        numberMods = numberMods + 1;
                    }
                });
                outputMods = outputMods + ']';
                return outputMods;
            }

            lines.forEach(function (e) {
                if (e.includes('<HULL')) {
                    shipAlias = ''
                    const shipHullRegex = /.*>(.*)<\/HULL>/g;
                    shipHull = shipHullRegex.exec(e)[1];
                }
                if (e.includes('<SHIP_ALIAS>')) {
                    const shipAliasRegex = /.*>(.*)<\/SHIP_ALIAS>/g;
                    shipAlias = shipAliasRegex.exec(e)[1];
                }
                if (filterString.length > 0 && !e.toLowerCase().includes(filterString)) {
                    return;
                }
                if (e.includes('<ITEM ')) {
                    const itemNameRegex = /.*nm="([a-zA-Z\-0-9\+\.,' \(\)&=:]*)"/g;
                    itemName = itemNameRegex.exec(e)[1];
                    // m="1536"
                    const modBitmaskRegex = /.*m="([0-9]*)"/g;
                    if (e.includes(' m=')) {
                        var modBitmask = parseInt(modBitmaskRegex.exec(e)[1]);
                        modList = decodeModBitmask(modBitmask);
                    } else {
                        modList = '';
                    }
                    if (e.includes('quant=')) {
                        const itemCountRegex = /.*quant="([0-9]*)"/g;
                        itemCount = itemCountRegex.exec(e)[1];

                    } else {
                        itemCount = 1;
                    }

                    outputData.push({
                        ship: shipHull,
                        shipAlias: shipAlias,
                        itemCount: itemCount,
                        item: itemName,
                        mods: modList
                    });
                }

            });

            this.outputData = outputData;
        }
    },
};
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

textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    margin-bottom: 10px;
}

table td:nth-child(3) { text-align: right; }
.output-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 75%;
}</style>