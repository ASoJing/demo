<template>
  	<div id="app">
		<keep-alive>
			<router-view/>
		</keep-alive>
		<Tabbar></Tabbar>
	</div>
</template>

<script>

	import StarUp from './components/content/star_up/StarUp.vue';
	import Tabbar from './components/commons/tabbar/Tabbar.vue';

	export default {
		name: "App",
		components: {
			StarUp,
			Tabbar
		},
	};
</script>

<style>
	@import url("./assets/iconfont.css");
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	#app{
		width: 100vw;
  		height: 100vh;
	}
</style>
