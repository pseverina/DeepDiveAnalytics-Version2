import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import BootstrapVue from 'bootstrap-vue'
import EvaIcons from 'vue-eva-icons'
import VueCarousel from '@chenfengyuan/vue-carousel'
import Lightbox from 'vue-easy-lightbox'
import Viewer from 'v-viewer'
import { Progress } from 'element-ui'
import zircle from 'zircle'
 
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'viewerjs/dist/viewer.css'
import 'zircle/dist/zircle.css'

Vue.use(zircle) 
Vue.use(BootstrapVue)
Vue.use(EvaIcons)
Vue.use(VueCarousel)
Vue.use(Lightbox)
Vue.use(Viewer)
Vue.use(Progress)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
