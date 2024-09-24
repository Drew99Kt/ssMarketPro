<template>
    <TopNavBar />
    <div class="container">Galaxy Viewer</div>
    <br>
    <div class="container">
        <div><button @click="display_3d_force()">Fetch 3D Force</button></div>
        <br>
        <div>Fly Mode: <input type="checkbox" v-model="flymode"></div>
        <br>
        <details>
        <!-- <span> Owned: {{ owned }}</span>
        <span> Unowned: {{ unowned }}</span>
        <span> Total: {{ total }}</span>
        <br> -->
        <summary>Ownership Breakdown</summary>
        <table class="table">
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Galaxies</th>
                    <th>% Galaxies</th>
                    <th>Stations</th>
                    <th>Stations/Galaxy</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="output in outputData" :key="output.item">
                    <td>{{output.name}}</td>
                    <td>{{output.value}}</td>
                    <td>{{output.value_fraction}}</td>
                    <td>{{output.stations}}</td>
                    <td>{{output.stations_per}}</td>
                </tr>
            </tbody>
        </table>
        </details>
        <br>
        <div ref="displaygraph"></div>
    </div>
</template>
<script>
import App from '../../App.vue';
import TopNavBar from './../TopNavBar.vue';
import ForceGraph3D from '3d-force-graph';
//import SpriteText from 'three-spritetext';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export default {
    components: {
        TopNavBar,
    },
    data() {
        return {
            owned: 0,
            unowned: 0,
            total: 0,
            flymode: false,
            outputData: [],
        };
    },
    methods: {
        display_3d_force() {
            const UNOWNED_TEAM = 'Unowned';
            const OWNED_TEAM = 'Owned';
            const TOTAL_TEAM = 'Total';
            var _this = this;
            _this.owned = 0;
            _this.unowned = 0;
            _this.total = 0;
            var graph_element = this.$refs.displaygraph;
            var graph_data = {
                    nodes: [],
                    links: [],
                };
            const LAYER_WILDSPACE = 3;
            Promise.all([
                fetch('https://www.starsonata.com/webapi/galaxies/v1').then(r=> r.json()),
                fetch('https://www.starsonata.com/webapi/teams/v1').then(r=> r.json())
            ])
            .then(resolved_api => {
                var json_maps = resolved_api[0];
                var json_teams = resolved_api[1];
                var team_count_map = new Map();
                var team_userbases_count_map = new Map();
                this.api = json_maps.api;
                this.galaxies = json_maps.galaxies;
                var keys = Object.keys(this.galaxies);
                var nodes_filter = new Set();
                for (var i = 0; i < keys.length; i++) {
                    var current_galaxy = this.galaxies[keys[i]];
                    if (!(current_galaxy.layer == LAYER_WILDSPACE && current_galaxy.mapable !== false)) {
                        continue;
                    }
                    nodes_filter.add(current_galaxy.ID);
                }
                function increment_team_count(map, key, value) {
                    if (map.has(key)) {
                        map.set(key, map.get(key) + value);
                    } else {
                        map.set(key, value);
                    }
                }
                for (i = 0; i < keys.length; i++) {
                    var current_galaxy = this.galaxies[keys[i]];
                    if (!nodes_filter.has(current_galaxy.ID)) {
                        continue;
                    }
                    const SCALE_FACTOR = 300;
                    var node = {
                        id: current_galaxy.ID,
                        name: current_galaxy.name,
                        val: 4,
                        owner: current_galaxy.owningTeamID,
                        userbases: current_galaxy.userbases,
                        x: current_galaxy.x * SCALE_FACTOR,
                        y: -1.0 * current_galaxy.y * SCALE_FACTOR,
                        z: 0,
                    };
                    if (node.owner !== undefined) {
                        _this.owned++;
                    } else {
                        _this.unowned++;
                    }
                    var userbases = node.userbases !== undefined ? node.userbases : 0;
                    if (node.owner != undefined) {
                        increment_team_count(team_count_map, node.owner, 1);
                        increment_team_count(team_userbases_count_map, node.owner, userbases);
                        increment_team_count(team_count_map, OWNED_TEAM, 1);
                        increment_team_count(team_userbases_count_map, OWNED_TEAM, userbases);
                    } else {
                        increment_team_count(team_count_map, UNOWNED_TEAM, 1);
                        increment_team_count(team_userbases_count_map, UNOWNED_TEAM, userbases);
                    }
                    increment_team_count(team_count_map, TOTAL_TEAM, 1);
                    increment_team_count(team_userbases_count_map, TOTAL_TEAM, userbases);
                    _this.total++;
                    graph_data.nodes.push(node)
                    current_galaxy.links.forEach(function(link) {
                        if (!nodes_filter.has(link)) {
                            return
                        }
                        graph_data.links.push({
                            source: current_galaxy.ID,
                            target: link
                        })
                    });
                }
                console.log(team_userbases_count_map);
                var team_count_list = Array.from(team_count_map, ([name, value]) => ({ name, value })).map(function(e) {
                    e.stations = team_userbases_count_map.get(e.name);
                    e.value_fraction = Math.round(e.value / _this.total * 100);
                    e.stations_per = Math.round(e.stations / e.value * 100) / 100;
                    var mapped_name = json_teams['teams'][e.name];
                    if (mapped_name != undefined) {
                        e.name = mapped_name['name'];
                    }
                    return e;
                });
                team_count_list.sort(function(a, b){return b.value-a.value})
                this.outputData = team_count_list;

                var config = {};
                config.controlType = _this.flymode ? 'fly' : 'trackball';
                config.extraRenderers = [new CSS2DRenderer()];
                const myGraph = ForceGraph3D(config);
                myGraph(graph_element)
                .nodeAutoColorBy('owner')
                .graphData(graph_data)
                .d3AlphaMin(0)
                .d3AlphaDecay(0.0228*2)
                .d3VelocityDecay(0.4*2)
                .nodeThreeObject(node => {
                    // const sprite = new SpriteText(node.name);
                    // sprite.material.depthWrite = false; // make sprite background transparent
                    // sprite.color = node.color;
                    // sprite.textHeight = 16;
                    // return sprite;
                    const nodeEl = document.createElement('div');
                    nodeEl.textContent = node.name;
                    nodeEl.style.color = node.color;
                    nodeEl.className = 'node-label';
                    const wrapper = new CSS2DObject(nodeEl);
                    wrapper.center.set(0, 0);
                    return wrapper;
                })
                .nodeThreeObjectExtend(true);

                const ANIMATION_ZOOM_DELAY_MS = 1000;
                const ANIMATION_ZOOM_INITIAL_DELAY_MS = 500;
                setTimeout(function() {
                    myGraph.zoomToFit(ANIMATION_ZOOM_DELAY_MS);
                }, ANIMATION_ZOOM_INITIAL_DELAY_MS);
            });

        },
    },
    created: function() {
    }
}
</script>
<style>
.graph {
  width: 1600px;
  height: 1200px;
  border: 1px solid #000;
}

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
.node-label {
    font-size: 16px;
    padding: 1px 1px;
    border-radius: 2px;
    background-color: rgba(0,0,0,0.5);
    user-select: none;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid black;
}

tr:nth-child(odd) {
  /* background-color: #f2f2f2; */
}
</style>