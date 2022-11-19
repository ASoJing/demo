import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {
			/* 当前的类型(教师或者学生) */
			userId : null
		},
		tabbar_array : [],
		station : "",
		pro_main : [],
		news_main_content : []
	},
	getters: {
	},
	mutations: {
		setUser(state , payload){
			state.user.userId = payload;
		},
		setTabbarArray(state,payload){
			state.tabbar_array = payload;
		},
		setStation(state,payload){
			state.station = payload;
		},
		setProMain(state,payload){
			state.pro_main = payload;
		},
		setNewMainContent(state,payload){
			state.news_main_content = payload;
		}
	},
	actions: {
	},
	modules: {
	}
})
