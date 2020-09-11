import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use( BootstrapVue );
//import { mapGetters } from 'vuex';
new Vue( {
	router,
	store,
	computed: {
		doneTodoCount() {
			return this.$store.getters.doneTodosCount
		}
	},
	render: h => h( App )
} ).$mount( '#app' );
