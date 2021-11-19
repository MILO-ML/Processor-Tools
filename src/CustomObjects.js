import axios from 'axios'



export default {
  queryFileList() {
    let payload = {
      user_id: 'ui000001' //replace in future
    }
    return axios.post('/query/all_files', payload, {
        headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      return response
    }).catch(error => {
      throw error
    })
  },


  newFileObject() {
    return {
      //core properties
      file: null, //actual file
      uploading: false, //for UI
      dataSet: null, //type of data set (training, test, combined, etc.)
      fileMetadata: null, //calculated as part of the data_file_upload() method
      fileValidation: null,
      target: null, //set by calling validateTarget() to validate_target_column()
      featureList: null, //set by validateTarget()

      //output
      fileOutputName: '',

      //tool specific



      //upload file
      dataFileUpload() {
        if (this.file != null) {
          //this method uploads form data
          var formData = new FormData();
          //file name data stored in X-file header of post request
          formData.append("file", this.file);

          this.uploading = true

          return axios.post('/data_file_upload', formData, {
              headers: {
              'Content-Type': 'multipart/form-data',
              'X-filename': this.file.name,
              'X-filegroup': this.dataSet
            }
          }).then(result => {
            this.fileMetadata = result.data

            //fileMetadata that needs further parsing
            this.fileMetadata.describe = JSON.parse(this.fileMetadata.describe)

            //UI changes post upload
            this.uploading = false

            //filename extraction with successful upload
            this.fileOutputName = this.file.name.split('.csv')[0]
          })
        }
      },
      validateTarget(column) {
        //reset downstream properities if value changes
        this.correlation = null

        //based on column

        if (column != null ) {
          let payload = {
            target: column,
            storage_id: this.fileMetadata.storage_id
          }
          return axios.post('/validate/target_column', payload, {
              headers: {
              'Content-Type': 'application/json',
              'X-inbound': 'validation'
            }
          }).then(result => {
            this.featureList = []

            if(result.data.validation) {
              this.fileMetadata.column_names.forEach(item => {
                if (item != column) {
                  this.featureList.push(item)
                }
              })
              return true
            }
            else {
              this.target = null
              return Error('Invalid target column.')
            }
          })
        }
      },

      //Correlation
      correlation: null,
      correlationThreshold: 0.85,
      correlationFeatureRemovalList: [],

      correlationFilteredList() {
        if (this.correlation) {
          return this.correlation.list.filter(item => {return item.value > this.correlationThreshold})
        }
        else return []
      },
      toggleFeatureRemoval(feature) {
        !this.correlationFeatureRemovalList.includes(feature) ? this.correlationFeatureRemovalList.push(feature) : this.correlationFeatureRemovalList.splice(this.correlationFeatureRemovalList.indexOf(feature),1)
      },
      generateCorrelation() {
        if (this.target != null) {
          let payload = {
            target: this.target,
            storage_id: this.fileMetadata.storage_id
          }
          return axios.post('/calc/cor', payload, {
              headers: {
              'Content-Type': 'application/json',
              'X-inbound': 'validation'
            }
          }).then(result => {
            this.correlation = result.data
            return true
          }).catch(error => {
            return error
          })
        }
        else {
          return Promise.reject(Error('No target is selected.'))
        }
      },
      buildCorrelationFiles() {
        let payload = {
          storage_id: this.fileMetadata.storage_id,
          feature_removal_list: this.correlationFeatureRemovalList
        }
        return axios.post('/calc/cor/process', payload, {
            headers: {
            'Content-Type': 'application/json',
          }
        }).then(response => {
          this.correlationOutputFiles = response.data

          return response.data //two files (output and nan)
        })
      },


    }
  },


}
