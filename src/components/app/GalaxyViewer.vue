<template>
    <TopNavBar />
    <div class="wip">WIP</div>
    <div class="container">WIP Galaxy Viewer.</div>
    <br>
    <div class="container">
        <button @click="display_3d_force">Fetch 3D Force</button>
        <span> Owned: {{ owned }}</span>
        <span> Unowned: {{ unowned }}</span>
        <span> Total: {{ total }}</span>
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
        };
    },
    methods: {
        display_3d_force() {
            var graph_element = this.$refs.displaygraph;
            var graph_data = {
                    nodes: [],
                    links: [],
                };
            var _this = this;
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
                
                console.log(graph_data);
                const myGraph = ForceGraph3D({
                });
                myGraph(graph_element)
                .nodeAutoColorBy('owner')
                .graphData(graph_data)
                .nodeThreeObject(node => {
                    const sprite = new SpriteText(node.name);
                    sprite.material.depthWrite = false; // make sprite background transparent
                    sprite.color = node.color;
                    sprite.textHeight = 8;
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