<template>
    <div id="teahcer_main">
        <ul>
            <li v-for="(item,index) in teacher_home" :key="index">
                <div :class="['t_m_lf','iconfont',item.font]"></div>
                <div class="t_m_rt">
                    <button>{{item.title}}</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "TeacherMain",
    props : {
        teacher_home : {
            type : Array,
            require : true
        }
    }
}
</script>

<style>
    #teahcer_main{
        width: 100vw;
        height: calc(100vh - 190px);
    }
    #teahcer_main ul{
        list-style: none;
        background-color: #F3F3F3;
    }
    #teahcer_main ul li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 95px;
        padding-top: 5px;
    }
    #teahcer_main ul li:last-child{
        padding-bottom: 5px;
    }
    #teahcer_main ul li .t_m_lf{
        display: flex;
        justify-content: left;
        align-items: center;
        height: 100%;
        flex: 1;
        font-size: 20vw;
        background-color: white;
        padding-left: 10px;
        color: gray;
    }
    #teahcer_main ul li .t_m_rt{
        display: flex;
        justify-content: left;
        align-items: center;
        flex: 2;
        height: 100%;
        background-color: white;
    }
    #teahcer_main ul li .t_m_rt button{
        color: white;
        font-size: 20px;
        background-color: #006EA1;
        border: 0;
        width: 170px;
        padding: 5px 0;
        border-radius: 8px;
    }
</style>