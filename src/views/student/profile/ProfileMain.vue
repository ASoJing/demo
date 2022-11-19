<template>
    <div id="pro_main">
        <ul>
            <li v-for="(item,index) in this.$store.state.pro_main" class="pro_main_li" :key="index">
                <div :class="['pro_main_top' , 'iconfont' , item.font]" 
                    v-if="!item.title.includes('组织')"
                    :style="getStyle(item)">
                </div>
                <svg class="icon" aria-hidden="true" v-if="item.title.includes('组织')">
                    <use :xlink:href="item.font" class="use"></use>
                </svg>
                <div class="pro_main_btm">{{item.title}}</div>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name : "ProfileMain",
        computed:{
            getStyle(){
                return function(item){
                    return {
                        'color' : item.color,
                        'font-size' : item.size
                    }
                }
            }
        }
    }
</script>

<style>
    #pro_main{
        width: 100vw;
    }
    #pro_main ul{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        list-style: none;
        overflow: hidden;
    }
    #pro_main ul .pro_main_li{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 33.3vw;
        height: 140px;
        margin-bottom: 10px;
    }
    #pro_main ul .pro_main_li::after{
        content: "";
        position: absolute;
        right: 0;
        top: 10px;
        bottom: 20px;
        border: .5px solid gray;
    }
    #pro_main ul .pro_main_li:nth-child(3n):after{
        border: 0;
    }
    #pro_main ul .pro_main_li .pro_main_top{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
    #pro_main ul .pro_main_li .pro_main_btm{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 20px;
        color: black;
        font-weight: bold;
        font-size: 20px;
    }
    #pro_main ul .pro_main_li .icon{
        width: 80%;
        height: 120px;
    }
    #pro_main ul .pro_main_li .icon .use{
        width: 80%;
        height: 80%;
    }
</style>