<template>
  <v-card flat>
    <div class="text-left" v-if="fileData != null">
      <v-card class="py-2 px-3 mt-3 mr-5" flat outlined>
        <div class="overline">File Validation</div>

        <!-- Row alerts -->
        <div>
          <div v-if="alerts.maxRows">
            <v-icon color="orange" >mdi-alert-circle</v-icon>
            {{fileData.rows}} rows
            <span class="grey--text">({{maxRows}} max)</span>
          </div>
          <div v-if="!alerts.maxRows">
            <v-icon color="green" >mdi-check-circle</v-icon>
            {{fileData.rows}} rows
            <span class="grey--text">({{maxRows}} max)</span>
          </div>
        </div>
        <!-- Column alerts -->
        <div>
          <div v-if="alerts.maxFeatures">
            <v-icon color="orange" >mdi-alert-circle</v-icon>
            {{fileData.columns}} columns
            <span class="grey--text">({{maxFeatures}} max)</span>
          </div>
          <div v-if="!alerts.maxFeatures">
            <v-icon color="green" >mdi-check-circle</v-icon>
            {{fileData.columns}} columns
            <span class="grey--text">({{maxFeatures}} max)</span>
          </div>
        </div>
        <!-- More columns thans rows alerts -->
        <div>
          <div v-if="alerts.moreColthanRow">
            <v-icon color="orange" >mdi-alert-circle</v-icon>
            <span class="grey--text">File has more columns than rows. We do not recommend this.</span>
          </div>
          <div v-if="!alerts.moreColthanRow">
            <!-- Nothing -->
          </div>
        </div>


        <!-- Missing Data Error -->
        <div>
          <div v-if="alerts.missingData">
            <v-icon color="orange" >mdi-alert-circle</v-icon>
            {{fileData.nan_count}} rows are missing data.
          </div>
          <div v-if="!alerts.missingData">
            <v-icon color="green" >mdi-check-circle</v-icon> All rows have complete data.
          </div>
        </div>
        <!-- Text Data Error -->
        <div>
          <div v-if="alerts.textData">
            <v-icon color="orange" >mdi-alert-circle</v-icon>
            {{fileData.invalid_columns.length}} column<span v-if="fileData.invalid_columns.length > 1">s</span> (
            <v-chip dark small color="orange lighten-3" v-for="(item, key) in fileData.invalid_columns" :key="key">{{item}}</v-chip>
            ) has non-numerical data. MILO can only use numerical data.


          </div>
          <div v-if="!alerts.textData">
            <v-icon color="green" >mdi-check-circle</v-icon> All rows have numerical data.
          </div>
        </div>
      </v-card>







      <div>

      </div>





    </div>

  </v-card>

</template>
<script>
export default {
  name: 'DataValidation',
  props: ['fileData',
          'maxFeatures',
          'maxRows'
        ],
  data() {
    return {
      alerts: {
        missingData: false,
        textData: false,
        maxFeatures: false,
        maxRows: false,
        moreColthanRow: false,
        // maxCombinedRows: false,
      }

    }
  },
  watch: {
    fileData: function(newVal, oldVal) {
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      this.validateData()
    }
  },
  mounted() {
    this.validateData()
  },
  methods: {
    validateData() {
      if (this.fileData != null) {
        this.fileData.nan_count > 0 ? this.alerts.missingData = true : this.alerts.missingData = false
        this.fileData.invalid_columns.length > 0 ? this.alerts.textData = true : this.alerts.textData = false

        this.fileData.columns > this.maxFeatures ? this.alerts.maxFeatures = true : this.alerts.maxFeatures = false

        this.fileData.columns > this.fileData.rows ? this.alerts.moreColthanRow = true : this.alerts.moreColthanRow = false

        this.fileData.rows > this.maxRows ? this.alerts.maxRows = true : this.alerts.maxRows = false

        let validData = true
        if (this.alerts.textData || this.alerts.maxFeatures) {
          validData = false
        }
        this.$emit('dataValid', {bool: validData, alerts: this.alerts})

      }


    }
  }
}
</script>
