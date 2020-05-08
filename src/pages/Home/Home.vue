<template>
    <div id="homeContainer">
        <HeaderNav/>
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
				<div class="bigPromotion">
					<a href="javascript:;"></a>
				</div>
    </div>
</template>

<script  type="text/ecmascript-6">
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
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
        },
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
	#homeContainer
		.swiper-container
			width 100%
			height 296px
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
				display block
				width 100%
				height 240px
				background-image url('https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75')
				background-size 100% 100%
</style>
