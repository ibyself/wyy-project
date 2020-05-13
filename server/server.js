let Koa=require('koa')
let KoaRouter=require('koa-router')
//生成应用和路由器
const app=new Koa()
const router=new KoaRouter()
//路由
router.get('/test',(ctx,next)=>{
    ctx.body='服务器返回数据'
})

//获取首页数据
let homeData=require('./datas/homeData.json')
router.get('/getHomeData',(ctx,next)=>{
    ctx.body=homeData
})
//获取cateNavList
let categoryNavList=require('./datas/categoryNavList.json')
router.get('/categoryNavList',(ctx,next)=>{
    ctx.body=categoryNavList
})
//获取cateList
let categoryList=require('./datas/category.json')
router.get('/categoryList',(ctx,next)=>{
    ctx.body=categoryList
})

//安装路由器，声明使用中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen('3000',()=>{
    console.log('服务器启动成功了')
    console.log('服务器地址：http://localhost:3000')
})