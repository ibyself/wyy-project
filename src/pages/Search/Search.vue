<template>
    <div id="searchContainer" v-if="hotSearchList">
        <div class="search"  v-if="hotSearchList.defaultKeyword">
            <div class="search_input">
                <label for="search-keyword" class="labelWrap">
                    <i class="search-icon"></i>
                    <input id="search-keyword" class="search-text" type="text" @keydown="handleSearch()" v-model="search_text" :placeholder="hotSearchList.defaultKeyword.keyword">
                </label>
                <span class="icon-close" v-show="search_text" @click="search_text=''"></span>
            </div>
            <div class="search_cancel" @click="$router.back()">取消</div>
        </div>
        <ul class="searchList" v-if="search_text">
            <li class="sItem" v-for="(item,index) in searchKeyWordList" :key="index">
                <a href="javascript:;">
                    <p class="text">{{item}}</p>
                    <i class="right-arrow"></i>
                </a>
            </li>
        </ul>
        <div class="hotList" v-show="!search_text">
            <h2 class="list_title">热门搜索</h2>
            <ul class="hot_search">
                <li class="hotItem" @click="navIndex=index" :class="{active:navIndex===index}" v-for="(item,index) in hotKeywordList" :key="index">{{item}}</li>
            </ul>
        </div>
        
    </div>
</template>

<script  type="text/ecmascript-6">
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                search_text:'',
                navIndex:0
            }
        },
        async mounted(){
            await this.$store.dispatch('reqHotSearch')
        },
        methods:{
            handleSearch(){
                this.timeId && clearTimeout(this.timeId)
                this.timeId=setTimeout(()=>{
                    this.$store.dispatch('reqSearch',this.search_text)
                },300)
            }
        },
        computed:{
            ...mapState({
                hotSearchList:state=>state.search.hotSearchList,
                searchKeyWordList:state=>state.search.searchList
            }),
            hotKeywordList(){
                let arrs=[]
                if(this.hotSearchList.hotKeywordVOList){
                    arrs=this.hotSearchList.hotKeywordVOList.reduce((pre,item)=>{
                        pre.push(item.keyword)
                        return pre
                    },[])
                }
                
                return arrs
            }
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #searchContainer
        background-color #fff
        .search
            padding 0 30px
            display flex
            align-items center
            height 88px
            .search_input
                box-sizing border-box
                padding 0 20px
                width 604px
                height 60px
                background-color #f4f4f4
                float left
                display flex
                align-items center
                border-radius 4px
                .labelWrap
                    width 100%
                    height 100%
                    display flex
                    align-items center
                    .search-text
                        line-height 39px
                        width 470px
                        height 39px
                        background-color #f4f4f4
                        outline none
                    .search-icon
                        width 28px
                        height 28px
                        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
                        background-size 100% 100%
                        margin-right 16px
                .icon-close
                    width 50px
                    height 50px
                    background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-2154f24504.png?imageView&type=webp')
                    background-size 100% 100%
            .search_cancel
                float left
                font-size 28px
                margin-left 30px
                line-height 42px
                text-align center
        .hotList
            padding 0 30px 30px
            .list_title
                height 90px
                line-height 90px
                font-size #999
            .hot_search
                overflow hidden
                .hotItem
                    float left
                    margin 0 32px 32px 0
                    padding 0 15px
                    line-height 47px
                    border 2px solid #999
                    border-radius 4px
                    color #333
                    &.active 
                        border 2px solid red
                        color red
        .searchList
            .sItem
                height 100px
                padding-left 30px
                display flex
                align-items center
                &:not(:first-child)
                    border-top 2px solid #d9d9d9
                a
                    display block
                    overflow hidden
                    .text
                        display block
                        float left
                        width 640px
                        box-sizing border-box
                        padding-right 80px
                        font-size 28px
                        color #333
                        line-height 42px
                    .right-arrow
                        display block
                        float left
                        width 50px
                        height 50px
                        background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp')
                        background-size 100%
</style>
