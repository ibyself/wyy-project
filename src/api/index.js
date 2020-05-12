import ajax from './ajax'
//请求首页数据
export const getHomeData=()=>ajax('/api/getHomeData')