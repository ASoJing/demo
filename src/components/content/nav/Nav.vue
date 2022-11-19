<template>
    <div id="nav">
        <div class="nav_main">
            <span class="iconfont">&#xe61a;</span>
            <input type="text" name="nav" :placeholder="text">
        </div>
    </div>
</template>

<script>
export default {
    name : "Nav",
    props:{
        text : {
            type : String,
            default : ""
        }
    }
}
</script>

<style>
    #nav{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 65px;
        background-color: #006EA1;
        overflow: hidden;
        z-index: 99;
    }
    #nav .nav_main{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 60%;
        background-color: white;
        border-radius: 21px;
    }
    #nav .nav_main span{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 8px;
        width: 50px;
        aspect-ratio: 1 / 1;
        font-size: 25px;
        color: gray;
    }
    #nav .nav_main input{
        width: 100%;
        height: 100%;
        margin-right: 21px;
        resize: 0;
        outline: 0;
        border: 0;
    }
    #nav .nav_main input::placeholder{
        position: relative;
        bottom: -5px;
        color: black;
        font-size: 18px;
    }
</style>