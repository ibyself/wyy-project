<template>
    <div id="waterfall_box">
        <waterfall :col='col' :width="itemWidth" :gutterWidth="gutterWidth"  :data="newRecAutoData"  @loadmore="loadmore" :loadDistance="20" :lazyDistance="20">
            <div class="waterItem" v-for="(topic,index) in newRecAutoData" :key="index">
                <ShortShow :topic="topic"/>
            </div>
        </waterfall>
           
        
         
    </div>
</template>

<script  type="text/ecmascript-6">
    import {mapState} from 'vuex'
    
    import ShortShow from './components/ShortShow/ShortShow'
    export default {
        data(){
            return {
                newData:[],
                col:2
            }
        },
        props:{
            waterfallData:{
                type:Array
            }
        },
        components:{
            ShortShow,
        },
        methods:{
            scroll(scrollData){
                console.log(scrollData)
            },
            switchCol(col){
                this.col = col
                console.log(this.col)
            },
            loadmore(index){
                    this.newData = this.newData.concat(this.newData)
            }
	    
        },
        computed:{
            ...mapState({
                recAutoData:state=>state.topic.recAutodata
            }),
            newRecAutoData(){
                let arr=this.waterfallData.concat(this.recAutoData)
                let result=this.recAutoData.map((item,index)=>item.topics)
                result.forEach((item,index)=>{
                    item.forEach((topic,index)=>{
                        this.newData.push(topic)
                    })
                })
                return this.newData
                
            },
            itemWidth(){  
	            return (684*0.5*(document.documentElement.clientWidth/750))  
            },
            gutterWidth(){
                return (52*0.5*(document.documentElement.clientWidth/750))	
            }
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
    #waterfall_box
        width 710px
        margin 0 auto
        
                
                
                    
</style>
