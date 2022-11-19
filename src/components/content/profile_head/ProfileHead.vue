<template>
    <!-- 
        高度不能写死,让子盒子撑开即可
     -->
    <div id="pro_head">
        <!-- 分为上下两部分 -->
        <div class="head_top" :style="getSyle">
                <!-- 分为左右两部分 -->
                <div class="top_left">
                    <div class="tp_lf_content">
                        <img src="../../../assets/img/userImage/user1.jpg" alt="">
                    </div>
                </div>
                <div class="top_right">
                    {{isShow ? "张三" : "李四"}}
                </div>
        </div>
        <div class="head_bottom white" v-show="isShow">
            <div class="head_btm_lf font12">
                <span>- -</span>
                <p>信用时数</p>
            </div>
            <div class="head_btm_rt font12">
                <span>- -</span>
                <p>荣誉时数</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "ProfileHead",
    computed : {
        isShow(){
            return this.$store.state.user.userId === "student";
        },
        getSyle(){
            if(this.$store.state.user.userId !== "student"){
                return {
                    'padding-bottom' : '20px'
                }
            }
        }
    }
}
</script>

<style>
    #pro_head{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: auto;
        background-color: blue;
        z-index:99;
    }
    #pro_head .head_top{
        display: flex;
    }
    #pro_head .head_top .top_left{
        flex: 1;
    }
    #pro_head .head_top .top_left .tp_lf_content{
        width: 60px;
        aspect-ratio: 1 / 1;
        margin: 5px 0 0 10px;
        border-radius: 50%;
        background-color: yellow;
        overflow: hidden;
    }
    #pro_head .head_top .top_left .tp_lf_content img{
        width: 100%;
        height: 100%;
    }
    #pro_head .head_top .top_right{
        display: flex;
        justify-content: left;
        align-items: center;
        flex: 5;
        margin: 5px 0 0 10px;
        font-size: 30px;
        color: white;
    }
    #pro_head .head_bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0px 20vw;
        margin-bottom: 10px;
    }
    #pro_head .head_bottom .head_btm_lf{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
    }
    #pro_head .head_bottom .head_btm_rt{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
    }
    .font12{
        font-size: 12px;
    }
    .white{
        color: white;
    }
</style>