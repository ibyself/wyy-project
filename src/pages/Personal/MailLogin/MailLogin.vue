<template>
    <div id="mailLogin-box">
        <div class="top-login">
            <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        <div class="login-form">
            <div class="input-mail">
                <label for="mail">
                    <input type="text" id="mail" placeholder="邮箱账号">
                </label>
            </div>
            <div class="input-pwd">
                <label for="pwd">
                    <input type="password" id="pwd" placeholder="密码">
                </label>
            </div>
            <div class="login-help">
                <span class="help-left">注册账号</span>
                <span class="help-right">忘记密码</span>
            </div>
            <div class="login-btn">登录</div>
            
        </div>
        <div class="footer" @click="$router.push('/personal')">
            <span class="text">其他登录方式</span>
            <i class="r-arrow"></i>
        </div>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {

    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #mailLogin-box
        overflow hidden  
        .top-login
            height 90px
            margin-top 56px
            text-align center
            img
                width 268px
        .login-form
            padding 114px 40px 0
            width 670px
            .input-mail,.input-pwd
                height 90px
                display flex
                align-items center
                border-bottom 2px solid #ECECEC
                color #666
                margin-bottom 32px
                label
                    width 590px 
                    input
                        font-size .4rem
                        line-height .6rem
                        outline none
            
            .input-pwd
                justify-content space-between
                label
                    width 380px
                
            .login-help
                height 42px
                display flex
                color #333
                line-height 42px
                font-size 28px
                justify-content space-between 
                margin-bottom 32px 
                .help-left 
                    color #7f7f7f
            .login-btn
                hegiht 90px
                background-color #DD1A21
                text-align center
                line-height 90px
                font-size 28px
                color #fff
                border-radius 6px
                margin-bottom 20px
            
        .footer
            margin-top 46px
            font-size 28px
            color #333
            display flex
            align-items center
            justify-content center
            .r-arrow
                display inline-block
                width 28px
                height 28px
                margin-left 4px
                background url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-6264a71cf0.png?imageView&type=webp') no-repeat center
                background-size 28px 28px
 
</style>
