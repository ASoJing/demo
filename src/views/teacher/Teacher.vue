<template>
    <div id="teacher">
        <TeacherHead :teacher-name="teacherName"></TeacherHead>
        <Scroll :probe_type="3" :scroll_x="false" :scroll_y="true">
            <TeacherMain :teacher_home="teacher_home"></TeacherMain>
        </Scroll>
    </div>
</template>

<script>

    import TeacherHead from './teacher_home/teacher_head/TeacherHead.vue';
    import Scroll from '@/components/commons/scroll/Scroll.vue';
    import TeacherMain from './teacher_home/teacher_main/TeacherMain.vue';
    export default {
        name : "Teacher",
        components : {
            TeacherHead,
            Scroll,
            TeacherMain
        },
        data(){
            return{
                teacherName : "李四",
                teacher_home : [
                    {
                        font : "icon-gangwei",
                        title : "发布工作"
                    },
                    {
                        font : "icon-icon_guanlianneirong",
                        title : "查看志愿者名单"
                    },
                    {
                        font : "icon-daka",
                        title : "查看打卡情况"
                    }
                ]
            }
        }
    }
</script>

<style>

</style>