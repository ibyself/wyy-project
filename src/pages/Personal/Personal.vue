<template>
    <div id="personalContainer">
        <TopNav :title="title">
            <template #header-title>
                <div class="header-title">
                    <i class="icon-title"></i>
                </div>
            </template>
        </TopNav>
    </div>
</template>

<script  type="text/ecmascript-6">
    import TopNav from '../../components/TopNav/TopNav'
    export default {
        data(){
            return {
                title:"网易严选"
            }
        },
        components:{
            TopNav
        }
    };
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>

 
</style>
