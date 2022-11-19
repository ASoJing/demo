import Vue from "vue"
import VueRouter from "vue-router"
/* 加载router */
Vue.use(VueRouter);
/* 导入store */
import store from "@/store"; 

/* 学生 */
const Work = () => import("../views/student/work/Work.vue");
const News = () => import("../views/student/news/News.vue");
const Profile = () => import("../views/student/profile/Profile.vue");
/* 启动页 */
const StarUp = () => import("../components/content/star_up/StarUp.vue");
/* 路由错误页 */
const Error = () => import("../components/commons/error/Error.vue")
/* 教师 */
const Teacher = () => import("../views/teacher/Teacher.vue")

const routes = [
    {
        path : "/",
        component : StarUp,
        meta : {
            title : "起始页"
        }
    },
    {
        path : "/student",
        component : Work,
        meta : {
            title : "工作"
        },
    },
    {
        path : "/student/news",
        component : News,
        meta : {
            title : "消息"
        }
    },
    {
        path : "/student/profile",
        component : Profile,
        meta : {
            title : "我的"
        }
    },
    {
        path : "/teacher",
        component : Teacher,
        meta : {
            title : "教师"
        }
    },
    {
        path : "/teacher/news",
        component : News,
        meta : {
            title : "教师"
        }
    },
    {
        path : "/teacher/profile",
        component : Profile,
        meta : {
            title : "我的"
        }
    },
    {
        path : "*",
        component : Error,
        meta : {
            title : "错误路由"
        }
    }
]

const router = new VueRouter({
    routes,
    mode : 'history'
})

router.beforeEach((to , from , next) => {
    /* 判断该当前是否由用户数据,如果没有跳转到起始页 */
    /* 判断当前路由是不是起始页 */
    if(to.fullPath.length > 1){
        /* 说明要去的不是起使页 */
        /* 判断是否有用户数据 */
        if(store.state.user.userId){
            next();
        }else{
            next("/")
        }
    }else{
        next();
    }
})

router.afterEach((to , from) => {
    //修改标题
    document.title = to.meta?.title;
})

export default router;