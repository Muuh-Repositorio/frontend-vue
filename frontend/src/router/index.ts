import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Home, Login, Register, FarmRegister } from '../views'

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
	},
	{
		name: "Farm Register",
		path: "/farmRegister",
		component: FarmRegister
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
