import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Home, Login, Register, FarmRegister, Dashboard, GeralView } from '../views'

const routes: Array<RouteRecordRaw> = [
    {
		name: "Home",
		path: "/",
		components: { mainContent: Home }
	},
	{
		name: "Login",
		path: "/login",
		components: { mainContent: Login}
	},
	{
		name: "Register",
		path: "/register",
		components: { mainContent: Register}
	},
	{
		name: "Farm Register",
		path: "/farmRegister",
		components: { mainContent: FarmRegister}
	},
	{
		name: "Dashboard",
		path: "/dashboard",
		components: { mainContent: Dashboard},
		children: [
			{
				name: "Geral",
				path: "/dashboard/geral",
				components: { dashboardContent: GeralView }
			}
		]
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
