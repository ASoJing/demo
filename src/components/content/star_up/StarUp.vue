<template>
  <div id="star_up">
    <div class="star star_up_lf">
      <div class="topFont">
        <span class="iconfont icon-jiaoshizigezheng sp"></span>
      </div>
      <button @click="star_up_click('teacher')">我是教师</button>
    </div>
    <div class="star star_up_rt">
      <div class="topFont">
        <span class="iconfont icon-yewutubiao_xueshengchaxun sp"></span>
      </div>
      <button @click="star_up_click('student')">我是学生</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarUp",
  methods: {
    star_up_click(flag) {
      if (flag === "teacher") {
        /* 老师,将数据更改为老师 */
        this.$store.commit("setUser", "teacher");
        /* 开始定义tabbar内容 */
        const tabbar_array = [
          {
            name: "首页",
            img: "icon-shouye",
            path: "/teacher",
          },
          {
            name: "消息",
            img: "icon-xiaoxi",
            path: "/teacher/news",
          },
          {
            name: "我的",
            img: "icon-wode",
            path: "/teacher/profile",
          },
        ];
        const pro_main = [
          {
            title: "我的资料",
            font: "icon-zhanghu",
            color: "#182782",
            size: "24vw",
          },
          {
            title: "报名情况",
            font: "icon-navicon-bmjl",
            color: "#CEA584",
            size: "30vw",
          },
          {
            title: "我的组织",
            font: "#icon-zuzhi",
          },
          {
            title: "关于",
            font: "icon-guanyu1",
            color: "#4C4C4C",
            size: "30vw",
          },
        ];
        const news_main_content = [
          {
            /* 用户头像 */
            userImg: "",
            userName: "第一图书馆",
            /* 用户信息 */
            userNews: ["同学，请问你什么时候能到岗？"],
            time: "18:00",
          },
          {
            /* 用户头像 */
            userImg: "",
            userName: "第二图书馆",
            /* 用户信息 */
            userNews: ["同学，不好意思我们已经招满人了"],
            time: "18:00",
          },
          {
            /* 用户头像 */
            userImg: "",
            userName: "计算机学院",
            /* 用户信息 */
            userNews: ["老师好,请问学校办公室还需要这份文件吗？"],
            time: "18:00",
          },
          {
            /* 用户头像 */
            userImg: "",
            userName: "政管学院",
            /* 用户信息 */
            userNews: ["老师好,请问学校办公室还需要这份文件吗？"],
            time: "18:00",
          },
        ];
        this.$store.commit("setTabbarArray", tabbar_array);
        this.$store.commit("setProMain", pro_main);
        this.$store.commit("setNewMainContent", news_main_content);
        /* 跳转到教师页 */
        this.$router.push("/teacher");
      } else {
        this.$store.commit("setUser", "student");
        const tabbar_array = [
          {
            name: "工作",
            img: "icon-gongzuo",
            path: "/student",
          },
          {
            name: "消息",
            img: "icon-xiaoxi",
            path: "/student/news",
          },
          {
            name: "我的",
            img: "icon-wode",
            path: "/student/profile",
          },
        ];
        const pro_main = [
          {
            title: "签到",
            font: "icon-qiandao_o",
            color: "yellow",
            size: "35vw",
          },
          {
            title: "已报名",
            font: "icon-baoming",
            color: "#1DF92E",
            size: "25vw",
          },
          {
            title: "加入组织",
            font: "#icon-zuzhi",
          },
          {
            title: "我的资料",
            font: "icon-zhanghu",
            color: "#182782",
            size: "24vw",
          },
          {
            title: "关于",
            font: "icon-guanyu1",
            color: "#4C4C4C",
            size: "24vw",
          },
        ];
        const news_main_content = [
          {
            /* 用户头像 */
            userImg: "",
            userName: "张三",
            /* 用户信息 */
            userNews: ["同学，请问你什么时候能到岗？"],
            time: "18:00",
          },
          {
            /* 用户头像 */
            userImg: "",
            userName: "王五",
            /* 用户信息 */
            userNews: ["同学，不好意思我们已经招满人了"],
            time: "18:00",
          },
        ];
        this.$store.commit("setTabbarArray", tabbar_array);
        this.$store.commit("setProMain", pro_main);
        this.$store.commit("setNewMainContent", news_main_content);
        /* 跳转到学生页 */
        this.$router.push("/student");
      }
    },
  },
};
</script>

<style>
#star_up {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
#star_up .star {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
}
#star_up .star button {
  width: 80%;
  height: 50px;
  border-radius: 15px;
  background-color: #006ea1;
  border: 0;
  margin-top: -10px;
}
#star_up .star .topFont .sp {
  font-size: 100px;
}
#star_up .star .topFont {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 135px;
}
</style>