<template>
    <div id="profile">
        <ProfileHead></ProfileHead>
        <Scroll :probe_type="3" :scroll_x="false" :scroll_y="true" id="scroll" :style="getStyle">
            <ProfileMain></ProfileMain>
        </Scroll>
    </div>
</template>

<script>
    import ProfileHead from '../../../components/content/profile_head/ProfileHead.vue';
    import ProfileMain from './ProfileMain.vue';
    import Scroll from '@/components/commons/scroll/Scroll.vue';
    export default {
        name : "Profile",
        components : {
            ProfileHead,
            ProfileMain,
            Scroll
        },
        data(){
            return{
                
            }
        },
        computed:{
            getStyle(){
                if(this.$store.state.user.userId === "student"){
                    return {'margin-top': '107px'}
                }else{
                    return {'margin-top': '85px'}
                }
            }
        }
    }
</script>

<style>
    #profile{
        width: 100vw;
        height: 100vh;
    }
    #profile #scroll{
        width: 100vw;
        height: calc(100vh - 187px);
        overflow: hidden;
    }
</style>