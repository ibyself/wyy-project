<template>
    <div id="toPicContainer">
        <TopNav :title="title">
            <template v-slot:header-title>
                <div class="header-title">值得买</div>
            </template>
        </TopNav>
    </div>
</template>

<script  type="text/ecmascript-6">
    import TopNav from '../../components/TopNav/TopNav'
    export default {
        data(){
            return {
                title:'值得买'
            }
        },
        components:{
            TopNav
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

    
 
</style>
