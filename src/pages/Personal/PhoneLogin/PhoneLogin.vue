<template>
    <div id="phoneLogin-box">
        <div class="top-login">
            <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        <div class="login-form">
            <div class="input-phone">
                <label for="phone">
                    <input type="text" id="phone" placeholder="请输入手机号">
                </label>
            </div>
            <div class="input-pwd">
                <label for="pwd">
                    <input type="password" id="pwd" placeholder="请输入短信验证码">
                </label>
                <a href="javascript:;" class="getCode">获取验证码</a> 
            </div>
            <div class="login-help">
                <span class="help-left">遇到问题?</span>
                <span class="help-right">使用密码验证登录</span>
            </div>
            <div class="login-btn">登录</div>
            <div class="clause">
                <label for="cbox">
                    <input type="checkbox" class="cbox" name="cbox" id="cbox">
                    <span class="text">我同意</span>
                    <a href="javascript:;">《服务条款》</a>
                    <span class="text">和</span>
                    <a href="javascript:;">《网易隐私政策》</a>
                </label>
            </div>
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
    #phoneLogin-box
        overflow hidden  
        .top-login
            height 90px
            margin-top 56px
            text-align center
            img
                width 268px
        .login-form
            padding 40px 40px 0
            width 670px
            .input-phone,.input-pwd
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
                .getCode
                    display block
                    width 164px
                    height 54px
                    font-size 28px
                    text-align center
                    line-height 54px
                    border-radius 4px
                    border 2px solid #D4D4D4
                    background-color #fff
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
            .clause
                height 48px
                color #7f7f7f
                font-size 24px
                display flex
                align-items center              
                label
                    display flex
                    align-items center
  
                    .text 
                        margin-left 10px
                    a
                        color #007AFF
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
