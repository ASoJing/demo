<template>
    <div id="teacher_head">
        <h1>欢迎您</h1>
        <h1>{{teacherName + "老师,您可以"}}</h1>
    </div>
</template>

<script>
export default {
    name:"TeacherHead",
    props : {
        teacherName : {
            type : String,
            require : true
        }
    }
}
</script>

<style>
    #teacher_head{
        width: 100vw;
        height: 120px;
        background-color: #006EA1;
        padding: 15px 0 0 10px;
        color:white;
    }
</style>