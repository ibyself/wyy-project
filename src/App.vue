<template>
    <div id="appContainer">
      <router-view></router-view>
      <FooterNav v-show="$route.meta.isShowFooterNav"/>
    </div>
</template>

<script  type="text/ecmascript-6">
    import FooterNav from './components/FooterNav/FooterNav'
    export default {
      components:{
				FooterNav
			}
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #appContainer
    width 100vw
    height 100vh
    background-color #eee 
    position relative
    
</style>
