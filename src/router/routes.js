const Home=()=>import('../pages/Home/Home.vue')
const Category=()=>import('../pages/Category/Category.vue')
const Topic=()=>import('../pages/Topic/Topic.vue')
const Cart=()=>import('../pages/Cart/Cart.vue')
const Personal=()=>import('../pages/Personal/Personal.vue')
const Search=()=>import('../pages/Search/Search.vue')
const CateRight=()=>import('../pages/CateRight/CateRight.vue')
const PhoneLogin=()=>import('../pages/Personal/PhoneLogin/PhoneLogin.vue')
const MailLogin=()=>import('../pages/Personal/MailLogin/MailLogin.vue')

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
        children:[
            {
                path:'phonelogin',
                component:PhoneLogin,
                meta:{
                    isShowFooterNav:false
                }
            },
            {
                path:'maillogin',
                component:MailLogin,
                meta:{
                    isShowFooterNav:false
                } 
            }
        ],
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
        redirect:'/topic'
    }
]