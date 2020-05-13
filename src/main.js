import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import * as API from './api'
Vue.config.productionTip = false
Vue.prototype.$API=API
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
