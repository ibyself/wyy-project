import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import * as API from './api'
import './common/validate'
import loadingGIF from './common/img/loading.gif'
import VueLazyLoad from 'vue-lazyload'
import waterfall from 'vue-waterfall2'
import './mock/mockServer'
Vue.use(VueLazyLoad,{loading:loadingGIF})
Vue.use(waterfall)
Vue.config.productionTip = false
Vue.prototype.$API=API
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
