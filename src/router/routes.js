const Home=()=>import('../pages/Home/Home.vue')
const Category=()=>import('../pages/Category/Category.vue')
const Topic=()=>import('../pages/Topic/Topic.vue')
const Cart=()=>import('../pages/Cart/Cart.vue')
const Personal=()=>import('../pages/Personal/Personal.vue')


export default [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
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
        path:'/',
        redirect:'/home'
    }
]