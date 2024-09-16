<template>
    <TopNavBar />
    <div class="wip">credits to DragonGod004 & enk</div>
    <br>
    <div class="container">WIP Build Helper (Exact Name).</div>
    <br>
    <div class="container">
        <button @click="parseData">Build Helper </button>
        <textarea v-model="inputData" placeholder="Enter your desired build:"></textarea>
        <text v-for="build_goal in success_msg" >{{ build_goal }} <br> </text>
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
            <br><br>
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
            success_msg: [],
        };
    },
    methods: {
        parseData() {
            this.mats = [];
            var success_msg = this.success_msg = [];
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

                    goals.push({
                        name: name,
                        count: count,
                    });
                });

                return goals;
            
            }

            function resolve_mats(goals, mats) {
                var mats = {};

                goals.forEach(e => {
                    var multiplier = e.count;
                    var name = e.name;

                    var matched_blueprints = blueprints.filter(bp => {
                        return bp.name.startsWith(name) && bp.name[name.length] == ' ';
                    })

                    if (matched_blueprints.length == 0) {
                        console.log('Could not find bp ' + name);
                        return;
                    } else if (matched_blueprints.length > 1) {
                        console.log('Multiple matches, choosing first ' + name);
                    } else {
                        //TODO combine entries and also handle how many blueprints we actually need properly.
                        success_msg.push(multiplier + ' ' + matched_blueprints[0].name);
                    }
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

                console.log(mats);
                return mats;
            }

            var goals = parse_input(this.inputData);
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
    color: grey;
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
    background-color: rgb(245, 245, 245);
}
</style>