<template>
    <div id="new_main">
        <ul>
            <li v-for="(item,index) in this.$store.state.news_main_content" :key="index">
                <div class="news_main_lf">
                    <img src="../../../assets/img/userImage/user1.jpg" alt="">
                </div>
                <div class="news_main_rt">
                    <div class="nmf_top">
                        {{item.userName}}
                    </div>
                    <div>
                        <span class="p_one">{{getNews(item)}}</span><span class="p_two">{{item.time}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "NewsMain",
    props : {
    },
    computed:{
        getNews(){
            return function(item){
                /* 保持最后一条消息 */
                return item.userNews[item.userNews.length - 1];
            }
        }
    }
}
</script>

<style>
    #new_main{
        width: 100vw;
        height: 100%;
        margin-top: 65px;
    }
    #new_main ul{
        list-style: none;
    }
    #new_main ul li{
        position: relative;
        display: flex;
        width: 100vw;
        height: 90px;
    }

    #new_main ul li:nth-child(n)::after{
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scale(.1);
        bottom: 0;
        content: "";
        width: 800%;
        border:.5px solid gray;
    }
    #new_main ul li:last-child::after{
        border:0;
    }
    #new_main ul li .news_main_lf{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 100%;
    }
    #new_main ul li .news_main_lf img{
        width: 90%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        border: 0;
        overflow: hidden;
    }
    #new_main ul li .news_main_rt{
        width: calc(90% - 80px);
        height: 80%;
    }
    #new_main ul li .news_main_rt .nmf_top{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 100%;
        height: calc(100% - 15px);
        font-weight: bold;
        font-size: 18px;
        color: black;
    }
    #new_main ul li .news_main_rt div{
        font-size: 12px;
        color: gray;
    }
    #new_main ul li .news_main_rt div span{
        display: inline-block;
    }
    #new_main ul li .news_main_rt div .p_one{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 69%;
    }
    #new_main ul li .news_main_rt div .p_two{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 31%;
        text-align: right;
        line-height: 12px;
    }
</style>