<template>
	<div id="headerContainer">
		<div class="headerSearch">
			<a href="https://m.you.163.com/"></a>
			<div class="searchBox">
				<i class="icon-search"></i>
				<span>搜索商品, 共25372款好物</span>
			</div>
			<button class="login">登录</button>
		</div>
		<div class="headerNav">
      <div class="inner">
        <ul class="navList">
          <li class="navItem active">
            <a href="javascript:;">推荐</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">居家生活</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">服饰鞋包</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">美食酒水</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">个护清洁</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">母婴亲子</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">运动旅行</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">数码家电</a>
          </li>
          <li class="navItem">
            <a href="javascript:;">严选全球</a>
          </li>
        </ul>
      </div>
      <div class="toggle">
        <i class="icon-toggle"></i>
      </div>
    </div>
	</div>
</template>

<script  type="text/ecmascript-6">
	export default {

	};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #headerContainer
    .headerSearch
      padding 16px 30px
      background-color #fff
      display flex
      align-items center
      a
        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
        width 138px
        height 40px
        margin-right 20px
      .searchBox
        width 442px
        height 56px
        background-color #ededed
        border-radius 4px
        display flex
        align-items center
        justify-content center
        .icon-search
          background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
          width 28px
          height 28px
          margin-right 10px
          
        span
          color #666
          font-size 28px
      .login
        width 74px
        height 40px
        border 1px solid red
        border-radius 6px
        background-color #fff
        color red
        font-size 24px
        margin-left 15px
    .headerNav
      height 60px
      background-color #fff
      position relative
      .inner
        width 650px
        overflow hidden
        .navList
          display flex
          padding 0 30px
          .navItem
            box-sizing border-box
            padding 0 16px
            margin 0 10px
            white-space nowrap
            line-height 60px
            text-align center
            position relative
            &.active
              &:after
                content ''
                display block
                position absolute
                left 0
                bottom 0
                width 100%
                height 4px
                background-color red
              a
                color red
            a
              font-size 28px 
              color #333
      .toggle
        position absolute
        top 0
        right 0
        width 100px 
        height 100% 
        display flex   
        align-items center 
        justify-content center
        .icon-toggle
          width 30px
          height 30px
          background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp')







</style>
