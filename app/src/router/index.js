import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import UserInfo from "../components/UserInfo.vue";
import EditUser from "../components/EditUser.vue";
import AdminUsersGrid from "../components/AdminUsersGrid.vue";
import Statistic from "../components/Statistic.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
    },
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue")
    },
	{
		path: "/admin",
		name: "AdminView",
		component: Admin,
		children: [{
			path: "",
			name: "AdminPage",
			component: AdminUsersGrid,
			}, {
			path: "statistic",
			name: "AdminStatustic",
			compoment: Statistic
			}, {
			path: "user/:id",
			name: "AdminUserInfo",
			component: UserInfo
			}, {
			path: "user/:id/edit",
			name: "UserEditAdminPage",
			component: EditUser
			}]
    }
]

const router = new VueRouter({
	routes
})

export default router
