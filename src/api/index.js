import ajax from './ajax'
//请求首页数据
export const getHomeData=()=>ajax('/api/getHomeData')

//获取热门搜索
export const getHotSearchList=()=>ajax('/wy/xhr/search/init.json')

//查询商品
export const getSearchList=(keywordPrefix)=>ajax.post('/wy/xhr/search/searchAutoComplete.json',{keywordPrefix})

//获取分类nav列表
export const getCategoryNavList=()=>ajax('/api/categoryNavList')

//获取分类数据
export const getCategoryList=()=>ajax('/api/categoryList')

//获取toPic导航
export const getTopicNavList=()=>ajax('/wy/topic/v1/know/navWap.json')

//topic data
export const getManual=()=>ajax('/wy/topic/v1/find/recManual.json')

//上拉加载数据
export const getRecAuto=(page,size,exceptIds='109891,13563,112934')=>ajax({
    url:'/wy/topic/v1/find/recAuto.json',
    params:{page,size,exceptIds}
})