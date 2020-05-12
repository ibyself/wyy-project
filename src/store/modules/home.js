import {GET_HOME_DATA} from '../mutations-type'
import {getHomeData} from '../../api'
const state={
    homeData:{},
    
}
const mutations={
    [GET_HOME_DATA](state,{homeData}){
        state.homeData=homeData
    },
    
}
const actions={
    async reqHomeData({commit}){
        const result=await getHomeData()
        commit(GET_HOME_DATA,{homeData:result})
    },
    
}
const getters={}

export default{
    state,
    mutations,
    actions,
    getters
}