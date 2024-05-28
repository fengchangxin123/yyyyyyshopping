import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import auth from './auth.js'
Vue.use(auth)

import axios from './axios.js'
Vue.use(axios)

import VuePreview from 'vue-preview';
Vue.use(VuePreview);

import MintUI from 'mint-ui'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
