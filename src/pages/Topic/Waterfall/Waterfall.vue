<template>
    <div id="waterfall_box">
        <ul class="waterfall_cont">
            <!-- <li class="waterItem" v-for="(waterItem,index) in waterfallData" :key="index">
                <ShowBox :topics1="waterItem.topics"/>
            </li> -->
            <li class="waterItem" v-for="(recItem,index) in recAutoData" :key="index+Date.now()">
                <ShowBox :topics2="recItem.topics"/>
            </li>
        </ul>
    </div>
</template>

<script  type="text/ecmascript-6">
    import ShowBox from './components/ShowBox/ShowBox'
    export default {
        props:{
            waterfallData:{
                type:Array
            },
            recAutoData:{
                type:Array
            }
        },
        components:{
            ShowBox
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
    #waterfall_box
        width 100%
        display flex
        justify-content center
        .waterfall_cont
            width 710px
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content space-between
            align-items flex-start
            .waterItem
                width 342px
                display flex
                flex-direction column
                background-color white
                border-radius .24rem
                margin-bottom 26px
                break-inside avoid
                
                
                    
</style>
