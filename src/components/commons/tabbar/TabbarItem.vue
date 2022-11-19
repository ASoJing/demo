<template>
    <div id="tab_item" @click="tab_item_click">
        <div class="tab_item_top">
            <div class="showImg">
                <span :class="getClass" :style="getColor"></span>
            </div>
           
        </div>
        <div class="tab_item_bottom" :style="getColor">
            {{tab_conten.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name : "TabbarItem",
        props:{
            tab_conten : {
                type : Object,
                require : true
            }
        },
        data(){
            return{
            }
        },
        methods:{
            tab_item_click(){
                if(this.$route.fullPath !== this.tab_conten.path){
                    this.$router.push(this.tab_conten.path);
                }
            }
        },
        computed:{
            getClass(){
                const iclass = this.tab_conten.img;
                return ['iconfont' , iclass].join(" ");
            },
            getColor(){
                return this.$route.fullPath === this.tab_conten.path ? {color : "red"} : {color : "black"};
            }
        }
    }
</script>

<style>
    #tab_item{
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }
    #tab_item .tab_item_top{
        display: flex;
        flex: 3.5;
    }
    #tab_item .tab_item_top .showImg{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        width: 60%;
        height: 100%;
    }
    #tab_item .tab_item_top .showImg span{
        font-size: 45px;
    }
    #tab_item .tab_item_bottom{
        flex: 1.5;
        text-align: center;
        line-height: 1;
        font-size: 12px;
    }
</style>