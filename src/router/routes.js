const Home=()=>import('../pages/Home/Home.vue')
const Category=()=>import('../pages/Category/Category.vue')
const Topic=()=>import('../pages/Topic/Topic.vue')
const Cart=()=>import('../pages/Cart/Cart.vue')
const Personal=()=>import('../pages/Personal/Personal.vue')
const Search=()=>import('../pages/Search/Search.vue')
const CateRight=()=>import('../pages/CateRight/CateRight.vue')
export default [
    {
        path:'/home',
        component:Home,
        meta:{
            isShowFooterNav:true
        }
    },
    {
        path:'/category',
        component:Category,
        children:[
            {
                path:'/category/right/:id',
                component:CateRight,
                meta:{
                    isShowFooterNav:true
                }
            }
        ],
        meta:{
            isShowFooterNav:true
        }
    },
    {
        path:'/topic',
        component:Topic,
        meta:{
            isShowFooterNav:true
        }
    },
    {
        path:'/cart',
        component:Cart,
        meta:{
            isShowFooterNav:true
        }
    },
    {
        path:'/personal',
        component:Personal,
        meta:{
            isShowFooterNav:false
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{
            isShowFooterNav:false
        }
    },
    {
        path:'/',
        redirect:'/home'
    }
]