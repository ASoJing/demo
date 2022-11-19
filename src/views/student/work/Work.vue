<template>
    <div id="work">
        <Nav :text="text"></Nav>
        <Scroll :probe-type="3" ref="scroll" id="scroll" :scroll_x="false" :scroll_y="true">
            <WorkHead :head_content="headContent"></WorkHead>
            <WorkMain :work_main_content="work_main_content"></WorkMain>
        </Scroll>
    </div>
</template>

<script>
    import Nav from '@/components/content/nav/Nav.vue';
    import WorkHead from './WorkHead.vue';
    import WorkMain from './WorkMain.vue';
    import Scroll from '@/components/commons/scroll/Scroll.vue';
    export default {
        name : "Work",
        data(){
            return{
                headContent : [
                    {
                        title : "时间",
                        font : "icon-shijianbiao" 
                    },
                    {
                        title : "地点",
                        font : "icon-ditu" 
                    },
                    {
                        title : "岗位",
                        font : "icon-gangwei"  
                    }
                ],
                work_main_content : [
                    {
                        station : "图书管理员",
                        time : "2022-08-10",
                        counter : 2,
                        work_time : 4,
                        work_place : "第一图书馆",
                        contacts : "第一图书馆办公室"
                    },
                    {
                        station : "阿拉伯",
                        time : "2022-09-11",
                        counter : 5,
                        work_time : 4,
                        work_place : "第一图书馆",
                        contacts : "第一图书馆办公室"
                    },
                    {
                        station : "图书管理员",
                        time : "2021-12-11",
                        counter : 1,
                        work_time : 4,
                        work_place : "第一图书馆",
                        contacts : "第一图书馆办公室"
                    },
                    {
                        station : "图书管理员",
                        time : "2023-03-12",
                        counter : 3,
                        work_time : 4,
                        work_place : "第一图书馆",
                        contacts : "第一图书馆办公室"
                    },
                    {
                        station : "图书管理员",
                        time : "2021-04-10",
                        counter : 4,
                        work_time : 4,
                        work_place : "第一图书馆",
                        contacts : "第一图书馆办公室"
                    }
                ],
                text : "搜索地点，时间"
            }
        },  
        components : {
            Nav,
            WorkHead,
            WorkMain,
            Scroll
        }
    }
</script>

<style>
    #work{
        width: 100vw;
        height: 100vh;
    }
    #work #scroll{
        margin-top: 65px;
        width: 100vw;
        height: calc(100vh - 135px);
        overflow: hidden;
    }
</style>