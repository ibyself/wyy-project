import ajax from './ajax'
//请求首页数据
export const getHomeData=()=>ajax('/api/getHomeData')

//获取热门搜索
export const getHotSearchList=()=>ajax('/wy/xhr/search/init.json')

//查询商品
export const getSearchList=(keywordPrefix)=>ajax.post('/wy/xhr/search/searchAutoComplete.json',{keywordPrefix})