<template>
    <div id="work_head">
        <div class="content">
            <div class="main" v-for="(item , index) in head_content" :key="index" @click="workHeadClick(item.title)">
                <div :class="['content_top' , 'iconfont' , item.font]"></div>
                <div class="content_bottom">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : "WorkHead",
    props : {
        head_content : {
            require : true,
            type : Array
        }
    }, 
    created(){
        /* 改变触发排序 */
        this.$store.commit("setStation","时间");
    },
    methods:{
        workHeadClick(station){
            this.$store.commit("setStation",station);
        }
    }
}
</script>

<style>
    #work_head{
        width: 100vw;
        height: 135px;
        background-color: #F3F3F3;
    }
    #work_head .content{
        display: flex;
        width: 100%;
        height: 130px;
        margin-bottom: 10px;
        background-color: #fff;
    }
    #work_head .content .main{
        flex: 1;
    }
    #work_head .content .main .content_top{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90px;
        font-size: 70px;
        color: gray;
        margin-top: 20px;
    }
    #work_head .content .main .content_bottom{
        width: 100%;
        height: 20px;
        font-size: 20px;
        text-align: center;
        color : gray;
        margin-top: -10px;
    }
    #work_head .content .main:first-child .content_bottom{
        padding-right: 10px;
    }
</style>