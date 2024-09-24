<template>
    <TopNavBar />
    <div class="wip">credits to DragonGod004 & enk</div>
    <br>
    <div class="container">WIP Build Helper (Exact Name).</div>
    <br>
    <div class="container">
        <button @click="parseData">Build Helper </button>
        <div>Round up blueprints: <input type="checkbox" v-model="bp_rounding"></div>
        <textarea v-model="inputData" placeholder="Enter your desired build:"></textarea>
        <text v-for="build_goal in builds" >{{ build_goal }} <br> </text>
        <div>
            <br><br>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Material</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, name, index) in mats">
                        <td>{{value}}</td>
                        <td>{{name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import blueprints from './data/blueprints.json'
import TopNavBar from './../TopNavBar.vue';
export default {
    components: {
        TopNavBar,
    },
    data() {
        return {
            inputData: `5 Combined Aspect of the Rhino`,
            blueprints: blueprints,
            mats: [],
            builds: [],
            bp_rounding: false,
        };
    },
    methods: {
        parseData() {
            var _that = this;
            this.mats = [];
            var builds = this.builds = [];
            var blueprints = this.blueprints;

            function parse_input(input) {
                var goals = [];
                var input_split = input.split('\n');
                input_split.forEach(e => {
                    e = e.trim();
                    if (e == '')
                        return;
                    var idx_first_space = e.indexOf(' ');
                    var count = Number(e.substring(0, idx_first_space));
                    var name = e.substring(idx_first_space + 1).trim();

                    var found_goal = goals.filter(e => e.name == name);
                    if (found_goal.length >= 1) {
                        found_goal[0].count += count;
                    } else {
                        goals.push({
                            name: name,
                            count: count,
                        });
                    }
                });

                return goals;
            
            }

            function resolve_mats(goals, mats) {
                var produced = [];
                var blueprints_consumed = [];
                var mats = {};
                var bps = {};

                goals.forEach(e => {
                    var multiplier = e.count;
                    var name = e.name;

                    var matched_blueprints = blueprints.filter(bp => {
                        return bp.name.toLowerCase().startsWith(name) && bp.name[name.length] == ' ';
                    })

                    if (matched_blueprints.length == 0) {
                        console.log('Could not find bp ' + name);
                        return;
                    } else if (matched_blueprints.length > 1) {
                        console.log('Multiple matches, choosing first ' + name);
                    }
                    var blueprint_name = matched_blueprints[0].name;
                    var blueprint_qty = 1;

                    // Handle multiple outputted product qty
                    var matched_products = matched_blueprints[0]['output'].filter(product => {
                        return product.name.toLowerCase() == name;
                    });
                    if (matched_products.length != 1) {
                        console.log('Unable to find product in blueprint output');
                        return;
                    }
                    var blueprint_produced_qty = matched_products[0].qty;

                    //Round up goal to next blueprint produced quantity
                    multiplier = Math.ceil(multiplier / blueprint_produced_qty) * blueprint_produced_qty;

                    // Note how many products produced to need to the user
                    produced.push(multiplier + ' ' + matched_products[0].name);

                    // Handle max_uses
                    if (matched_blueprints[0].max_uses != '') {
                        blueprint_qty = multiplier / Number(matched_blueprints[0].max_uses);
                        if (_that.bp_rounding) {
                            blueprint_qty = Math.ceil(blueprint_qty);
                        } else {
                            blueprint_qty = Math.ceil(blueprint_qty * 100) / 100;
                        }
                        if (blueprint_name in bps) {
                            bps[blueprint_name] += blueprint_qty;
                        } else {
                            bps[blueprint_name] = blueprint_qty;
                        }
                    } else {
                        bps[blueprint_name] = blueprint_qty;
                    }

                    // Note how many blueprints we need to the user
                    blueprints_consumed.push(blueprint_qty + ' ' + blueprint_name);

                    // We have the blueprints, do the required material aggregation
                    matched_blueprints[0].initial.forEach(mat => {
                        if (mat.name in mats) {
                            mats[mat.name] += mat.qty * multiplier;
                        } else {
                            mats[mat.name] = mat.qty * multiplier;
                        }
                    });
                    matched_blueprints[0].periodic.forEach(mat => {
                        if (mat.name in mats) {
                            mats[mat.name] += mat.qty * multiplier;
                        } else {
                            mats[mat.name] = mat.qty * multiplier;
                        }
                    });
                })

                builds.push('Products:');
                builds.push('');
                produced.forEach(e => builds.push(e));
                builds.push('');
                builds.push('Blueprints:');
                builds.push('');
                blueprints_consumed.forEach(e => builds.push(e));
                builds.push('');

                return mats;
            }

            var goals = parse_input(this.inputData.toLowerCase());
            this.mats = resolve_mats(goals);
            
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
    /* color: grey; */
}

textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
}

table td:nth-child(1) { text-align: left; }
table td:nth-child(2) { text-align: right; }
table tr:nth-child(odd) td{
    /* background-color: rgb(245, 245, 245); */
}
</style>