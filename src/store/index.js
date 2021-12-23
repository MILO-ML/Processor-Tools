import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //UI Component
    snackbarMessage: {
      show: false,
      color: 'blue',
      message: 'Test message'
    },
    fileProcessingDialog: {
      loading: false,
      open: false
    },
    dataSet: [
      {name: 'Training', value: 'training'},
      {name: 'Testing', value: 'testing'},
      {name: 'Combined Train/Test', value: 'combined'},
    ],
    tools: {
      'TrainTestSplit': {
        title: 'Train and Test Builder',
        icon: 'mdi-call-split',
        description: 'Build both a training and validation data set from a single data file.'
      },
      'Colinearity': {
        title: 'Multicollinearity Assessment & Removal Tool',
        icon: 'mdi-chart-bell-curve-cumulative',
        description: 'Assess for multicollinearity in datasets along with feature removal options.'
      },
      'FeatureSelector': {
        title: 'Feature Selector',
        icon: 'mdi-select-all',
        description: 'Select the subset of data with the most relative value.'
      },
      'ColumnReducer': {
        title: 'Column Reducer Tool',
        icon: 'mdi-table-column-width',
        description: 'Extract specific columns from your training and test data to experiment with further refinement of your model.'
      },
      'Encoder': {
        title: 'Encoder Tool',
        icon: 'mdi-file-code-outline',
        description: 'Covert non-numeric datatypes for use in MILO.'
      },

    }


  },
  mutations: {
    //MessageSnackbar
    snackbarMessageSet(state, val) {
      state.snackbarMessage.show = true
      state.snackbarMessage.message = val.message
      state.snackbarMessage.color = val.color
    },
    //FileProcessingDialog
    FileProcessingDialogOpenSet(state, val) {
      state.fileProcessingDialog.open = val
    },
    FileProcessingDialogLoadingSet(state, val) {
      state.fileProcessingDialog.loading = val
    },
  },
  actions: {
  },
  modules: {
  }
})
