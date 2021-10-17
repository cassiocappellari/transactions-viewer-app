import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import Details from "../views/Details.vue";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes: [
		{
			name: "list",
			path: "/transactions",
			component: List
		},
		{
			name: "details",
			path: "/transactions/:transaction",
			component: Details,
			props: true
		},
		{
			path: "/",
			redirect: "/transactions"
		}
	]
});

export default router;