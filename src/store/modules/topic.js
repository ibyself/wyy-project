import {GET_WATERFALL_DATA,Get_RECAUTO_DATA} from '../mutations-type'
import {getManual,getRecAuto} from '../../api'
const state={
    waterfallData:[],
    recAutodata:[]
}
const mutations={
    [GET_WATERFALL_DATA](state,waterfallData){
        state.waterfallData=waterfallData
    },
    [Get_RECAUTO_DATA](state,recAutodata){
        state.recAutodata=recAutodata
    }
}
const actions={
    async reqWterfallData({commit}){
        let result =await getManual()
        commit(GET_WATERFALL_DATA,result.data)
    },
    async reqRecAutoData({commit},{page,size}){
        let result=await getRecAuto(page,size)
        console.log(result.data.result)
        commit(Get_RECAUTO_DATA,result.data.result)
    }
}
const getters={
}
export default {
    state,
    mutations,
    actions,
    getters
}