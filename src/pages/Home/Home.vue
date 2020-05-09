<template>
    <div id="homeContainer">
		<HeaderNav/>
		
		<div class="homeContentWrap">
			<div class="homeContent">
				<!-- 轮播图 -->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="(item,index) in imgsList" :key="index">
							<img :src="item" alt="">
						</div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>
				</div>
				<!-- 服务 -->
				<div class="servicePolicy">
					<ul class="list">
						<li class="item">
							<a href="javascript:;">
								<img class="icon" src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"/>
								<span class="text">网易自营品牌</span>
							</a>
						</li>
						<li class="item">
							<a href="javascript:;">
								<img class="icon" src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"/>
								<span class="text">30天无忧退货</span>
							</a>
						</li>
						<li class="item">
							<a href="javascript:;">
								<img class="icon" src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"/>
								<span class="text">48小时快速退款</span>
							</a>
						</li>
					</ul>
				</div>
				<!-- nav -->
				<div class="navWrap">
					<ul class="navList">
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
						<li class="navItem">
							<a href="javascript:;">
								<img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
								<span class="text">新品首发</span>
							</a>
						</li>
					</ul>
				</div>
				<!-- 促销 -->
				<div class="bigPromotion">
					<a href="javascript:;"></a>
				</div>
				<!-- 福利 -->
				<div class="welfare">
					<div class="title">
						<span class="text">新人专享礼</span>
					</div>
					<div class="content">
						<div class="left">
							<p class="name">新人专享礼包</p>
							<div class="imgWrap">
								<img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
							</div>
						</div>
						<div class="right">
							<div class="r-top">
								<div class="cnt">
									<div class="c-title">福利社</div>
									<div class="subtitle">今日特价</div>
								</div>
								<div class="picWrap">
									<div class="imgWrap">
										<img src="https://yanxuan-item.nosdn.127.net/da045b2d0cfad5ea873618205b759c40.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
									</div>
									<div class="discount">
										<div class="line1">￥69</div>
										<div class="line2">￥79</div>
									</div>
								</div>
							</div>
							<div class="r-bottom">
									<div class="cnt">
									<div class="c-title">新人拼团</div>
									<div class="tag">1元起包邮</div>
								</div>
								<div class="picWrap">
									<div class="imgWrap">
										<img src="https://yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
									</div>
									<div class="discount">
										<div class="line1">￥9.9</div>
										<div class="line2">￥16.9</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 热销 -->
				<div class="categorySellWell">
					<div class="hot-title">
						<div class="hot-left">类目热销榜</div>
					</div>
					<div class="hot-content">
						<div class="content-top">
							<div class="item-big">
								<div class="big-title">
									<span class="text">热销榜</span>
								</div>
								<div class="big-img">
									<img src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
							<div class="item-big">
								<div class="big-title">
									<span class="text">热销榜</span>
								</div>
								<div class="big-img">
									<img src="https://yanxuan-item.nosdn.127.net/0434f5cb29b2c6c6ade2f1c0487ae97c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
						</div>
						<div class="content-bottom">
							<div class="item-small">
								<div class="small-title">
									<span class="text">居家生活榜</span>
								</div>
								<div class="small-img">
									<img src="https://yanxuan-item.nosdn.127.net/c588b0085bfa9e9d119c995806d39c3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
							<div class="item-small">
								<div class="small-title">
									<span class="text">居家生活榜</span>
								</div>
								<div class="small-img">
									<img src="https://yanxuan-item.nosdn.127.net/c588b0085bfa9e9d119c995806d39c3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
							<div class="item-small">
								<div class="small-title">
									<span class="text">居家生活榜</span>
								</div>
								<div class="small-img">
									<img src="https://yanxuan-item.nosdn.127.net/c588b0085bfa9e9d119c995806d39c3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
							<div class="item-small">
								<div class="small-title">
									<span class="text">居家生活榜</span>
								</div>
								<div class="small-img">
									<img src="https://yanxuan-item.nosdn.127.net/c588b0085bfa9e9d119c995806d39c3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
							<div class="item-small">
								<div class="small-title">
									<span class="text">居家生活榜</span>
								</div>
								<div class="small-img">
									<img src="https://yanxuan-item.nosdn.127.net/c588b0085bfa9e9d119c995806d39c3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
							<div class="item-small">
								<div class="small-title">
									<span class="text">居家生活榜</span>
								</div>
								<div class="small-img">
									<img src="https://yanxuan-item.nosdn.127.net/c588b0085bfa9e9d119c995806d39c3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
							<div class="item-small">
								<div class="small-title">
									<span class="text">居家生活榜</span>
								</div>
								<div class="small-img">
									<img src="https://yanxuan-item.nosdn.127.net/c588b0085bfa9e9d119c995806d39c3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
							<div class="item-small">
								<div class="small-title">
									<span class="text">居家生活榜</span>
								</div>
								<div class="small-img">
									<img src="https://yanxuan-item.nosdn.127.net/c588b0085bfa9e9d119c995806d39c3c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- 人气推荐 -->
				<!-- <div class="recommend">
					<div class="rec-title">
						<div class="left"></div>
						<a href="javascript:;" class="right">
							更多
							<i class="r-icon"></i>
						</a>
					</div>
					<div class="rec-content">
						<div class="rec-big">
							<a href="javascript:;" class="bigWrap">
								<img src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&type=webp&imageView&thumbnail=280x280" alt="" class="big-left">
								<div class="big-right"></div>
							</a>
						</div>
						<div class="rec-small">
							<ul class="smList">
								<li class="smItem">
									<img src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="" class="itemImg">
									<p class="itemTitle">告别啃食尴尬，秘制无骨凤爪...</p>
									<div class="itemPrice"></div>
								</li>
							</ul>
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script  type="text/ecmascript-6">
    import Swiper from 'swiper'
	import 'swiper/css/swiper.min.css'
	import BScroll from 'better-scroll'
    import HeaderNav from '../../components/HeaderNav/HeaderNav'
    export default {
		data(){
			return {
				imgsList:[
					'https://yanxuan.nosdn.127.net/84d82137e854e58bf26791db3ba203b8.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/a16ac18c02bb26755dbcac1911631aa0.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/bf2d7fc620ef5fc52c06bfff18a93024.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0',
					'https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0'
				]
			}
		},
        components:{
            HeaderNav
        },
        mounted(){
          	new Swiper('.swiper-container', {
         		autoplay: true,//可选选项，自动滑动
				loop:true,
				pagination: {
					el: '.swiper-pagination',
					type: 'custom',
					clickable:true,
					renderCustom: function (swiper, current, total) {
						var customPaginationHtml=''
						for(let i=0;i<total;i++){
							if(i===current-1){
								customPaginationHtml+='<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'
							}else{
								customPaginationHtml+='<span class="swiper-pagination-customs"></span>'
							}
						}
						return customPaginationHtml
					}
				}
			})
			
			new BScroll('.homeContentWrap',{
				scrollY:true,
				click:true
			})

        },
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
	#homeContainer
		overflow hidden
		.homeContentWrap
			margin-top 148px
			height calc(100vh - 246px)
			overflow hidden
			.homeContent
				.swiper-container
					width 100vw
					height 296px
					.swiper-wrapper
						.swiper-slide
							img
								width 100%
								height 100%
					/deep/.swiper-pagination-customs
						width 40px
						height 4px
						background-color #fff
						opacity .4
						display inline-block
						margin-right 10px
					/deep/.swiper-pagination-customs-active
						opacity 1
				.servicePolicy
					box-sizing border-box
					height 72px
					padding 0 30px	
					background-color #fff
					.list
						height 100%
						display flex
						align-items center
						.item
							width 278px
							height 36px 
							a
								display inline-block
								height 100%
								.icon
									width 32px
									height 32px
									vertical-align middle	
								.text
									vertical-align middle
									font-size 24px
									color #333
									margin-left 8px

				.navWrap
					width 100%
					padding-bottom 32px
					background-color #fff
					.navList
						width 100%
						height 340px
						display flex
						flex-wrap wrap
						.navItem
							a
								display flex
								flex-direction column
								width 110px
								height 156px
								margin 9px 20px 
								img
									width 110px
									height 110px
								.text
									font-size 24px
									color #333
									margin-top 9px
									text-align center
				.bigPromotion	
					a
						margin-top 20px
						display block
						width 100%
						height 240px
						background-image url('https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75')
						background-size 100% 100%
						
				.welfare
					box-sizing border-box
					width 100%
					height 558px
					margin 20px 0
					padding-bottom 30px
					background-color #fff
					.title
						height 90px
						padding 0 30px
						text-align center
						.text
							font-size 32px
							color #333
							display inline-block
							line-height 90px
							position relative
							&:before,&:after
								content ''
								width 24px
								height 3px
								position absolute
								top 44px
								background-color #333
							&:before
								left -40px
							&:after
								right -40px

					.content
						height 438px
						padding-left 30px
						.left
							width 343px 
							height 434px
							float left
							background-color #F9E9CF
							border-radius 4px
							margin-right 4px
							.name
								height 78px
								box-sizing border-box
								line-height 48px
								font-family PingFangSC-Medium
								font-size 32px
								padding 30px 0 0 30px
							.imgWrap
								width 258px 
								height 257px
								margin 60px auto
						.right 
							width 343px 
							height 438px
							float left
							.r-top,.r-bottom
								height 215px
								background-color #FBE2D3
								border-radius 4px
								margin-bottom 4px
								box-sizing border-box
								padding 20px 0 0 30px
								position relative
								.cnt
									.c-title
										color #333
										font-size 32px
										line-height 48px
									.subtitle
										color #7F7F7F
										font-size 24px
										line-height 36px
								.picWrap
									width 200px
									height 200px
									position absolute
									right 0
									bottom 0
									.discount
										box-sizing border-box
										padding-top 5px
										width 80px
										height 80px
										
										background-color #F59524
										border-radius 50%
										opacity .8
										text-align center
										color #fff
										position absolute
										right 40px
										top 0

										.line1
											font-size 24px
											line-height 36px
										.line2
											font-size 18px
											line-height 30px
											margin-top -5px
											text-decoration line-through
							.r-bottom
								height 215px
								background-color #FFECC2
								border-radius 4px
								margin-bottom 4px
								.cnt
									.tag
										display inline-block
										height 32px
										line-height 32px
										border-radius 4px
										padding 0 10px
										color #fff
										background-color #cbb693
										font-size 22px
				.categorySellWell
					background-color #fff
					.hot-title
						height 100px
						padding 0 30px
						line-height 100px
						.hot-left
							display inline-block
							font-size 32px
							float left
					.hot-content
						padding 0 20px 20px 30px
						.content-top
							overflow hidden
							.item-big
								float left
								background-color #f9f3e4
								width 340px 
								height 200px
								margin 0 10px 10px 0
								overflow hidden
								position relative
								.big-title
									padding-left 24px
									margin-top 66px
									color #333	
									.text
										font-size 28px
										position relative
										&:after
											content ''
											position absolute
											left 0
											bottom -20px
											width 48px
											height 4px
											background-color #333
								.big-img
									position absolute
									right 0
									top 0
						.content-bottom
							overflow hidden
							.item-small
								width 165px
								height 180px
								background-color #f5f5f5
								margin 0 10px 10px 0
								float left
								text-align center
								.small-title
									margin-top 10px
									color #333
									font-size 24px
								.small-img
									margin-top 4px
									img
										width 120px
										height 120px	
				// .recommend

</style>
