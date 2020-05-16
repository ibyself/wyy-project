<template>
    <div id="categoryContainer">
        <div class="cateHeader">
           <div class="headerSearch">
                <i class="icon-search"></i>
                <span class="text">搜索商品, 共26849款好物</span>
           </div>
        </div>
        <div class="cateContent">
            <div class="cont-left">
                <CateLeft/>
            </div>
            <div class="cont-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import CateLeft from '../../components/CateLeft/CateLeft'
    export default {
        components:{
            CateLeft
        },
        methods:{
            _initScroll(){
                if(this.leftScroll){
                    this.leftScroll.refresh()
                }else{
                    this.leftScroll=new BScroll('.cont-left',{
                        scrollY:true,
                        click:true
                    })
                }
                
            }
        },
        mounted(){
            this._initScroll()
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #categoryContainer
        .cateHeader
            height 88px
            border-bottom 1px solid #d9d9d9
            background-color #fff
            display flex 
            padding 0 30px
            align-items center
            .headerSearch
                width 690px
                height 56px
                line-height 56px
                background-color #ededed
                border-radius .1rem
                display flex
                align-items center
                justify-content center
                .icon-search
                    width 28px
                    height 28px
                    margin-right 10px
                    background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
                    background-size 100% 100%
                .text
                    font-size 28px
                    color #666
                    line-height 42px
        .cateContent
            height calc(100vh - 186px)
            background-color #fff
            .cont-left
                width 162px
                float left
                height 95%
                overflow hidden
            .cont-right 
                box-sizing border-box
                width calc(750px - 162px)
                height 100%
                float left
                overflow hidden
</style>    
