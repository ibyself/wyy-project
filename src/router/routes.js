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
        component:Home
    },
    {
        path:'/category',
        component:Category,
        children:[
            {
                path:'/category/right/:id',
                component:CateRight
            }
        ]
    },
    {
        path:'/topic',
        component:Topic
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/personal',
        component:Personal
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/',
        redirect:'/home'
    }
]