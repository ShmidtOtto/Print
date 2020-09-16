import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
	router,
	store,
	vuetify,
	computed: {
		doneTodoCount() {
			return this.$store.getters.doneTodosCount
		}
	},
	render: h => h(App)
}).$mount('#app');
