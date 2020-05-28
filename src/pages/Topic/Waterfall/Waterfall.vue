<template>
    <div id="waterfall_box">
        <ul class="waterfall_cont" ref="waterWrap">
            <li class="waterItem" v-for="(topic,index) in newRecAutoData" :key="index">
                <ShortShow :topic="topic"/>
            </li>
        </ul>
    </div>
</template>

<script  type="text/ecmascript-6">
    import {mapState} from 'vuex'
    import Masonry from 'masonry-layout'
    import ShortShow from './components/ShortShow/ShortShow'
    export default {
        data(){
            return {
                newData:[]
            }
        },
        props:{
            waterfallData:{
                type:Array
            }
        },
        components:{
            ShortShow
        },
        methods:{
            _initMasonry(){
                if(this.$refs.waterWrap){
                    return
                }
                new Masonry(this.$refs.waterWrap,{
                    itemSelector: '.waterItem',
                    gutter:26
                })
            }
        },
        updated(){
            this._initMasonry()
        },
        computed:{
            ...mapState({
                recAutoData:state=>state.topic.recAutodata
            }),
            newRecAutoData(){
                let arr=this.waterfallData.concat(this.recAutoData)
                // console.log(this.recAutoData)
                let result=this.recAutoData.map((item,index)=>item.topics)
                result=result.forEach((item,index)=>{
                    item.forEach((topic,index)=>{
                        this.newData.push(topic)
                    })
                })
                return this.newData
                
            }
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
            column-count 2
            column-gap 26px
            .waterItem
                width 342px
                float left
                border-radius .24rem
                margin-bottom 26px
                break-inside avoid
                
                
                    
</style>
