<template>
    <ul class="leftList" v-if="cateNavList">
        <li class="left-item" @click="navIndex=index" :class="{active:navIndex===index}" v-for="(cateItem,index) in cateNavList" :key="index">
            <router-link :to="`/category/right/${cateItem.id}`">
                {{cateItem.name}}
            </router-link>
        </li>
    </ul>
</template>

<script  type="text/ecmascript-6">
    export default {
        data(){
            return {
                navIndex:0,
                cateNavList:[]
            }
        },
        async mounted(){
            let result = await this.$API.getCategoryNavList()
            this.cateNavList=result.categoryNavList
            this.$route.params.id!=this.cateNavList[0].id&& this.$router.push(`/category/right/${this.cateNavList[0].id}`)
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    .leftList
        box-sizing border-box
        padding 40px 0
        .left-item
            height 50px
            line-height 50px
            text-align center
            position relative
            &:not(:first-child)
                margin-top 50px
            &.active
                &:before
                    content ""
                    position absolute
                    left 0
                    top 0
                    bottom 0
                    right 0
                    width 6px
                    background-color #ab2b2b
 
</style>
