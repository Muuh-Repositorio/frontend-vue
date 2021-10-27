import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Home, Login, Register } from '../views'

const routes: Array<RouteRecordRaw> = [
    {
		name: "Home",
		path: "/",
		component: Home
	},
	{
		name: "Login",
		path: "/login",
		component: Login
	},
	{
		name: "Register",
		path: "/register",
		component: Register
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
