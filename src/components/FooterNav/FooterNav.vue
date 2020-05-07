<template>
    <div id="footerNavContainer">
			<div class="item" @click="$router.push('/home')">
				<i class="u-icon u-icon-tabBar-index"></i>
				<span>首页</span>
			</div>
			<div class="item" @click="$router.push('/category')">
				<i class="u-icon u-icon-tabBar-cate"></i>
				<span>分类</span>
			</div>
			<div class="item" @click="$router.push('/topic')">
				<i class="u-icon u-icon-tabBar-topic"></i>
				<span>值得买</span>
			</div>
			<div class="item" @click="$router.push('/cart')">
				<i class="u-icon u-icon-tabBar-cart"></i>
				<span>购物车</span>
			</div>
			<div class="item" @click="$router.push('/personal')">
				<i class="u-icon u-icon-tabBar-user"></i>
				<span>个人</span>
			</div>
    </div>
</template>

<script  type="text/ecmascript-6">
    export default {
			
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
	#footerNavContainer
		position fixed
		left 0
		bottom 0
		width 100%
		height 98px
		background-color white
		display flex
		.item
			width 20%
			display flex
			flex-direction column
			align-items center
			justify-content center
			.u-icon
				background-image url(https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png?imageView&type=webp) 
				background-size 40px 400px	
				display inline-block
				width 40px
				height 40px
			.u-icon-tabBar-index
				background-position 0 -195px
			.u-icon-tabBar-cate
				background-position 0 -115px
			.u-icon-tabBar-topic
				background-position 0 -280px
			.u-icon-tabBar-cart
				background-position 0 -35px
			.u-icon-tabBar-user
				background-position 0 -360px
			span 
				font-size 24px
				color #666
				margin-top 4px
</style>
