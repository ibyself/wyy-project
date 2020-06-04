<template>
	<div id="headerContainer" v-if="nvList">
		<div class="header">
      <div class="headerSearch">
        <a href="https://m.you.163.com/"></a>
        <div class="searchBox" @click="$router.push('/search')">
          <i class="icon-search"></i>
          <span>搜索商品, 共25372款好物</span>
        </div>
        <button class="login" @click="$router.push('/personal')">登录</button>
      </div>
      <div class="headerNav">
        <div class="navWrap" v-show="!isNavShow">
          <div class="navLeft">
            <ul class="navList"  v-if="nvList">
              <li class="navItem" @click="navIndex=0" :class="{active:navIndex===0}">
                <a href="javascript:;">推荐</a>
              </li>
              <li class="navItem" :class="{active:navIndex===index+1}" @click="navIndex=index+1" v-for="(item,index) in nvList" :key="index">
                <a href="javascript:;">{{item.text}}</a>
              </li>
              
            </ul>
          </div>
          
        </div>
        <div class="allNavWrap" v-show="isNavShow">
          <p>全部频道</p>
          <ul class="allNav"  v-if="nvList">
            <li class="item"  @click="navIndex=0" :class="{active:navIndex===0}">
              <a href="javascript:;">推荐</a>
            </li>
            <li class="item" :class="{active:navIndex===index+1}" @click="navIndex=index+1" v-for="(item,index) in nvList" :key="index">
              <a href="javascript:;">{{item.text}}</a>
            </li>
          </ul>
        </div>
        <div class="toggle" @click="isNavShow=!isNavShow" :class="{active:isNavShow}">
          <i class="icon-toggle"></i>
        </div>
      </div>
    </div>
    <div class="mask" v-show="isNavShow" @click="isNavShow=false"></div>
	</div>
</template>

<script  type="text/ecmascript-6">
  import Bscroll from 'better-scroll'
	export default {
    props:{
      nvList:{
        type:Array,
        required: true
      }
    },
    data(){
      return {
        navIndex:0,
        isNavShow:false
      }
    },
    methods:{
      _initScroll(){
        if(this.bScroll){
          this.bScroll.refresh()
        }else{
          this.bScroll=new Bscroll('.navLeft',{
            scrollX:true,
            click:true
          })
        }
      }
    },
    mounted(){
      if(this.nvList){
        this._initScroll()
      }
    },
    watch:{
      nvList(){
        this.$nextTick(()=>{
          this._initScroll()
        })
      }
    }
	};
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #headerContainer
    width 100%
    height 148px
    position fixed 
    left 0
    top 0
    z-index 100
    .header 
      position relative
      z-index 3
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
          background-repeat no-repeat
          background-position center
          background-size 100%
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
            background-repeat no-repeat
            background-position center
            background-size 100%
          span
            color #666
            font-size 28px
        .login
          width 74px
          height 40px
          border 2px solid red
          padding 0
          border-radius 6px
          background-color #fff
          color red
          font-size 24px
          margin-left 15px
      .headerNav
        height 60px
        background-color #fff
        position relative
        .navWrap
          .navLeft
            width 650px
            overflow hidden
            .navList
              float left
              display flex
              .navItem
                box-sizing border-box
                padding 0 10px
                margin 0 20px
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
          z-index 2
          width 100px 
          height 100% 
          display flex   
          align-items center 
          justify-content center
          &.active
            >.icon-toggle
              transform rotate(180deg)
          .icon-toggle
            transition all .5s
            width 30px
            height 30px
            background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-9b31adfa37.png?imageView&type=webp')
            background-repeat no-repeat
            background-position center
            background-size 100%
        .allNavWrap
          display none
          position absolute
          left 0
          top 0
          display flex
          flex-direction column
          background-color #fff
          
          p
            height 60px
            line-height 60px
            color #333
            font-size 28px
            padding-left 30px
          .allNav
            padding-top 24px
            display flex
            flex-wrap wrap
            .item
              width 150px
              height 56px
              margin 0 0 40px 30px
              text-align center
              line-height 56px
              border 1px solid #ccc
              border-radius 8px
              &.active
                border 1px solid red
                a
                  color red
              a
                display block
                width 100%
                height 100%
                color #333
                font-size 24px

    .mask
      position fixed
      left 0
      top 0
      right 0
      bottom 0
      z-index 1
      background rgba(0,0,0,.5)
      &.active
        display none

</style>
