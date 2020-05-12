import {GET_HOT_SEARCH_LIST,GET_SEARCH_LIST} from '../mutations-type'
import {getHotSearchList,getSearchList} from '../../api'
const state={
    hotSearchList:{},
    searchList:[]
}
const mutations={
    [GET_HOT_SEARCH_LIST](state,{hotSearchList}){
        state.hotSearchList=hotSearchList
    },
    [GET_SEARCH_LIST](state,{searchList}){
        state.searchList=searchList
    }
}
const actions={
    async reqHotSearch({commit}){
        const result=await getHotSearchList()
        if(result.code==200){
            commit(GET_HOT_SEARCH_LIST,{hotSearchList:result.data})
        }
    },
    async reqSearch({commit},keyword){
        const result=await getSearchList(keyword)
        if(result.code==200){
            console.log(11)
            commit(GET_SEARCH_LIST,{searchList:result.data})
        }
    }
}
const getters={}
export default{
    state,
    mutations,
    actions,
    getters
}