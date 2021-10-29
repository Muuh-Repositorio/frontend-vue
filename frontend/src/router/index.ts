import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { 
	Home, 
	Login, 
	Register, 
	FarmRegister, 
	Dashboard, 
	GeralView,
	CowRegister,
	InseminationRegister,
	PathNotFound
} from '../views'

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
		name: "Registrar",
		path: "/register",
		components: { mainContent: Register}
	},
	{
		name: "Registro Fazenda",
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
	{
		name: "Registrar Vaca",
		path: "/cowRegister",
		components: { mainContent: CowRegister }
	},
	{
		name: "Registrar Inseminação",
		path: "/inseminationRegister",
		components: { mainContent: InseminationRegister }
	},
	{	
		name: "Página não Encontrada",
		path: "/:pathMatch(.*)*",
		components: { mainContent: PathNotFound }
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
