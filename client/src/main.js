import Vue from "vue";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";
import router from "./router";
import VueMask from "v-mask";

Vue.use(VueMask)
Vue.config.productionTip = false;

new Vue({
	apolloProvider: createProvider(),
	router,
	render: h => h(App)
}).$mount("#app");
