<template>
    <div>
        <v-row>
            <v-col cols="4">
                <div>
                    {{original.files.length}} file<span v-if="original.files.length != 1">s</span>
                    →
                    {{final.files.length}} file<span v-if="final.files.length != 1">s</span>
                </div>
                <div>
                    Rows missing data: {{original.missing}} → {{final.missing}}
                </div>        
                <div >
                    <div v-if="imputed > 0">
                        Rows with imputed data: 0 → {{imputed}}
                    </div>
                    <div v-else>
                        Rows imputed: N/A
                    </div>
                    
                </div>                        
                <div>
                    Total Rows: {{original.rows}} → {{final.rows}}
                </div>
                <div>
                    Total Columns: {{original.cols}} → {{final.cols}}
                </div>
            </v-col>
            <v-col cols="4">
                <div>  
                    Added Columns: 
                    <div v-if="columnDiff.added.length > 0">
                        <v-chip 
                            class="mx-1" 
                            small 
                            color="primary lighten-3" 
                            dark 
                            v-for="col, colKey in columnDiff.added" 
                            :key="colKey"
                            >
                            {{col}}
                        </v-chip>
                    </div>
                    <div v-else>
                        No added columns
                    </div>
                    
                </div>                  
            </v-col>
            <v-col cols="4">
                <div>
                    Removed Columns: 
                    <div v-if="columnDiff.removed.length > 0">
                        <v-chip 
                            class="mx-1" 
                            small 
                            color="red lighten-3" 
                            dark 
                            v-for="col, colKey in columnDiff.removed" 
                            :key="colKey"
                            >
                            {{col}}
                        </v-chip>
                    </div>
                    <div v-else>
                        No removed columns
                    </div>                        
                </div>         
             
            </v-col>            
        </v-row>
      
         
    </div>
</template>
<script>    
import underscore from 'underscore'

export default {
    name: 'v3miniFileInfo',
    props: {
        originalArray: {
            type: Array,
            default: () => [],
            deep: true
        },
        finalArray: {
            type: Array,
            default: () => [],
            deep: true
        },        
    },
    computed: {
        imputed() {
            let imputedArray = this.finalArray.filter(file => file.type == 'imputed')
            if (imputedArray.length > 0) {
                return imputedArray[0].size.rows
            } else {
                return 0
            }
        },
        original() {
            return this.mapProcess(this.originalArray)
        },
        final() {
            return this.mapProcess(this.finalArray.filter(x => x.type == 'train' || x.type == 'test'))
        },
        finalColumnsFiltered() {
            return this.final.columnList.filter(x => !['origin_file_name','origin_file_source_row'].includes(x))
        },
      
        columnDiff() {

            return {
                removed: underscore.difference(this.original.columnList, this.final.columnList),
                added: underscore.difference(this.final.columnList, this.original.columnList)
            }

        }
    },
    methods: {
        mapProcess(arr) {
            let rows = 0
            let missing = 0
            let files = []
            arr.map((item) => {
                files.push(item.name)
                rows += item.size.rows
                missing += item.missing.rows
            })
            let columnList = arr[0].names.cols.filter(x => !['origin_file_name','origin_file_source_row'].includes(x))
            let cols = columnList.length

            return {
                files,
                rows,
                missing,
                cols,
                columnList
            }
        }

    }
}
</script>
<style scoped>
.inline-div {
    display: inline;
}
</style>