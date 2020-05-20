<template>
    <div class="m-swiperTab">
        <div class="swiper-container" ref="swiperWrap">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(navItem,index) in navList" :key="index">
                    <div class="s-group">
                        <a href="javascript:;" class="s-item" v-for="(item,index) in navItem" :key="index">
                            <div class="itemImg">
                                <img :src="item.picUrl" alt="">
                            </div>
                            <div class="itemTitle">
                                <div class="mainText">{{item.mainTitle}}</div>
                                <div class="descText">{{item.viceTitle}}</div>
                            </div>
                        </a>
                        
                    </div>
                </div>
                
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import _ from 'lodash'
    export default {
        data(){
            return {
                navList:[]
            }
        },
        methods:{
            _initSwiper(){
                if(!this.$refs.swiperWrap){
                    return 
                }
                new Swiper(this.$refs.swiperWrap,{
                    slidesPerView: "auto",
                    pagination: {
                        el: '.swiper-pagination',
                        type:'custom',
                        clickable:true,
                        renderCustom: function (swiper, current, total) {
                            var customHtml=''
                            for(let i=0;i<total;i++){
                                if(i===current-1){
                                    customHtml+='<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'
                                }else{
                                    customHtml+='<span class="swiper-pagination-customs"></span>'
                                }
                            }
                            return customHtml
                        }
                    },
                   
                })
            }
        },
        async mounted(){
            let result= await this.$API.getTopicNavList()
            let arr=_.chunk(result.data.navList,8) 
            this.navList=arr[0].map((item,index)=>[item,arr[1][index]])
            this.$nextTick(()=>{
                this._initSwiper()
            })
        }
    }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .m-swiperTab
        position absolute
        top 1.85rem
        left 50%
        z-index 2
        width 710px
        background-color #fff
        margin-left -355px
        border-radius .16rem
        .swiper-container
            height 540px
            border-radius .16rem
            .swiper-wrapper
                height 540px
                display flex
                .swiper-slide
                    width 176px
                    height 100%
                    .s-group
                        background-color #fff
                        padding 36px 6px 6px
                        display flex
                        flex-direction column
                        width 168px
                        .s-item
                            display flex
                            flex-direction column
                            justify-content center
                            align-items center
                            width 168px 
                            height 200px
                            &:last-child
                                margin-top 14px
                            .itemImg
                                width 120px
                                height 120px
                                img
                                    width 100%
                                    height 100%
                            .itemTitle
                                width 100%
                                text-align center
                                margin-top 12px
                                .mainText
                                    color #333
                                    font-size 28px
                                    line-height 40px
                                .descText
                                    color #999
                                    font-size 24px
                                    line-height 30px
                                    margin-top 2px
            /deep/.swiper-pagination-customs
                display inline-block
                width 40px
                height 4px
                background-color #d9d9d9
            /deep/.swiper-pagination-customs-active
                background-color #DD1A21


 
</style>
