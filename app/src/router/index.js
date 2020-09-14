import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import UserInfo from '../components/UserInfo.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
    },
	{
		path: '/about',
		name: 'About',
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
	{
		path: '/admin/',
		name: 'Admin page',
		component: Admin,
        children: [{
            path: ":id",
            name: "Info page about user",
            component: UserInfo
        }]
    }
]

const router = new VueRouter({
	routes
})

export default router
