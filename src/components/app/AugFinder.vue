<template>
    <TopNavBar />
    <div class="wip">WIP</div>
    <div class="container">WIP Augmenter Finder.</div>
    <br>
    <div class="container">
        <label>1st Stat
        <select v-model="selected_first_sort_key">
            <option value="Capacity">Capacity</option>
            <option value="Critical Hit Chance">Critical Hit Chance</option>
            <option value="Critical Hit Strength">Critical Hit Strength</option>
            <option value="Damage">Damage</option>
            <option value="Docking Speed">Docking Speed</option>
            <option value="Electrical Tempering">Electrical Tempering</option>
            <option value="Electric Tempering">Electric Tempering</option>
            <option value="Energy Charge">Energy Charge</option>
            <option value="Energy Max">Energy Max</option>
            <option value="Hostility">Hostility</option>
            <option value="Inertia Dampening">Inertia Dampening</option>
            <option value="Inertial Dampening">Inertial Dampening</option>
            <option value="Multifiring_offset">Multifiring_offset</option>
            <option value="Projectile Velocity">Projectile Velocity</option>
            <option value="Radar">Radar</option>
            <option value="Range">Range</option>
            <option value="Rate of Fire">Rate of Fire</option>
            <option value="Resistance to Damage">Resistance to Damage</option>
            <option value="Shield Max">Shield Max</option>
            <option value="Shield Recovery">Shield Recovery</option>
            <option value="Speed">Speed</option>
            <option value="Speed_offset">Speed_offset</option>
            <option value="Thrust">Thrust</option>
            <option value="Tracking">Tracking</option>
            <option value="Tractor Power">Tractor Power</option>
            <option value="Tractor Range">Tractor Range</option>
            <option value="Transference Power">Transference Power</option>
            <option value="Turning">Turning</option>
            <option value="Visibility">Visibility</option>
            <option value="Weapon Hold">Weapon Hold</option>
            <option value="Weapons Slots_offset">Weapons Slots_offset</option>
            <option value="Weight">Weight</option>
        </select>
        </label>
        <br>
        <label>2nd Stat
        <select v-model="selected_second_sort_key">
            <option value="Capacity">Capacity</option>
            <option value="Critical Hit Chance">Critical Hit Chance</option>
            <option value="Critical Hit Strength">Critical Hit Strength</option>
            <option value="Damage">Damage</option>
            <option value="Docking Speed">Docking Speed</option>
            <option value="Electrical Tempering">Electrical Tempering</option>
            <option value="Electric Tempering">Electric Tempering</option>
            <option value="Energy Charge">Energy Charge</option>
            <option value="Energy Max">Energy Max</option>
            <option value="Hostility">Hostility</option>
            <option value="Inertia Dampening">Inertia Dampening</option>
            <option value="Inertial Dampening">Inertial Dampening</option>
            <option value="Multifiring_offset">Multifiring_offset</option>
            <option value="Projectile Velocity">Projectile Velocity</option>
            <option value="Radar">Radar</option>
            <option value="Range">Range</option>
            <option value="Rate of Fire">Rate of Fire</option>
            <option value="Resistance to Damage">Resistance to Damage</option>
            <option value="Shield Max">Shield Max</option>
            <option value="Shield Recovery">Shield Recovery</option>
            <option value="Speed">Speed</option>
            <option value="Speed_offset">Speed_offset</option>
            <option value="Thrust">Thrust</option>
            <option value="Tracking">Tracking</option>
            <option value="Tractor Power">Tractor Power</option>
            <option value="Tractor Range">Tractor Range</option>
            <option value="Transference Power">Transference Power</option>
            <option value="Turning">Turning</option>
            <option value="Visibility">Visibility</option>
            <option value="Weapon Hold">Weapon Hold</option>
            <option value="Weapons Slots_offset">Weapons Slots_offset</option>
            <option value="Weight">Weight</option>
        </select>
        </label>
        <br>
        <label>3rd Stat
        <select v-model="selected_third_sort_key">
            <option value="Capacity">Capacity</option>
            <option value="Critical Hit Chance">Critical Hit Chance</option>
            <option value="Critical Hit Strength">Critical Hit Strength</option>
            <option value="Damage">Damage</option>
            <option value="Docking Speed">Docking Speed</option>
            <option value="Electrical Tempering">Electrical Tempering</option>
            <option value="Electric Tempering">Electric Tempering</option>
            <option value="Energy Charge">Energy Charge</option>
            <option value="Energy Max">Energy Max</option>
            <option value="Hostility">Hostility</option>
            <option value="Inertia Dampening">Inertia Dampening</option>
            <option value="Inertial Dampening">Inertial Dampening</option>
            <option value="Multifiring_offset">Multifiring_offset</option>
            <option value="Projectile Velocity">Projectile Velocity</option>
            <option value="Radar">Radar</option>
            <option value="Range">Range</option>
            <option value="Rate of Fire">Rate of Fire</option>
            <option value="Resistance to Damage">Resistance to Damage</option>
            <option value="Shield Max">Shield Max</option>
            <option value="Shield Recovery">Shield Recovery</option>
            <option value="Speed">Speed</option>
            <option value="Speed_offset">Speed_offset</option>
            <option value="Thrust">Thrust</option>
            <option value="Tracking">Tracking</option>
            <option value="Tractor Power">Tractor Power</option>
            <option value="Tractor Range">Tractor Range</option>
            <option value="Transference Power">Transference Power</option>
            <option value="Turning">Turning</option>
            <option value="Visibility">Visibility</option>
            <option value="Weapon Hold">Weapon Hold</option>
            <option value="Weapons Slots_offset">Weapons Slots_offset</option>
            <option value="Weight">Weight</option>
        </select>
        </label>
        <br>
        <label>Min/Max TL
        <select v-model="selected_min_tech">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
        </select>
        <select v-model="selected_max_tech">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
        </select>
        </label>
        <br>
        <button @click="parseData">Augmenter Finder </button>
        <div>
            <br><br>
            <table class="table">
                <thead>
                    <tr>
                        <th>TL</th>
                        <th>Name</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="aug in outputData">
                        <td>{{aug.tech}}</td>
                        <td>{{aug.name}}</td>
                        <td>{{aug.stats}}</td>
                    </tr>
                </tbody>
            </table>
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
            selected_first_sort_key: null,
            selected_second_sort_key: null,
            selected_third_sort_key: null,
            selected_min_tech: "0",
            selected_max_tech: "23",
            rawAugValues: aug_values,
            outputData: [],
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

            var min_tech = this.selected_min_tech;
            converted_data = converted_data.filter(function(e) {
                return e.tech >= min_tech;
            });
            var max_tech = this.selected_max_tech;
            converted_data = converted_data.filter(function(e) {
                return e.tech <= max_tech;
            });

            var first_sort = this.selected_first_sort_key;
            var second_sort = this.selected_second_sort_key;
            var third_sort = this.selected_third_sort_key;

            function compareTwoAugStats(a, b, stat) {
                    var a_stat = a.stats.find((e) => e.name == stat);
                    var b_stat = b.stats.find((e) => e.name == stat);
                    var left_val = (a_stat != null) ? a_stat.value : 0;
                    var right_val = (b_stat != null) ? b_stat.value : 0;
                    if (left_val == right_val) {
                        return 0;
                    }
                    if (left_val < right_val) {
                        return -1;
                    }
                    if (left_val > right_val) {
                        return 1;
                    }
            }
            function compareAugs(a, b) {
                if (first_sort != null) {
                    var ret = compareTwoAugStats(a, b, first_sort);
                    if (ret != 0) {
                        return ret;
                    }
                }
                if (second_sort != null) {
                    var ret = compareTwoAugStats(a, b, second_sort);
                    if (ret != 0) {
                        return ret;
                    }
                }
                if (third_sort != null) {
                    var ret = compareTwoAugStats(a, b, third_sort);
                    if (ret != 0) {
                        return ret;
                    }
                }
                return b.tech - a.tech;
            }
            converted_data.sort(compareAugs);
            this.outputData = converted_data.map(function(e) {
                function combine_stat_name_value(e) {
                    if (e.name.includes('_offset')) {
                        if (e.value > 0) {
                            return e.name.replace(/_offset/g, '') + ' +' + e.value;
                        } else {
                            return e.name.replace(/_offset/g, '') + ' ' + e.value;
                        }
                    } else {
                        if (e.value > 0) {
                            return e.name + ' +' + e.value + '%';
                        } else {
                            return e.name + ' ' + e.value + '%';
                        }
                    }
                }
                return {
                    tech: e.tech,
                    name: e.name,
                    stats: e.stats.map((e) => combine_stat_name_value(e)).join(', ')
                }
            });
            this.outputData.reverse();
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

textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
}

table td:nth-child(1) { text-align: left; }
table td:nth-child(2) { text-align: left; }
table tr:nth-child(odd) td{
    background-color: rgb(245, 245, 245);
}
</style>