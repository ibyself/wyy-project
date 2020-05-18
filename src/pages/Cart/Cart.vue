<template>
    <div id="cartContainer">
        <div class="cartHeaderWrap">
            <div class="cartHeader">
                <span class="head-left">购物车</span>
                <span class="head-right">领券</span>
            </div>
        </div>
        <div class="cartContent">
            <div class="servicePolicy">
                <ul class="spList">
                    <li class="spItem">
                        <i class="sp-icon"></i>
                        30天无忧退货
                    </li>
                    <li class="spItem">
                        <i class="sp-icon"></i>
                        48小时快速退款
                    </li>
                    <li class="spItem">
                        <i class="sp-icon"></i>
                        满99元免邮费
                    </li>
                </ul>  
            </div>
            <div class="cartWrap">
                <div class="cartImg">
                    <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="">
                </div>
                <div class="cartBtn" @click="$router.push('/personal')">登录</div>
            </div>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {

    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #cartContainer
        .cartHeaderWrap
            background-color #fff
            .cartHeader
                height 88px
                padding 0 30px
                display flex
                align-items center
                justify-content space-between
                .head-left
                    width 108px
                    height 88px
                    font-size 36px
                    line-height 88px
                    color #333
                .head-right 
                    width 90px
                    height 88px
                    font-size 30px
                    line-height 88px
                    color red
        .cartContent
            height 100vh
            background-color #f4f4f4
            position relative
            .servicePolicy
                background-color #eee
                .spList
                    height 70px
                    padding 0 30px
                    display flex
                    justify-content space-between
                    .spItem
                        font-size 24px
                        color #666
                        display flex
                        align-items center
                        
                        .sp-icon
                            display block
                            width 10px
                            height 10px
                            margin-right 6px
                            background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp') no-repeat center
                            background-size 10px 10px
            .cartWrap
                position absolute
                left 50%
                top 50%
                transform translate(-50%,-50%)
                display flex
                flex-direction column
                align-items center
                .cartImg
                    width 248px
                    height 248px
                    margin-bottom 40px
                    img
                        width 100%
                        height 100%
                .cartBtn
                    height 92px
                    width 480px
                    background-color red
                    color #fff
                    font-size 30px
                    text-align center
                    line-height 92px
                    border-radius .04rem

</style>
