<template>
    <div id="news">
        <Nav :text="text"></Nav>
        <Scroll :probe_type="3" :scroll_x="false" :scroll_y="true" id="scroll">
            <NewsMain></NewsMain>
        </Scroll>
    </div>
</template>

<script>

    import Nav from '@/components/content/nav/Nav.vue';
    import Scroll from '@/components/commons/scroll/Scroll.vue';
    import NewsMain from "./NewsMain.vue"

    export default {
        name : "News",
        components : {
            Nav,
            Scroll,
            NewsMain
        },
        data(){
            return{
                text : "搜索对话"
            }
        }
    }
</script>

<style>

</style>