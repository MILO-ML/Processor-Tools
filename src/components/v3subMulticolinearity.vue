<template>
    <div>
        <div v-if="analysis">
            
            <div>
                <div class="mt-5 mb-3">
                    Select your minimum correlation threshold.
                </div>
                <v-row>
                    <v-col cols="2">
                    <v-text-field
                        dense
                        outlined
                        v-model="correlationThreshold"
                        type="number" max="1" min="-1"
                        step="0.01"
                        @change="$refs.heatmap.recolorHeatMap(correlationThreshold)"
                    ></v-text-field>
                    </v-col>

                </v-row>
                <div v-if="correlationFilteredList.length == 0">
                    <v-alert dense type="info" text>No pairs meet the correlation threshold.</v-alert>

                </div>
                <div v-if="correlationFilteredList.length >0">
                    <div class="mt-5 mb-3">
                    Click on the features you wish to remove.
                    </div>
                    <v-data-table
                        :headers="[{text: 'Feature Pair', value:'features'}, {text:'Value', value:'value'}]"
                        :items="correlationFilteredList"
                        :items-per-page="5"
                        class="elevation-1"
                    >
                    <template v-slot:item.features="{ item }">
                        <v-chip

                        v-for="feature in item.features"
                        :key="feature"
                        :color="determineCorrelationColors(feature, correlationFeatureRemovalList)"
                        @click="toggleFeatureRemoval(feature)"                        
                        >
                        {{ feature }}
                        </v-chip>
                    </template>
                    </v-data-table>
                </div>   
                
                <!-- Correlation Removal -->
                <div class="mt-5 mb-3">
                    Correlated selected for removal.
                </div>
                <div>
                    <v-select
                        chips
                        outlined
                        multiple
                        :items="analysis.cols"
                        v-model="correlationFeatureRemovalList"
                        @change="update"
                        clearable
                        >
                    <template #selection="{ item }">
                        <v-chip :color="determineCorrelationColors(item,correlationFeatureRemovalList)">{{item}}</v-chip>
                    </template>
                    </v-select>
                </div>

                <!-- Graph -->
                <div>
                    <v-switch :disabled="diableGraph" label="Show Graph" v-model="showGraph"></v-switch>
                    <v-alert dense v-if="diableGraph" type="info" text> With more than {{mxMaxCorrelationFeatures}} features, in the dataset, we cannot display a graphical representation.</v-alert>
                    <d3HeatMap ref="heatmap" v-if="showGraph" :heatMapXYVal="analysis.d3" :threshold="correlationThreshold"/>
                </div>                

                

            </div>

            
       
        </div>
    </div>

</template>
<script>
import { buildTransformObject } from '@/v3Methods'
import d3HeatMap from '@/components/d3HeatMap.vue'
import v3Mixin from '@/components/v3Mixin'

//import v3miniValidate from './v3miniValidate.vue'
//import v3miniTrainTestLabel from './v3miniTrainTestLabel.vue'

export default {
    name: 'v3subMulticolinearity',
    mixins: [v3Mixin],
    components: {
        //v3miniValidate,
        d3HeatMap
    },
    props: {
        currentFiles: {
            type: Array,
            default: () => []
        },
        target: {
            type: String,
            default: null
        },
        analysis: {
            type: Object,
            default: () => {}
        },
    },
    data() {
        return {
            correlationThreshold: 0.8,
            correlationFeatureRemovalList: [],
            showGraph: false,
            transform: null,
            
            effect: null,
        }
    },
    mounted() {
        this.update()
        //Rule for showing the graph, param set in v3Mixin
        this.showGraph = (this.currentFiles[0].size.cols - 3) < this.mxMaxCorrelationFeatures      
        //remove 3 for two audit columns and one target column
    },
    watch: {
        analysis: () => {
            this.update()

        },
    },
    computed: {

        diableGraph() {
            if (this.currentFiles) {
                return (this.currentFiles[0].size.cols - 3) >= this.mxMaxCorrelationFeatures 
            }
            else {
                return false
            }
        },
        complete() {
            return true
        },
        correlationFilteredList() {
            return this.analysis.list.filter((item) => {
                return Math.abs(item.value) >= this.correlationThreshold
            })
        },


    },
    methods: {
        update() {
            let result = {
                complete: this.complete,
                transformObj: buildTransformObject('multicolinearity', {selectedColumns: this.correlationFeatureRemovalList})
            }

            this.$emit('update', result)
        },
        determineCorrelationColors(item, correlationList) {
            let colors = [
                'deep-purple lighten-4',
                'teal lighten-4',
                'green lighten-4',
                'orange lighten-4',
                'blue lighten-4',
                'red lighten-4',
                'yellow lighten-4',
                'purple lighten-4',
                'cyan lighten-4',
                'amber lighten-4',
            ]

            let index = correlationList.indexOf(item)
            console.log(index, colors.length)
            if (index == -1) {
                return ''
            }
            else if (index < colors.length) {
                return colors[index]
            }
            else if (index + 1 >= colors.length) {
                let i = index - (Math.floor(index / colors.length) * colors.length)
                i
                return 'orange'
            }
            else {
                return 'grey lighten-2'
            }

        },
        toggleFeatureRemoval(feature) {
            !this.correlationFeatureRemovalList.includes(feature) ? this.correlationFeatureRemovalList.push(feature) : this.correlationFeatureRemovalList.splice(this.correlationFeatureRemovalList.indexOf(feature),1)
            this.update()
        },            


           
   
    }
}
</script>
<style scoped>

</style>