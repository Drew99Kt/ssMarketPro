<template>
    <TopNavBar />
    <div class="wip">WIP</div>
    <div class="container">WIP Warp Navigator.</div>
    <br>
    <div class="container">
        <button @click="computeClosestWarps">Closest Warp Calculate</button>
        <textarea class="list-text-area" v-model="inputWarps" placeholder="Enter your transwarp dialog output:"></textarea>
        <textarea class="single-text-area" v-model="inputDestination" placeholder="Enter your target galaxy:"></textarea>
        <div>
            <br><br>
            <table class="table">
                <thead>
                    <tr>
                        <th>Galaxy</th>
                        <th>Distance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in outputData">
                        <td>{{row.name}}</td>
                        <td>{{row.distance}}</td>
                    </tr>
                </tbody>
            </table>
            <br><br>
        </div>
    </div>
</template>
<script>
import TopNavBar from './../TopNavBar.vue';
export default {
    components: {
        TopNavBar,
    },
    data() {
        return {
            inputWarps: ``,
            inputDestination: ``,
            outputData: [],
        };
    },
    methods: {
        computeClosestWarps() {
            var inputWarps;
            var inputDestination = '';
            var inputID = 0;
            var warpNameToID = new Map();
            var that = this;

            inputWarps = this.inputWarps.split('\n')
            .filter(e => !e.includes('Unexplored'))
            .filter(e => e != '')
            .map(e => e.split('\t')[0])
            .forEach(e => {
                warpNameToID.set(e, 0);
            });

            if (this.inputDestination.includes('@')) {
                inputDestination = this.inputDestination.substring(this.inputDestination.lastIndexOf('[') + 1, this.inputDestination.indexOf(']'));
            } else {
                inputDestination = this.inputDestination;
            }

            if (inputDestination == '') {
                return;
            }

            Promise.all([
                fetch('https://www.starsonata.com/webapi/galaxies/v1').then(r=> r.json())
            ])
            .then(resolved_api => {
                var resolved_galaxies = resolved_api[0].galaxies;
                var considered_galaxies = new Map();
                var skipped_galaxies = new Set();

                var distances = {};
                var to_visit = [];
                var visited = new Set();

                // parsing
                for (var field in resolved_galaxies) {
                    var node = resolved_galaxies[field];
                    delete node.ID;
                    delete node.df;
                    delete node.lastUpdate;
                    delete node.layer;
                    delete node.mapable;
                    delete node.x;
                    delete node.y;
                    delete node.special;
                    delete node.anchor;
                    delete node.aibases;
                    delete node.owningTeam;
                    delete node.protected;
                    delete node.userbases;
                    if (node.name.startsWith('DG ')) {
                        skipped_galaxies.add(parseInt(field));
                        continue;
                    }
                    if (node.name == inputDestination) {
                        inputID = parseInt(field);
                    }
                    considered_galaxies.set(parseInt(field), node);
                }
                
                considered_galaxies.forEach(function(value, key, map) {
                    var new_links = value.links.filter(e =>  {
                        return !skipped_galaxies.has(e);
                    });
                    value.links = new_links;
                    if (warpNameToID.has(value.name)) {
                        warpNameToID.set(value.name, key);
                    }
                    if (key == inputID) {
                        distances[key] = 0;
                    } else {
                        distances[key] = Infinity;
                    }
                    map.set(key, value);
                    to_visit.push(key);
                });

                if (inputID == 0) {
                    return;
                }

                // pathfinding
                // Based on https://patrickkarsh.medium.com/dijkstras-shortest-path-algorithm-in-javascript-1621556a3a15
                while (to_visit.length) {
                    to_visit.sort((a, b) => distances[a] - distances[b]);
                    var closest_node_ID = to_visit.shift();

                    if (distances[closest_node_ID] === Infinity) break;

                    visited.add(closest_node_ID);
                    var closest_node = considered_galaxies.get(closest_node_ID);
                    closest_node.links.forEach(function(neighbour) {
                        neighbour = parseInt(neighbour);
                        if (!visited.has(neighbour)) {
                            var new_distance = distances[closest_node_ID] + 1;
                            if (new_distance < distances[neighbour]) {
                                distances[neighbour] = new_distance;
                            }
                        } 
                    });

                }

                var results = [];
                warpNameToID.forEach(function(value, key, map) {
                    results.push({
                        name: key,
                        distance: distances[value],
                    })
                });
                results.sort((a, b) => a.distance - b.distance);
                that.outputData = results;
            });

        },
        
        computePath() {
            //TODO point to point path finding
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

.list-text-area {
  width: 500px;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
}
.single-text-area {
  width: 400px;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>