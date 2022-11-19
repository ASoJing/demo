<template>
    <div id="work_main">
        <div class="work_main_top center">
            <span>{{this.$store.state.station}}</span>
            <span :class="['iconfont' , 'spTwo' , icon]" @click="sort"></span>
        </div>
        <div class="work_main_bottom">
            <ul>
                <li v-for="(item,index) in work_main_contents" :key="index">
                    <div class="bottom_content gray fontsize12">
                        <div class="ct_one">
                           <span class="sp_main">{{item.station}}</span>
                           <span>{{item.time}}</span> 
                        </div>
                        <div>
                            <span class="sp_main">工作时长</span>
                            <span>{{item.work_time + "小时/天"}}</span>
                            <span v-show="getCounter" class="counter">人数&nbsp;&nbsp;{{item.counter}}</span>
                        </div>
                        <div>
                            <span class="sp_main">工作地点</span>
                            <span>{{item.work_place}}</span>
                        </div>
                        <div>
                            <span class="sp_main">联系人</span>
                            <span>{{item.contacts}}</span>
                            <button class="btn fontsize12">点击了解</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>   
</template>

<script>

export default {
    name : "WorkMain",
    props:{
        work_main_content : {
            require : true,
            type : Array
        }
    },
    data(){
        return{
            icon : "icon-jiangxu",
            work_main_contents : this.work_main_content
        }
    },
    methods : {
        sort(){
            if(this.icon === "icon-jiangxu"){
                this.icon = "icon-shengxu"
                /* 升序排列 */
                this.$options.methods.sortDate.call(this,true);
            }else{
                this.icon = "icon-jiangxu"
                this.$options.methods.sortDate.call(this,false);
            }
        },
        sortDate(sort){
            /* station表示排序字段,sort表示排序方式 */
            /* 
                station : "图书管理员",
                        time : "2022-8-10",
                        counter : 2,
                        work_time : 4,
                        work_place : "第一图书馆",
                        contacts : "第一图书馆办公室"
            */
            const station = this.$store.state.station;
            switch(station){
                case "岗位" : 
                    this.work_main_contents.sort((a , b) => {
                        if(sort){
                            return a.counter - b.counter;
                        }else{
                            return b.counter - a.counter;
                        }
                    });
                    break;
                case "时间" :
                    this.work_main_contents.sort((a , b) => {
                        /* 去掉时间中间的-*/
                        const a1 = Number.parseInt(a.time.replace(/-/g,""));
                        const b1 = Number.parseInt(b.time.replace(/-/g,""));
                        if(sort){
                            return a1 - b1;
                        }else{
                            return b1 - a1;
                        }
                    });
                    break;
                case "地点" :
                this.work_main_contents.sort((a , b) => {
                        /* 去掉时间中间的-*/
                        if(sort){
                            return a.station.localeCompare(b.station , 'zh');
                        }else{
                            return b.station.localeCompare(a.station , 'zh');
                        }
                    });
                    break;
                default :
                    return;
            }
        }
    },  
    computed:{
        getCounter(){
            return this.$store.state.station === "岗位";
        }
    },
    watch:{
        /* 监听this.$store.state.station的变化 */
        '$store.state.station':{
            immediate: true,
            // 深度监听
            deep: false,
            handler(val){
                /* 数据发生改变,需要进行排序 */
                if(this.icon === "icon-jiangxu"){
                    /* 升序排列 */
                    this.$options.methods.sortDate.call(this,false);
                }else{
                    this.$options.methods.sortDate.call(this,true);
                }
            }
        }
    }
}
</script>

<style>
    #work_main{
        width: 100vw;
    }
    .center{
        width: 90%;
        margin: auto;
    }
    #work_main .work_main_top{
        position: relative;
        height: 70px;
        line-height: 70px;
    }
    #work_main .work_main_top::after{
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scale(.5);
        bottom: 0;
        content: "";
        width: 180%;
        border:.5px solid gray;
    }
    #work_main .work_main_top span{
        font-size: 30px;
    }
    #work_main .work_main_top .spTwo{
        color: gray;
        padding-left: 10px;
    }
    #work_main .work_main_bottom ul{
        list-style: none;
    }
    #work_main .work_main_bottom ul li{
        width: 100%;
        height: 125px;
        background-color:#F3F3F3;
    }
    #work_main .work_main_bottom ul li .bottom_content{
        padding:0px 5%;
        height: 120px;
        background-color: #fff;
        padding-top: 15px;
    }
    #work_main .work_main_bottom ul li .bottom_content div{
        position: relative;
        padding: 2px 0;
    }
    #work_main .work_main_bottom ul li .bottom_content .ct_one{
        display: flex;
    }
    #work_main .work_main_bottom ul li .bottom_content .ct_one span{
        flex: 1;
        color: black;
        font-size: 16px;
        font-weight: bold;
    }
    #work_main .work_main_bottom ul li .bottom_content .ct_one span:last-child{
        text-align: right;
        color: #0773A3;
        font-size: 16px;
    }
    .gray{
        color: gray;
    }
    .fontsize12{
        font-size: 12px;
    }
    .sp_main{
        display: inline-block;
        width: 58px;
    }
    .btn{
        position: absolute;
        right: 0;
        bottom: 0px;
        background-color: #006EA1;
        color: white;
        border-radius: 5px;
        padding: 1px 10px;
    }
    .counter{
        position: absolute;
        right: 20px;
    }
</style>