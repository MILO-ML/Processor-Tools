(function(t){function a(a){for(var e,l,o=a[0],r=a[1],c=a[2],d=0,p=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(a);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,o=1;o<s.length;o++){var r=s[o];0!==i[r]&&(e=!1)}e&&(n.splice(a--,1),t=l(l.s=s[0]))}return t}var e={},i={app:0},n=[];function l(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=e,l.d=function(t,a,s){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)l.d(s,e,function(a){return t[a]}.bind(null,e));return s},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("v-main",[s("router-view"),s("MessageSnackbar")],1)],1)},n=[],l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center"},[s("v-snackbar",{attrs:{top:"",color:t.$store.state.snackbarMessage.color,timeout:2e3},model:{value:t.$store.state.snackbarMessage.show,callback:function(a){t.$set(t.$store.state.snackbarMessage,"show",a)},expression:"$store.state.snackbarMessage.show"}},[t._v(" "+t._s(t.$store.state.snackbarMessage.message)+" "),s("v-btn",{attrs:{icon:""},on:{click:function(a){t.$store.state.snackbarMessage.show=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1)},o=[],r={name:"MessageSnackbar",props:["snackbar"],watch:{show:function(){this.show=this.snackbar}},data:function(){return{show:!1}}},c=r,u=s("2877"),d=s("6544"),p=s.n(d),m=s("8336"),v=s("132d"),h=s("2db4"),g=Object(u["a"])(c,l,o,!1,null,null,null),_=g.exports;p()(g,{VBtn:m["a"],VIcon:v["a"],VSnackbar:h["a"]});var f={name:"App",components:{MessageSnackbar:_},data:function(){return{}}},b=f,C=s("7496"),S=s("f6c4"),M=Object(u["a"])(b,i,n,!1,null,null,null),x=M.exports;p()(M,{VApp:C["a"],VMain:S["a"]});var w=s("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var z=s("8c4f"),y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("v-card",{staticClass:"pa-3 text-center display-1",attrs:{outlined:"",rounded:""}},[t._v(" Milo Preprocessing Tools ")]),s("v-row",[s("v-col",{staticClass:"mt-3",attrs:{cols:"6"}},[s("v-card",{staticClass:"pa-3 text-center",attrs:{hover:"",outlined:"",rounded:""},on:{click:function(a){return t.$router.push({name:"ColumnReducer"})}}},[s("v-icon",{attrs:{"x-large":""}},[t._v("mdi-table-column-width")]),s("span",{staticClass:"title"},[t._v("Column Reducer Tool")])],1)],1),s("v-col",{staticClass:"mt-3",attrs:{cols:"6"}},[s("v-card",{staticClass:"pa-3 text-center",attrs:{hover:"",outlined:"",rounded:""},on:{click:function(a){return t.$router.push({name:"TrainTestSplit"})}}},[s("v-icon",{attrs:{"x-large":""}},[t._v("mdi-call-split")]),s("span",{staticClass:"title"},[t._v("Train and Test Builder")])],1)],1)],1)],1)},F=[],k={name:"Landing",data:function(){return{}}},D=k,T=s("b0af"),O=s("62ad"),V=s("a523"),L=s("0fd9"),j=Object(u["a"])(D,y,F,!1,null,null,null),N=j.exports;p()(j,{VCard:T["a"],VCol:O["a"],VContainer:V["a"],VIcon:v["a"],VRow:L["a"]});var P=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",{attrs:{outlined:""}},[s("v-card",{staticClass:"ma-3 pa-3",attrs:{outlined:""}},[s("div",[s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("v-btn",{attrs:{icon:""},on:{click:function(a){return t.$router.push({name:"Landing"})}}},[s("v-icon",[t._v("mdi-arrow-left")])],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[s("v-icon",{attrs:{"x-large":""}},[t._v("mdi-table-column-width")]),s("span",{staticClass:"title"},[t._v("Column Reducer Tool")])],1),s("v-col",{attrs:{cols:"3"}})],1)],1),s("v-card-text",{staticClass:"body-1"},[t._v(" This tool allows to extract specific columns from your training and test data to experiment with further refinement of your model. ")])],1),s("v-card",{staticClass:"ma-3 pa-3 ",attrs:{outlined:""}},[s("v-card-title",{},[t._v(" Step 1 - Select Data File(s) ")]),s("v-card-text",{},[s("p",[t._v(" Select your training data file. You may also select a second testing data file. ")]),s("v-layout",{staticClass:"ma-5"},[s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-file-input",{attrs:{"prepend-icon":"mdi-file",chips:"","truncate-length":"100",outlined:"",label:"Training Data File"},on:{change:t.trainingFileUpload}}),t.trainingDataLoading?s("v-progress-linear",{attrs:{indeterminate:""}}):t._e(),null!=t.trainingMetadata?s("span",[t._v(" Columns: "+t._s(t.trainingMetadata.columns)+" | Rows: "+t._s(t.trainingMetadata.rows)+" ")]):t._e()],1),s("v-col",{attrs:{cols:"6"}},[s("v-file-input",{attrs:{"prepend-icon":"mdi-file",chips:"","truncate-length":"100",outlined:"",label:"Testing Data File (optional)",disabled:null==t.trainingMetadata},on:{change:t.testingFileUpload}}),t.testingDataLoading?s("v-progress-linear",{attrs:{indeterminate:""}}):t._e(),null!=t.testingMetadata?s("span",[t._v(" Columns: "+t._s(t.testingMetadata.columns)+" | Rows: "+t._s(t.testingMetadata.rows)+" ")]):t._e()],1)],1)],1),null==t.dataColumnsMatch&&null!=t.trainingMetadata?s("div",{staticClass:"body-1"},[s("div",[s("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle")]),t._v(" Valid Data File ")],1)]):t._e(),null!=t.dataColumnsMatch?s("div",{staticClass:"body-1"},[s("div",[t.dataColumnsMatch.numberOfColumnsMatch?s("div",[s("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle")]),t._v(" Number of Columns Match Between Files ")],1):t._e(),t.dataColumnsMatch.numberOfColumnsMatch?t._e():s("div",[s("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle")]),t._v(" Number of Columns Differ Between Files ")],1)]),s("div",[t.dataColumnsMatch.columnNamesMatch?s("div",[s("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle")]),t._v(" Column Names Match Between Files ")],1):t._e(),t.dataColumnsMatch.columnNamesMatch?t._e():s("div",[s("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle")]),t._v(" Column Names Differ Between Files "),s("div",{staticClass:"pl-10 pb-5"},[s("div",[t._v(" Columns in Test File Missing from Training: "),t._l(t.dataColumnsMatch.inTestNotTrain,(function(a,e){return s("v-chip",{key:e,attrs:{outlined:""}},[t._v(t._s(a))])}))],2),s("div",[t._v(" Columns in Training File Missing from Training: "),t._l(t.dataColumnsMatch.inTrainNotTest,(function(a,e){return s("v-chip",{key:e,attrs:{outlined:""}},[t._v(t._s(a))])}))],2)])],1)])]):t._e()],1)],1),t.trainingMetadata?s("v-card",{staticClass:"ma-3 pa-3"},[s("v-card-title",[t._v("Step 2 - Target Selection")]),s("v-card-text",[s("p",[t._v(" Identify the column containing your target variable to ensure it is maintain in the output. ")]),s("v-layout",{staticClass:"ma-5"},[s("v-row",{attrs:{wrap:""}},[s("v-col",{attrs:{cols:"6"}},[s("v-autocomplete",{attrs:{clearable:"",items:t.targetColumnList,outlined:"",label:"Target Column"},on:{change:t.targetColumnChanged},model:{value:t.target,callback:function(a){t.target=a},expression:"target"}})],1)],1)],1),null!=t.target?s("div",{staticClass:"body-1"},[s("div",[s("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle")]),t._v(" Valid Target Field ")],1)]):t._e()],1)],1):t._e(),t.target?s("v-card",{staticClass:"ma-3 pa-3"},[s("v-card-title",[t._v("Step 3 - Column Selection")]),s("p",[t._v("Click below to selected columns or paste a comma seperated list of columns to be outputted. "),s("br"),t._v(" You can also "),s("a",{on:{click:function(a){t.miloDialog=!0}}},[t._v('import from a MILO results "report.csv" file')]),t._v(".")]),s("v-layout",{staticClass:"ma-5"},[s("v-row",{attrs:{wrap:""}},[s("v-col",{attrs:{cols:"12"}},[s("v-combobox",{staticClass:"ml-8",attrs:{clearable:"",multiple:"",chips:"",items:t.nontargetColumnList,outlined:"",label:"Selected Columns"},on:{change:function(a){return t.splitPasted()}},model:{value:t.selectedColumns,callback:function(a){t.selectedColumns=a},expression:"selectedColumns"}}),null==t.errorColumns&&t.selectedColumns.length>0?s("div",{staticClass:"body-1"},[s("div",[s("v-icon",{attrs:{color:"green"}},[t._v("mdi-check-circle")]),t._v(" Valid Column Selection ")],1)]):t._e(),null!=t.errorColumns?s("div",[t.errorColumns.length>0?s("div",[s("v-icon",{attrs:{color:"red"}},[t._v("mdi-alert-circle")]),s("span",[t._v("The following column"),t.errorColumns.length>1?s("span",[t._v("s")]):t._e(),t._v(" are invalid and have been removed from the list:")]),t._l(t.errorColumns,(function(a,e){return s("v-chip",{key:e,attrs:{small:"",outlined:""}},[t._v(t._s(a))])}))],2):t._e()]):t._e(),s("p")],1)],1)],1),s("v-card-text")],1):t._e(),null==t.errorColumns&&t.selectedColumns.length>0?s("v-card",{staticClass:"ma-3 pa-3"},[s("v-card-title",[t._v("Step 4 - Save Files")]),s("v-card-text",[s("v-row",[s("v-col",{staticClass:"mr-0 pr-1",attrs:{cols:"5"}},[s("v-text-field",{attrs:{label:"Training Output",outlined:""},model:{value:t.trainingOutputFilename,callback:function(a){t.trainingOutputFilename=a},expression:"trainingOutputFilename"}})],1),s("v-col",{staticClass:"ml-0 pl-0 pt-7",attrs:{cols:"1"}},[s("div",{staticClass:"body-1 black--text"},[t._v(" .csv ")])]),s("v-col",{staticClass:"mr-0 pr-1",attrs:{cols:"5"}},[s("v-text-field",{attrs:{label:"Testing Output",outlined:""},model:{value:t.testingOutputFilename,callback:function(a){t.testingOutputFilename=a},expression:"testingOutputFilename"}})],1),s("v-col",{staticClass:"ml-0 pl-0 pt-7",attrs:{cols:"1"}},[s("div",{staticClass:"body-1 black--text"},[t._v(" .csv ")])])],1),s("v-btn",{attrs:{rounded:"",large:"",dark:"",color:"grey darken-3"},on:{click:t.finalFileRequests}},[t._v("Build New File"),null!=t.trainingMetadata?s("span",[t._v("s")]):t._e()])],1)],1):t._e(),s("v-dialog",{attrs:{"max-width":"700"},model:{value:t.miloDialog,callback:function(a){t.miloDialog=a},expression:"miloDialog"}},[s("v-card",{staticClass:"pa-3 pb-6",attrs:{flat:""}},[s("v-card-title",[s("p",[t._v('Import Columns from MILO Results "report.csv" File')]),s("v-spacer"),s("v-btn",{staticClass:"mt-n5",attrs:{icon:"",flat:""},on:{click:function(a){t.miloDialog=!1}}},[s("v-icon",{attrs:{medium:""}},[t._v("mdi-close")])],1)],1),s("v-card-text",{staticClass:"mx-0 py-0"},[s("v-file-input",{attrs:{"prepend-icon":"mdi-file",chips:"","truncate-length":"200",outlined:"",label:"MILO Data File"},on:{change:t.miloFileUpload}}),t.miloDataLoading?s("v-progress-linear",{attrs:{indeterminate:""}}):t._e(),s("v-spacer"),s("div",[s("div",{staticClass:"ml-8 mb-3"},[t._v("Select columns based on the feature selector method.")]),t.miloMetadata?s("v-select",{staticClass:"ml-8",attrs:{items:t.miloMetadata,outlined:"",label:"Feature Selector Method"},model:{value:t.miloColumns,callback:function(a){t.miloColumns=a},expression:"miloColumns"}}):t._e(),s("div",[t._v(" "+t._s(t.miloColumns)+" ")])],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticClass:"mr-2",attrs:{rounded:"",large:"",dark:"",color:"grey darken-3"},on:{click:t.setMiloColumns}},[t._v("Select Columns")])],1)],1)],1)],1)},$=[],E=(s("4160"),s("159b"),s("caad"),s("2532"),s("ac1f"),s("1276"),s("d81d"),s("498a"),s("a434"),s("0481"),s("c975"),s("26e9"),s("5319"),s("b0c0"),s("bc3a")),R=s.n(E),A=s("c46f"),B=s("19de"),I=s.n(B),U={name:"Home",data:function(){return{file:"",loading:!1,serverData:null,trainingMetadata:null,trainingDataLoading:!1,testingMetadata:null,testingDataLoading:!1,miloMetadata:null,miloDataLoading:!1,targetColumnList:null,nontargetColumnList:null,target:null,toggle:null,selectedColumns:[],errorColumns:null,trainingOutputFilename:"training_reduced",testingOutputFilename:"testing_reduced",miloColumns:[],miloDialog:!1}},sockets:{connect:function(){console.log("socket connected")},customEmit:function(t){this.serverData=t,this.loading=!1}},computed:{dataColumnsMatch:function(){if(null!=this.trainingMetadata&&null!=this.testingMetadata){var t=this.trainingMetadata.columns==this.testingMetadata.columns,a=A["a"].difference(this.trainingMetadata.column_names,this.testingMetadata.column_names),s=A["a"].difference(this.testingMetadata.column_names,this.trainingMetadata.column_names),e=0==s.length&&0==a.length;return{numberOfColumnsMatch:t,columnNamesMatch:e,inTrainNotTest:a,inTestNotTrain:s}}return null}},methods:{resetStepOne:function(){},resetStepTwo:function(){},resetStepThree:function(){},resetStepFour:function(){},splitPasted:function(){var t=this;this.selectedColumns.forEach((function(a,s){if(a.includes(",")){console.log("comma detected",a,s);var e=a.split(",");e.map((function(t){return t.trim()})),t.selectedColumns.splice(s,1,e)}})),this.selectedColumns=this.selectedColumns.flat(),this.errorColumns=[],this.selectedColumns.forEach((function(a){t.nontargetColumnList.includes(a)||t.errorColumns.push(a)})),this.errorColumns.forEach((function(a){var s=t.selectedColumns.indexOf(a);t.selectedColumns.splice(s,1)})),0==this.errorColumns.length&&(this.errorColumns=null),this.selectedColumns=A["a"].uniq(this.selectedColumns)},targetColumnChanged:function(t){var a=this;null==t?this.nontargetColumnList=null:(this.nontargetColumnList=[],this.trainingMetadata.column_names.reverse().forEach((function(s){s!=t&&a.nontargetColumnList.push(s)})))},testEmit:function(){this.$socket.emit("custom"),this.loading=!0},trainingFileUpload:function(t){var a=this;if(null!=t){this.trainingDataLoading=!0;var s=new FormData;s.append("file",t),R.a.post("data_upload",s,{headers:{"Content-Type":"multipart/form-data","X-inbound":"training_data"}}).then((function(s){a.trainingMetadata=s.data,a.targetColumnList=a.trainingMetadata.column_names.reverse(),a.trainingOutputFilename=t.name.replace(".csv","")+"_reduced",a.trainingDataLoading=!1}))}else this.trainingMetadata=null,this.trainingOutputFilename="",this.trainingDataLoading=!1},testingFileUpload:function(t){var a=this;if(null!=t){this.testingDataLoading=!0;var s=new FormData;console.log(t),s.append("file",t),R.a.post("data_upload",s,{headers:{"Content-Type":"multipart/form-data","X-inbound":"testing_data"}}).then((function(s){a.testingMetadata=s.data,a.testingOutputFilename=t.name.replace(".csv","")+"_reduced",a.testingDataLoading=!1}))}else this.testingMetadata=null,this.testingOutputFilename="",this.testingDataLoading=!1},miloFileUpload:function(t){var a=this;if(null!=t){var s=new FormData;this.miloDataLoading=!0,s.append("file",t),R.a.post("data_upload",s,{headers:{"Content-Type":"multipart/form-data","X-inbound":"milo_file"}}).then((function(t){a.miloMetadata=[];var s=JSON.parse(t.data.result).selected_features;for(var e in s)a.miloMetadata.push({text:e,value:JSON.parse(s[e])});a.miloDataLoading=!1}))}else this.miloMetadata=null,this.miloDataLoading=!1},setMiloColumns:function(){this.selectedColumns=this.miloColumns,this.miloDialog=!1},finalFileRequests:function(){var t=this,a=[];this.selectedColumns.forEach((function(t){a.push(t)})),a.push(this.target);var s=!(null==this.testingMetadata),e={finalColumns:a,hasTestData:s};R.a.post("column_reducer/build_files",e,{headers:{"Content-Type":"application/json"}}).then((function(){return R.a.post("/column_reducer/training_reduced_file",{name:t.trainingOutputFilename},{headers:{"Content-Type":"application/json"}})})).then((function(a){if(console.log(a),I()(a.data,t.trainingOutputFilename+".csv"),null!=t.testingMetadata)return R.a.post("/column_reducer/testing_reduced_file",{name:t.testingOutputFilename},{headers:{"Content-Type":"application/json"}})})).then((function(a){console.log(a),null!=t.testingMetadata&&I()(a.data,t.testingOutputFilename+".csv")}))}}},J=U,q=s("c6a6"),X=s("99d9"),Y=s("cc20"),G=s("2b5d"),H=s("169a"),W=s("23a7"),K=s("a722"),Q=s("8e36"),Z=s("b974"),tt=s("2fa4"),at=s("8654"),st=Object(u["a"])(J,P,$,!1,null,null,null),et=st.exports;p()(st,{VAutocomplete:q["a"],VBtn:m["a"],VCard:T["a"],VCardActions:X["a"],VCardText:X["b"],VCardTitle:X["c"],VChip:Y["a"],VCol:O["a"],VCombobox:G["a"],VContainer:V["a"],VDialog:H["a"],VFileInput:W["a"],VIcon:v["a"],VLayout:K["a"],VProgressLinear:Q["a"],VRow:L["a"],VSelect:Z["a"],VSpacer:tt["a"],VTextField:at["a"]});var it=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-container",[s("v-card",{staticClass:"ma-3 pa-3",attrs:{outlined:""}},[s("div",[s("v-row",[s("v-col",{attrs:{cols:"3"}},[s("v-btn",{attrs:{icon:""},on:{click:function(a){return t.$router.push({name:"Landing"})}}},[s("v-icon",[t._v("mdi-arrow-left")])],1)],1),s("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[s("v-icon",{attrs:{"x-large":""}},[t._v("mdi-call-split")]),s("span",{staticClass:"title"},[t._v("Train and Test Builder")])],1),s("v-col",{attrs:{cols:"3"}})],1)],1),s("v-card-text",{staticClass:"body-1"},[t._v(" This tool allows you to build both a training and validation data set from a single data file. ")])],1),s("v-stepper",{model:{value:t.e1,callback:function(a){t.e1=a},expression:"e1"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v(" Select Data File ")]),s("v-divider"),s("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}},[t._v(" Select Target Column ")]),s("v-divider"),s("v-stepper-step",{attrs:{complete:t.e1>3,step:"3"}},[t._v(" Select Split ")]),s("v-divider"),s("v-stepper-step",{attrs:{step:"4"}},[t._v(" Output ")])],1),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-card",{staticClass:"ma-3 px-4 py-2",attrs:{flat:""}},[s("v-row",[s("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[s("v-file-input",{attrs:{chips:"",clearable:"",label:"Data File",outlined:"","prepend-icon":"mdi-file","truncate-length":"100"},on:{change:t.trainTestFileUpload},model:{value:t.file,callback:function(a){t.file=a},expression:"file"}})],1),s("v-col",{staticClass:"pb-0",attrs:{cols:"6"}},[t.fileData?s("v-card",{staticClass:"pt-3",attrs:{flat:""}},[s("v-icon",{attrs:{large:""}},[t._v("mdi-table-column")]),t._v(" "+t._s(t.fileData.columns)+" columns "),s("v-icon",{attrs:{large:""}},[t._v("mdi-table-row")]),t._v(" "+t._s(t.fileData.rows)+" rows ")],1):t._e()],1),t.fileData&&t.fileData.nan_count>0?s("v-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12"}},[s("v-alert",{attrs:{dense:"",text:"",type:"info"}},[t._v(" "+t._s(t.fileData.nan_count)+" rows have missing data. This will affect the output (see next step). ")])],1):t._e()],1)],1),s("div",{staticClass:"text-right pa-2"},[s("v-btn",{attrs:{color:"primary",disabled:null==t.fileData},on:{click:function(a){t.e1=2}}},[t._v(" Next "),s("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1),s("v-stepper-content",{attrs:{step:"2"}},[s("v-card",{staticClass:"ma-3 px-4 py-2",attrs:{flat:""}},[s("v-row",[s("v-col",{attrs:{cols:"6"}},[t.fileData?s("v-select",{attrs:{clearable:"",outlined:"",label:"Target Column","prepend-icon":"mdi-bullseye",items:t.fileData.column_names},on:{change:t.determineClassMetadata},model:{value:t.targetColumn,callback:function(a){t.targetColumn=a},expression:"targetColumn"}}):t._e()],1)],1),t.class0nanSize>0||t.class1nanSize>0?s("v-alert",{attrs:{dense:"",text:"",type:"info"}},[t._v(" Some data cannot be used. "),t.class0nanSize>0?s("span",[t._v("For class 0, "+t._s(t.class0nanSize)+" row "),1==t.class0nanSize?s("span",[t._v(" is ")]):t._e(),t.class0nanSize>1?s("span",[t._v("s are ")]):t._e(),t._v("excluded. ")]):t._e(),t.class1nanSize>0?s("span",[t._v("For class 1, "+t._s(t.class1nanSize)+" row "),1==t.class1nanSize?s("span",[t._v(" is ")]):t._e(),t.class1nanSize>1?s("span",[t._v("s are ")]):t._e(),t._v("excluded. ")]):t._e()]):t._e(),s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"distrobution-box",style:{background:"#2196F3",width:t.class0percent+"%"}},[s("div",{staticClass:"distrobution-box",style:{opacity:.3,background:"white",width:t.class0nanPercent+"%",position:"absolute",left:"16px",bottom:"15px"}}),s("p",{staticClass:"pa-0 ma-0"},[t._v(" Class 0 ("+t._s(t.class0percent)+"%) ")]),0==t.class0nanSize?s("p",{staticClass:"pa-0 ma-0"},[t._v(" N="+t._s(t.class0size)+" ")]):t._e(),t.class0nanSize>0?s("p",{staticClass:"pa-0 ma-0"},[s("span",{staticStyle:{"text-decoration":"line-through"}},[t._v(t._s(t.class0size))]),s("v-icon",{attrs:{color:"white"}},[t._v("mdi-arrow-right")]),t._v(" "+t._s(t.class0size-t.class0nanSize)+" ")],1):t._e()]),s("div",{staticClass:"distrobution-box",style:{background:"#009688",width:t.class1percent+"%"}},[s("div",{staticClass:"distrobution-box",style:{opacity:.3,background:"white",width:t.class1nanPercent+"%",position:"absolute",right:"16px",bottom:"15px"}}),s("p",{staticClass:"pa-0 ma-0"},[t._v(" Class 1 ("+t._s(t.class1percent)+"%) ")]),0==t.class1nanSize?s("p",{staticClass:"pa-0 ma-0"},[t._v(" N="+t._s(t.class1size)+" ")]):t._e(),t.class1nanSize>0?s("p",{staticClass:"pa-0 ma-0"},[s("span",{staticStyle:{"text-decoration":"line-through"}},[t._v(t._s(t.class1size))]),s("v-icon",{attrs:{color:"white"}},[t._v("mdi-arrow-right")]),t._v(" "+t._s(t.class1size-t.class1nanSize)+" ")],1):t._e()]),s("div",{staticClass:"distrobution-box",style:{background:"#d3d3d3",width:t.placeholderSlot+"%"}},[t._v("Data Distrobution Displayed After Selection")])]),t.minSampleSizeError?s("v-alert",{attrs:{color:"red",type:"error"}},[t._v("To use this tool, each class must have a an N greater than "+t._s(t.minSampleSize)+".")]):t._e()],1),s("v-row",{staticClass:"pa-2"},[s("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[s("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(a){t.e1=1}}},[s("v-icon",[t._v("mdi-chevron-left")]),t._v(" Previous ")],1)],1),s("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[s("v-btn",{attrs:{float:"right",color:"primary",disabled:!(!t.minSampleSizeError&&null!=t.targetColumn)},on:{click:function(a){t.e1=3}}},[t._v(" Next "),s("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1),s("v-stepper-content",{attrs:{step:"3"}},[t.minSampleSizeError||null==t.targetColumn?t._e():s("v-card",{staticClass:"ma-3 px-4 py-2",attrs:{flat:""}},[s("div",[t._v(" Select amount of training data. "+t._s(t.minSampleSize)+" is the minimum supported sample size. We have automatically selected a value that you may adjust below. ")]),s("v-row",[s("v-col",{attrs:{cols:"5"}},[s("v-slider",{attrs:{min:t.minSampleSize,max:t.maxSampleSize},on:{change:t.calculatePercentage},model:{value:t.trainingClassSampleSize,callback:function(a){t.trainingClassSampleSize=a},expression:"trainingClassSampleSize"}})],1),s("v-col",{attrs:{cols:"1"}},[t._v(" "+t._s(t.trainingClassSampleSize)+" ")])],1),s("div",[t._v(" Select how you would like to use remain data in the global generalization testing set. ")]),s("v-radio-group",{on:{change:t.calculatePercentage},model:{value:t.prevalenceOption,callback:function(a){t.prevalenceOption=a},expression:"prevalenceOption"}},[s("v-radio",{attrs:{label:"Use All Remaining Data After Training Data Removed"}}),s("v-radio",{attrs:{label:"Maintain Original Prevalence in Validation File (some data will be removed)"}})],1),s("v-card",{staticClass:"mb-10",attrs:{flat:""}},[s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"title-box",style:{background:"white",width:t.barSizes.nan+"%"}}),s("div",{staticClass:"title-box",style:{background:"#7E57C2",width:t.barSizes.train0+t.barSizes.train1+"%"}},[t._v(" Training Data ")]),s("div",{staticClass:"title-box",style:{background:"#5C6BC0",width:t.barSizes.test0+t.barSizes.test1+"%"}},[t._v(" Generalization Testing Data ")])]),s("div",{staticStyle:{width:"100%"}},[s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("div",t._g(t._b({staticClass:"distrobution-box",style:{background:"grey",width:t.barSizes.nan+"%"}},"div",i,!1),e),[s("div",[t._v("n="+t._s(t.fileData.nan_count))])])]}}],null,!1,2576134156)},[s("span",[t._v(t._s(t.fileData.nan_count)+" rows are missing data and cannot be used in the final data set")])]),s("div",{staticClass:"distrobution-box",style:{background:"#64B5F6",width:t.barSizes.train0+"%"}},[s("div",[t._v("Train 0")]),s("div",[t._v("n="+t._s(t.trainingClassSampleSize))])]),s("div",{staticClass:"distrobution-box",style:{background:"#4DB6AC",width:t.barSizes.train1+"%"}},[s("div",[t._v("Train 1")]),s("div",[t._v("n="+t._s(t.trainingClassSampleSize))])]),s("div",{staticClass:"distrobution-box",style:{background:"#42A5F5",width:t.barSizes.test0+"%"}},[s("div",[t._v("Test 0")]),s("div",[t._v("n="+t._s(t.barData.test0global))])]),s("div",{staticClass:"distrobution-box",style:{background:"#26A69A",width:t.barSizes.test1+"%"}},[s("div",[t._v("Test 1")]),s("div",[t._v("n="+t._s(t.barData.test1global))])]),s("div",{staticClass:"distrobution-box",style:{background:"#F48FB1",width:t.barSizes.extra+"%"}},[s("div",[t._v("Not Used")]),s("div",[t._v("n="+t._s(t.barData.extra))])])],1)])],1),s("v-row",{staticClass:"pa-2"},[s("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[s("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(a){t.e1=2}}},[s("v-icon",[t._v("mdi-chevron-left")]),t._v(" Previous ")],1)],1),s("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[s("v-btn",{attrs:{dark:"",float:"right",color:"primary"},on:{click:function(a){t.e1=4}}},[t._v(" Next "),s("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1),s("v-stepper-content",{attrs:{step:"4"}},[s("div",{staticClass:"overline mb-5"},[t._v("Training and Testing Data File Outputs")]),s("v-row",[s("v-col",{attrs:{cols:"6"}},[s("v-text-field",{attrs:{outlined:"",dense:"",label:"Training Data File Name",suffix:".csv"},model:{value:t.outputFiles.training,callback:function(a){t.$set(t.outputFiles,"training",a)},expression:"outputFiles.training"}})],1),s("v-col",{attrs:{cols:"6"}},[s("v-text-field",{attrs:{outlined:"",dense:"",label:"Testing Data File Name",suffix:".csv"},model:{value:t.outputFiles.testing,callback:function(a){t.$set(t.outputFiles,"testing",a)},expression:"outputFiles.testing"}})],1)],1),4==t.e1?s("div",[s("div",{staticClass:"overline"},[t._v("Additional File Outputs")]),s("v-row",[1==t.prevalenceOption?s("v-col",{attrs:{cols:"6"}},[s("v-switch",{attrs:{label:"Export unused data from the majority class."},model:{value:t.outputSettings.extraFile,callback:function(a){t.$set(t.outputSettings,"extraFile",a)},expression:"outputSettings.extraFile"}}),t.outputSettings.extraFile?s("v-text-field",{attrs:{outlined:"",dense:"",label:"Extra Data File",suffix:".csv"},model:{value:t.outputFiles.extra,callback:function(a){t.$set(t.outputFiles,"extra",a)},expression:"outputFiles.extra"}}):t._e()],1):t._e(),t.fileData.nan_count>0?s("v-col",{attrs:{cols:"6"}},[s("div",[s("v-switch",{attrs:{label:"Export the rows missing data."},model:{value:t.outputSettings.nanFile,callback:function(a){t.$set(t.outputSettings,"nanFile",a)},expression:"outputSettings.nanFile"}})],1),t.outputSettings.nanFile?s("v-text-field",{attrs:{outlined:"",dense:"",label:"Rows with Missing Data File",suffix:".csv"},model:{value:t.outputFiles.nan,callback:function(a){t.$set(t.outputFiles,"nan",a)},expression:"outputFiles.nan"}}):t._e()],1):t._e()],1)],1):t._e(),s("v-row",{staticClass:"pa-2"},[s("v-col",{staticClass:"text-left",attrs:{cols:"6"}},[s("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(a){t.e1=3}}},[s("v-icon",[t._v("mdi-chevron-left")]),t._v(" Previous ")],1)],1),s("v-col",{staticClass:"text-right",attrs:{cols:"6"}},[s("v-btn",{attrs:{dark:"",float:"right",color:"primary"},on:{click:function(a){return t.processFiles()}}},[t._v(" Create Files "),s("v-icon",{staticClass:"pl-2"},[t._v("mdi-file")])],1)],1)],1)],1)],1)],1),s("v-dialog",{model:{value:t.completionDialog,callback:function(a){t.completionDialog=a},expression:"completionDialog"}},[s("v-card",{staticClass:"text-center pa-10 loaders-transition"},[1==t.processFileLoading?s("v-progress-circular",{attrs:{color:"blue",size:"160",width:"15",indeterminate:""}},[t._v(" Processing ")]):t._e(),0==t.processFileLoading?s("div",[s("v-icon",{staticClass:"loaders-transition",staticStyle:{"font-size":"160px"},attrs:{color:"green"}},[t._v("mdi-check-circle-outline")]),s("div",{staticClass:"display-1"},[s("v-icon",{attrs:{"x-large":""}},[t._v("mdi-arrow-down")]),t._v(" Your files are available below. "),s("v-icon",{attrs:{"x-large":""}},[t._v("mdi-arrow-down")])],1),s("div",{staticClass:"mt-5"},[s("v-btn",{staticClass:"mx-2",on:{click:function(a){t.completionDialog=!1}}},[t._v("Make Edits")]),s("v-btn",{attrs:{color:"primary"},on:{click:function(a){return t.$router.push({name:"Landing"})}}},[t._v("Close Tool")])],1)],1):t._e()],1)],1)],1)},nt=[],lt={name:"TrainTestSplit",data:function(){return{e1:1,file:null,fileData:null,prevalenceOption:0,targetColumn:null,classMetadata:null,class0size:0,class0percent:0,class0nanSize:0,class0nanPercent:0,class1size:0,class1percent:0,class1nanSize:0,class1nanPercent:0,placeholderSlot:100,minSampleSize:50,maxSampleSize:100,trainingClassSampleSize:0,widthTest:30,barSizes:{nan:0,train0:0,train1:0,test0:0,test1:0,extra:0},barData:{test0global:0,test1global:0,extra:0},outputFiles:{training:null,testing:null,nan:null,extra:null},outputSettings:{nanFile:!1,extraFile:!1},completionDialog:!1,processFileLoading:!1}},computed:{minSampleSizeError:function(){return null!=this.classMetadata&&(this.classMetadata.class_counts[0]<this.minSampleSize||this.classMetadata.class_counts[1]<this.minSampleSize)}},methods:{resetStep1:function(){this.file=null,this.fileData=null,this.resetStep2()},resetStep2:function(){this.targetColumn=null,this.classMetadata=null,this.class0size=0,this.class0percent=0,this.class0nanSize=0,this.class0nanPercent=0,this.class1size=0,this.class1percent=0,this.class1nanSize=0,this.class1nanPercent=0,this.placeholderSlot=100,this.resetStep3()},resetStep3:function(){console.log("reset step 3")},trainTestFileUpload:function(t){var a=this;if(null!=t){var s=new FormData;s.append("file",t),R.a.post("/train_test_split/upload",s,{headers:{"Content-Type":"multipart/form-data","X-filename":t.name}}).then((function(t){a.fileData=t.data}))["catch"]((function(){a.$store.commit("snackbarMessageSet",{color:"red lighten-1",message:"Error processing file."}),a.resetStep1()}))}else this.resetStep1()},determineClassMetadata:function(t){var a=this;if(null!=t){var s={target_column:this.targetColumn,storage_id:this.fileData.storage_id};return R.a.post("train_test_split/metadata",s,{headers:{"Content-Type":"application/json"}}).then((function(t){a.classMetadata=t.data,a.classMetadata.class_counts=JSON.parse(a.classMetadata.class_counts),null!=a.classMetadata.nan_class_counts&&(a.classMetadata.nan_class_counts=JSON.parse(a.classMetadata.nan_class_counts)),a.calculateMetadataMetrics(),a.findTrainingClassSampleSize(),a.calculatePercentage(),a.makeFileNames()}))["catch"]((function(){a.$store.commit("snackbarMessageSet",{color:"red lighten-1",message:"Invalid column selection. Values are not binary."}),a.resetStep2()}))}this.resetStep2()},makeFileNames:function(){var t=this.file.name.trim();t=t.replace(".csv",""),t=t.trim(),this.outputFiles.training=t+"_training",this.outputFiles.testing=t+"_testing",this.outputFiles.extra=t+"_extra",this.outputFiles.nan=t+"_missing_data"},processFiles:function(){var t=this,a={target_column:this.targetColumn,storage_id:this.fileData.storage_id,training_class_sample_size:this.trainingClassSampleSize,prevalence_option:this.prevalenceOption,majority_class:this.classMetadata.majority_class,extra:this.barData.extra};return this.completionDialog=!0,this.processFileLoading=!0,R.a.post("train_test_split/process",a,{headers:{"Content-Type":"application/json"}}).then((function(a){if(console.log(a),t.processFileLoading=!1,I()(a.data.training,t.outputFiles.training+".csv"),I()(a.data.testing,t.outputFiles.testing+".csv"),t.outputSettings.extraFile&&I()(a.data.extra,t.outputFiles.extra+".csv"),t.outputSettings.nanFile)try{I()(a.data.nan,t.outputFiles.nan+".csv")}catch(s){console.log("error")}}))},findTrainingClassSampleSize:function(){var t=this.classMetadata.class_counts[this.classMetadata.minority_class],a=Math.round(t/2);this.maxSampleSize=t,this.minSampleSize>a?this.trainingClassSampleSize=this.minSampleSize:this.trainingClassSampleSize=a},calculateMetadataMetrics:function(){this.class0size=this.classMetadata.class_counts[0],this.class1size=this.classMetadata.class_counts[1],this.class0percent=Math.round(this.classMetadata.class_counts[0]/this.classMetadata.total_count*1e3)/10,this.class1percent=Math.round(this.classMetadata.class_counts[1]/this.classMetadata.total_count*1e3)/10,this.placeholderSlot=0,null!=this.classMetadata.nan_class_counts&&(this.class0nanSize=this.classMetadata.nan_class_counts[0],this.class0nanPercent=Math.round(this.classMetadata.nan_class_counts[0]/this.classMetadata.class_counts[0]*1e3)/10,this.class1nanSize=this.classMetadata.nan_class_counts[1],this.class1nanPercent=Math.round(this.classMetadata.nan_class_counts[1]/this.classMetadata.class_counts[1]*1e3)/10)},calculatePercentage:function(){if(0==this.prevalenceOption)null!=this.classMetadata.nan_class_counts?(this.barSizes.nan=(this.classMetadata.nan_class_counts[0]+this.classMetadata.nan_class_counts[1])/this.classMetadata.total_count*100,this.barSizes.train0=this.trainingClassSampleSize/this.classMetadata.total_count*100,this.barSizes.train1=this.trainingClassSampleSize/this.classMetadata.total_count*100,this.barSizes.test0=100*(this.classMetadata.class_counts[0]-this.trainingClassSampleSize-(this.classMetadata.nan_class_counts[0]+this.classMetadata.nan_class_counts[1]))/this.classMetadata.total_count,this.barSizes.test1=100*(this.classMetadata.class_counts[1]-this.trainingClassSampleSize-(this.classMetadata.nan_class_counts[0]+this.classMetadata.nan_class_counts[1]))/this.classMetadata.total_count,this.barSizes.extra=0,this.barData.test0global=this.classMetadata.class_counts[0]-this.trainingClassSampleSize-this.classMetadata.nan_class_counts[0],this.barData.test1global=this.classMetadata.class_counts[1]-this.trainingClassSampleSize-this.classMetadata.nan_class_counts[1],this.barData.extra=0):(this.barSizes.train0=this.trainingClassSampleSize/this.classMetadata.total_count*100,this.barSizes.train1=this.trainingClassSampleSize/this.classMetadata.total_count*100,this.barSizes.test0=100*(this.classMetadata.class_counts[0]-this.trainingClassSampleSize)/this.classMetadata.total_count,this.barSizes.test1=100*(this.classMetadata.class_counts[1]-this.trainingClassSampleSize)/this.classMetadata.total_count,this.barSizes.extra=0,this.barData.test0global=this.classMetadata.class_counts[0]-this.trainingClassSampleSize,this.barData.test1global=this.classMetadata.class_counts[1]-this.trainingClassSampleSize,this.barData.extra=0);else if(1==this.prevalenceOption)if(null!=this.classMetadata.nan_class_counts){this.barSizes.nan=(this.classMetadata.nan_class_counts[0]+this.classMetadata.nan_class_counts[1])/this.classMetadata.total_count*100,this.barSizes.train0=this.trainingClassSampleSize/this.classMetadata.total_count*100,this.barSizes.train1=this.trainingClassSampleSize/this.classMetadata.total_count*100;var t=this.classMetadata.class_counts[this.classMetadata.majority_class]/this.classMetadata.total_count,a=this.classMetadata.class_counts[this.classMetadata.minority_class]/this.classMetadata.total_count,s=this.classMetadata.class_counts[this.classMetadata.minority_class]-this.trainingClassSampleSize-this.classMetadata.nan_class_counts[this.classMetadata.minority_class],e=Math.round(s/a),i=Math.round(t*e),n=this.classMetadata.class_counts[this.classMetadata.majority_class]-this.trainingClassSampleSize-i-this.classMetadata.nan_class_counts[this.classMetadata.majority_class];0==this.classMetadata.majority_class?(this.barSizes.test0=100*i/this.classMetadata.total_count,this.barSizes.test1=100*s/this.classMetadata.total_count,this.barData.test0global=i,this.barData.test1global=s):1==this.classMetadata.majority_class&&(this.barSizes.test0=100*s/this.classMetadata.total_count,this.barSizes.test1=100*i/this.classMetadata.total_count,this.barData.test0global=s,this.barData.test1global=i),this.barData.extra=n,this.barSizes.extra=100*n/this.classMetadata.total_count}else{this.barSizes.train0=this.trainingClassSampleSize/this.classMetadata.total_count*100,this.barSizes.train1=this.trainingClassSampleSize/this.classMetadata.total_count*100;var l=this.classMetadata.class_counts[this.classMetadata.majority_class]/this.classMetadata.total_count,o=this.classMetadata.class_counts[this.classMetadata.minority_class]/this.classMetadata.total_count,r=this.classMetadata.class_counts[this.classMetadata.minority_class]-this.trainingClassSampleSize,c=Math.round(r/o),u=Math.round(l*c),d=this.classMetadata.class_counts[this.classMetadata.majority_class]-this.trainingClassSampleSize-u;0==this.classMetadata.majority_class?(this.barSizes.test0=100*u/this.classMetadata.total_count,this.barSizes.test1=100*r/this.classMetadata.total_count,this.barData.test0global=u,this.barData.test1global=r):1==this.classMetadata.majority_class&&(this.barSizes.test0=100*r/this.classMetadata.total_count,this.barSizes.test1=100*u/this.classMetadata.total_count,this.barData.test0global=r,this.barData.test1global=u),this.barData.extra=d,this.barSizes.extra=100*d/this.classMetadata.total_count}}}},ot=lt,rt=(s("7886"),s("0798")),ct=s("ce7e"),ut=s("490a"),dt=s("67b6"),pt=s("43a6"),mt=s("ba0d"),vt=s("7e85"),ht=s("e516"),gt=s("9c54"),_t=s("56a4"),ft=s("b73d"),bt=s("3a2f"),Ct=Object(u["a"])(ot,it,nt,!1,null,null,null),St=Ct.exports;p()(Ct,{VAlert:rt["a"],VBtn:m["a"],VCard:T["a"],VCardText:X["b"],VCol:O["a"],VContainer:V["a"],VDialog:H["a"],VDivider:ct["a"],VFileInput:W["a"],VIcon:v["a"],VProgressCircular:ut["a"],VRadio:dt["a"],VRadioGroup:pt["a"],VRow:L["a"],VSelect:Z["a"],VSlider:mt["a"],VStepper:vt["a"],VStepperContent:ht["a"],VStepperHeader:gt["a"],VStepperItems:gt["b"],VStepperStep:_t["a"],VSwitch:ft["a"],VTextField:at["a"],VTooltip:bt["a"]}),e["a"].use(z["a"]);var Mt=[{path:"/columnreducer",name:"ColumnReducer",component:et},{path:"/traintestsplit",name:"TrainTestSplit",component:St},{path:"/",name:"Landing",component:N}],xt=new z["a"]({mode:"history",base:"/",routes:Mt}),wt=xt,zt=s("2f62");e["a"].use(zt["a"]);var yt=new zt["a"].Store({state:{snackbarMessage:{show:!1,color:"blue",message:"Test message"}},mutations:{snackbarMessageSet:function(t,a){t.snackbarMessage.show=!0,t.snackbarMessage.message=a.message,t.snackbarMessage.color=a.color}},actions:{},modules:{}}),Ft=s("f309");e["a"].use(Ft["a"]);var kt=new Ft["a"]({});e["a"].config.productionTip=!1,new e["a"]({router:wt,store:yt,vuetify:kt,render:function(t){return t(x)}}).$mount("#app")},7886:function(t,a,s){"use strict";s("b0e1")},b0e1:function(t,a,s){}});
//# sourceMappingURL=app.41a2d4e9.js.map