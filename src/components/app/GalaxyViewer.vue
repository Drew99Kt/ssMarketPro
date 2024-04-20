<template>
    <TopNavBar />
    <div class="wip">WIP</div>
    <div class="container">WIP Galaxy Viewer.</div>
    <br>
    <button @click="parseData">Fetch</button>
    <div class="container">
        <v-network-graph
            class="graph"
            :nodes="nodes"
            :edges="edges"
            :layouts="layouts"
        />
    </div>
</template>
<script>
import App from '../../App.vue';
import TopNavBar from './../TopNavBar.vue';
import VNetworkGraph from "v-network-graph";
// import "v-network-graph/lib/style.css";

export default {
    components: {
        TopNavBar
    },
    data() {
        return {
            galaxies: null,
            api: null,
            edges: {},
            nodes: {},
            layouts: {},
            configs: {}
        };
    },
    methods: {
        parseData() {
            var galaxies_with_aistations = [];
            var _this = this;
            fetch('https://www.starsonata.com/webapi/galaxies/v1')
            .then(r => r.json())
            .then(json => {
                this.api = json.api;
                this.galaxies = json.galaxies;
                //console.log(this.galaxies);
                //console.log();
                var keys = Object.keys(this.galaxies);
                var i;
                var nodes = {};
                var edges = {};
                var layouts = {nodes: {}};
                var nodes_so_far = 0;
                const MAX_NODES = 250;//
                const LAYER = 3;
                const scale = 50;
                var owned = 0;
                var unowned = 0;
                for (i = 0; i < keys.length; i++) {
                    var current_galaxy = this.galaxies[keys[i]];
                    //console.log(current_galaxy.layer);
                    if (current_galaxy.layer == LAYER && current_galaxy.mapable !== false
                    ) { //&& current_galaxy.df >= 1.7 && current_galaxy.df <= 1.9
                        //&& current_galaxy.aibases !== null && current_galaxy.aibases >= 1
                        //console.log(current_galaxy);
                        /* e.g.
                            ID:32788
                            aibases:2
                            df:0.3
                            lastUpdate:1706998624
                            layer:0
                            links:(3) [40997, 41202, 93251]
                            name:"Besband"
                            x:-0.050847
                            y:-0.721069
                        */
                        //console.log(current_galaxy);
                        //console.log(current_galaxy.aibases == null);
                        if (current_galaxy.owningTeamID != null) {
                            owned += 1;
                        } else {
                            unowned += 1;
                        }
                        continue;
                        if (current_galaxy.aibases == null) {
                            continue;
                        }
                        galaxies_with_aistations.push(current_galaxy.name);
                        //NOTE: currently just filtering in aistations


                        nodes[current_galaxy.ID] = {name: current_galaxy.name}; //, size: 1,  color: 'gray', label: true
                        layouts.nodes[current_galaxy.ID] = {
                            x: current_galaxy.x * scale,
                            y: current_galaxy.y * scale,
                            fixed: true,
                        };
                        // current_galaxy.links.forEach(function(d) {
                        //     edges[current_galaxy.ID + '-' + d] = {source: current_galaxy.ID, target: d};
                        // });
                        nodes_so_far++;
                        if (nodes_so_far > MAX_NODES) {
                            break;
                        }
                    }
                }
                this.nodes = nodes;
                this.edges = edges;
                this.layouts = layouts;
                //console.log(galaxies_with_aistations);
                
                console.log("Done");
                console.log(owned, unowned);
            });
        }
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