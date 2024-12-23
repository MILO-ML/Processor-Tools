import Vue from 'vue'
import $store from '../store'

import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import ColumnReducer from '../views/ColumnReducer.vue'
import TrainTestSplit from '../views/TrainTestSplit.vue'
import Colinearity from '../views/Colinearity.vue'
import FeatureSelector from '../views/FeatureSelector.vue'
import Encoder from '../views/Encoder.vue'
import Integrated from '../views/Integrated.vue'
import Diagnostics from '../views/Diagnostics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/columnreducer',
    name: 'ColumnReducer',
    component: ColumnReducer
  },
  {
    path: '/colinearity',
    name: 'Colinearity',
    component: Colinearity
  },
  {
    path: '/featureselector',
    name: 'FeatureSelector',
    component: FeatureSelector
  },
  {
    path: '/traintestsplit',
    name: 'TrainTestSplit',
    component: TrainTestSplit
  },
  {
    path: '/encoder',
    name: 'Encoder',
    component: Encoder
  },
  {
    path: '/integrated',
    name: 'Integrated',
    component: Integrated
  },  
  {
    path: '/diagnostics',
    name: 'Diagnostics',
    component: Diagnostics
  },
  {
    path: '*',
    name: 'Landing',
    component: Landing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  //if the route has licensing
  if(Object.keys($store.state.tools).includes(to.name)) {
    //and requires pro
    if ($store.state.tools[to.name].proLicense) {
      $store.state.proLicense ? next() : next({name: 'Landing'})
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})


export default router
