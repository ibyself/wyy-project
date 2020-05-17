import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import home from './modules/home'
import search from './modules/search'
import category from './modules/category'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        home,
        search,
        category
    },
    state,
    mutations,
    actions,
    getters
})
