<template>
    <div class="scroll" ref="scroll">
        <div id="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Scroll from "better-scroll"
    export default {
        name : "Scroll",
        props:{
            scroll_y : {
                type : Boolean,
                default : true
            },
            scroll_x : {
                type : Boolean,
                default : false
            },
            probe_type : {
                type : Number,
                default : 1
            }
        },
        data(){
            return{
                scroll : null
            }
        },
        mounted(){
            this.scroll = new Scroll(this.$refs.scroll , {
                scrollX : this.scroll_x,
                scrollY : this.scroll_y,
                probeType : this.probe_type,
                click : true,
                dblclick : {
                    value : true,
                    delay : 300
                },
                pullUpLoad : true
            });

            this.scroll.on("scroll" , position => {
                this.$emit('position' , position.y)
            });
            this.scroll.on("pullingUp" , () => {
                this.scroll.finishPullUp();
            })
        },
        methods:{
            Refresh(){
                if(this.scroll !== null){
                    this.scroll.refresh();
                }
            },
            /*滑动到指定位置*/
            ScrollTo(x , y , time = 500){
                if(this.scroll !== null){
                    this.scroll.scrollTo(x , y , time)
                }
            }
        }
    }
</script>
    
<style>
    #scroll{
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    #scroll #content{
        width: 100vw;
    }
</style>