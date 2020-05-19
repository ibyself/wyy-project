<template>
    <div id="cateRightWrap" ref="rightWrap">
        <div class="cateRightContainer" v-if="categoryObj">
            <div class="bannerWrap">
                <img :src="categoryObj.imgUrl" alt="">
            </div>
            <div class="listWrap" v-if="categoryObj.subCateList">
                <ul class="contentList" >
                    <li class="cItem" v-for="(cateItem,index) in categoryObj.subCateList" :key="index">
                        <img :src="cateItem.bannerUrl" alt="">
                        <span>{{cateItem.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="conentWrap" v-if="categoryObj.cateList">
                <div class="content"  v-for="(cateItem,index) in categoryObj.cateList" :key="index">
                    <div class="contentTitle" >{{cateItem.itemTitle}}</div>
                    <ul class="contentList">
                        <li class="cItem" v-for="(item,index) in cateItem.itemList" :key="index">
                            <img :src="item.wapBannerUrl" alt="">
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    export default {
        data(){
            return {
                categoryObj:{},
                categoryList:[]
            }
        },
        methods:{
            _initScroll(){
                if(this.$refs.rightWrap){
                    if(this.rightScroll){
                        this.rightScroll.refresh()
                    }else{
                        this.rightScroll=new BScroll(this.$refs.rightWrap,{
                            scrollY:true,
                            click:true
                        })
                    }
                }
                
                
            }
        },
        async mounted(){
            this.categoryList = await this.$API.getCategoryList()
            this.categoryObj=this.categoryList.find((item,index)=>this.$route.params.id*1===item.id)
            this.$nextTick(()=>{
                this._initScroll()
            })
        },
        watch:{
            $route(){
                if(this.categoryList){
                    this.categoryObj=this.categoryList.find((item,index)=>this.$route.params.id*1===item.id)
                }
            }
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #cateRightWrap
        height calc(100vh - 186px)
        .cateRightContainer
            padding .4rem .4rem .28rem
            background-color #fff
            .bannerWrap
                width 100%
                height 192px
                margin-bottom .4rem
                img 
                    width 100%
                    height 100%
            .listWrap,.content
                .contentList
                    display flex
                    flex-wrap wrap
                    .cItem
                        width 144px
                        height 216px
                        margin-right .45rem
                        color #333
                        font-size .32rem
                        text-align center
                        line-height .48rem
                        overflow hidden
                        text-overflow ellipsis
                        img 
                            width 144px
                            height 144px
                        &:nth-child(3n+3)
                            margin-right 0
            .conentWrap
                .content
                    margin-bottom .16rem
                    .contentTitle
                        height 43px
                        line-height 43px
                        margin-bottom 24px
                        padding-bottom 8px
                        font-size 28px
                        color #333
</style>
