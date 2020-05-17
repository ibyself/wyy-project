import {GET_CATEGORY_NAV_LIST} from '../mutations-type'
import {getCategoryNavList} from '../../api'
const state={
    categoryNavList:[]
}
const mutations={
    [GET_CATEGORY_NAV_LIST](state,categoryNavList){
        state.categoryNavList=categoryNavList
    }
}
const actions={
    async reqCategoryNavList({commit}){
        let result=await getCategoryNavList()
        commit(GET_CATEGORY_NAV_LIST,result.categoryNavList)
    }
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters,
}