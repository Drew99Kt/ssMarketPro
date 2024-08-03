<template>
    <TopNavBar />
    <div class="wip">WIP</div>
    <div class="container">WIP Galaxy Viewer.</div>
    <br>
    <div class="container">
        <div><button @click="display_3d_force()">Fetch 3D Force</button></div>
        <br>
        <div>Fly Mode: <input type="checkbox" v-model="flymode"></div>
        <br>
        <span> Owned: {{ owned }}</span>
        <span> Unowned: {{ unowned }}</span>
        <span> Total: {{ total }}</span>
        <br>
        <div ref="displaygraph"></div>
    </div>
</template>
<script>
import App from '../../App.vue';
import TopNavBar from './../TopNavBar.vue';
import ForceGraph3D from '3d-force-graph';
import SpriteText from 'three-spritetext';

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
        };
    },
    methods: {
        display_3d_force() {
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
            fetch('https://www.starsonata.com/webapi/galaxies/v1')
            .then(r => r.json())
            .then(json => {
                this.api = json.api;
                this.galaxies = json.galaxies;
                var keys = Object.keys(this.galaxies);
                var nodes_filter = new Set();
                for (var i = 0; i < keys.length; i++) {
                    var current_galaxy = this.galaxies[keys[i]];
                    if (!(current_galaxy.layer == LAYER_WILDSPACE && current_galaxy.mapable !== false)) {
                        continue;
                    }
                    nodes_filter.add(current_galaxy.ID);
                }
                for (i = 0; i < keys.length; i++) {
                    var current_galaxy = this.galaxies[keys[i]];
                    if (!nodes_filter.has(current_galaxy.ID)) {
                        continue;
                    }
                    var node = {
                        id: current_galaxy.ID,
                        name: current_galaxy.name,
                        val: 4,
                        owner: current_galaxy.owningTeamID,
                        x: current_galaxy.x * 200,
                        y: current_galaxy.y * 200,
                        z: 0,
                    };
                    if (node.owner !== undefined) {
                        _this.owned++;
                    } else {
                        _this.unowned++;
                    }
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
                var config = {};
                config.controlType = _this.flymode ? 'fly' : 'trackball';
                const myGraph = ForceGraph3D(config);
                myGraph(graph_element)
                .nodeAutoColorBy('owner')
                .graphData(graph_data)
                .d3AlphaMin(0)
                .d3AlphaDecay(0.0228)
                .d3VelocityDecay(0.4)
                .nodeThreeObject(node => {
                    const sprite = new SpriteText(node.name);
                    sprite.material.depthWrite = false; // make sprite background transparent
                    sprite.color = node.color;
                    sprite.textHeight = 16;
                    return sprite;
                });
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

</style>