<template>
    <div id="toPicContainer">
        <TopNav :title="title">
            <template v-slot:header-title>
                <div class="header-title">值得买</div>
            </template>
        </TopNav>
        <div class="toPicWrap" ref="toPic">
            <div class="toPicContent">
                <div class="m-swiperWrap">
                    <div class="m-swiperTitle">
                        <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
                        <div class="text">严选好物&nbsp;用心生活</div>
                    </div>
                    <TopicNavList/>
                </div>
                <TopicList :waterfallData="waterfallData"/>
            </div>
        </div>
    </div>
    
</template>

<script  type="text/ecmascript-6">
    import Bscroll from 'better-scroll'
    import {mapState} from 'vuex'
    import TopNav from '../../components/TopNav/TopNav'
    import TopicNavList from './TopicNavList/TopicNavList'
    import TopicList from './TopicList/TopicList'
    export default {
        data(){
            return {
                title:'值得买',
                page:1
            }
        },
        components:{
            TopNav,
            TopicNavList,
            TopicList
        },
        methods:{
            _initScroll(){
                if(!this.$refs.toPic){
                    return
                }
                if(this.toPicScroll){
                    this.toPicScroll.refresh()
                }else{
                    this.toPicScroll=new Bscroll(this.$refs.toPic,{
                        scrollY:true,
                        click:true,
                        pullUpLoad:true,
                        probeType:2
                    })
                    this.toPicScroll.on('pullingUp',async()=>{
                        this.page++
                        await this.$store.dispatch('reqRecAutoData',{page:this.page,size:5})
                        this.toPicScroll.finishPullUp()
                    })

                }
            }
        },
        async mounted(){
            await this.$store.dispatch('reqWterfallData')
            await this.$store.dispatch('reqRecAutoData',{page:this.page,size:5})

            this.$nextTick(()=>{
                this._initScroll()
            })
        },
        computed:{
            ...mapState({
                waterfallData:state=>state.topic.waterfallData,
            })
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    #toPicContainer
        height calc(100vh - 100px)
        overflow hidden
        margin-top 100px
        .toPicWrap
            width 100%
            height calc(100vh - 186px)
            .toPicContent
                background-color #eee
                .m-swiperWrap
                    padding-top 144px
                    position relative
                    height 550px
                    .m-swiperTitle
                        position absolute
                        top 0
                        height 524px
                        width 100%
                        background url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png') no-repeat center
                        background-size 100%
                        img
                            position absolute
                            top .6rem
                            left .12rem
                            width 130px
                            height 68px
                        >.text
                            color #fff
                            font-size 30px
                            position absolute
                            left 1.9rem
                            top .9rem
                            line-height .44rem
                            height .44rem
</style>
