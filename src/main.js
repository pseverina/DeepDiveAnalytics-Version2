import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import BootstrapVue from 'bootstrap-vue'
import EvaIcons from 'vue-eva-icons'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 
Vue.use(BootstrapVue)
Vue.use(EvaIcons)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
