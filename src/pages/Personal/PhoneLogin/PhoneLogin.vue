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
            <div class="login-btn">登陆</div>
            <div class="clause">
                
                <label for="cbox" class="cbox">
                    <input type="checkbox" id="cbox">
                    <span class="text">我同意</span>
                    <a href="javascript:;">《服务条款》</a>
                    <span class="text">和</span>
                    <a href="javascript:;">《网易隐私政策》</a>
                </label>
            </div>
        </div>
        <div class="footer">
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
            padding 0 40px
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
</style>
