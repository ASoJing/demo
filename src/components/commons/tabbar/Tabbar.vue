<template>
  <div id="tabbar" v-if="this.$store.state.user.userId !== null">
    <TabbarItem
      v-for="(item, index) in this.$store.state.tabbar_array"
      :key="index"
      :tab_conten="item"
    ></TabbarItem>
  </div>
</template>

<script>
	import TabbarItem from "./TabbarItem.vue";

	export default {
		name: "Tabbar",
		components: {
			TabbarItem,
		},
		data() {
			return {};
		},
	};
</script>

<style>
	#tabbar {
		display: flex;
		justify-content: center;
		align-content: center;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 70px;
		background-color: white;
		border-top: 1px solid gray;
		z-index: 99;
	}
</style>