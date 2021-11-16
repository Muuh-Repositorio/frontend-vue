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
	PathNotFound,
	FarmSelector
} from '../views'
import { validations } from './Validations'

const routes: Array<RouteRecordRaw> = [
    {
		name: "Home",
		path: "/",
		components: { mainContent: Home }
	},
	{
		name: "Login",
		path: "/login",
		components: { mainContent: Login }
	},
	{
		name: "Registrar",
		path: "/register",
		components: { mainContent: Register} 
	},
	{
		name: "Registro Fazenda",
		path: "/farmRegister",
		components: { mainContent: FarmRegister },
		meta: { requiresLogin: true }
	},
	{
		name: "Dashboard",
		path: "/dashboard",
		components: { mainContent: Dashboard },
		meta: { requiresLogin: true, requiresFarm: true },
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
		components: { mainContent: CowRegister },
		meta: { requiresLogin: true, requiresFarm: true }
	},
	{
		name: "Registrar Inseminação",
		path: "/inseminationRegister",
		components: { mainContent: InseminationRegister },
		meta: { requiresLogin: true, requiresFarm: true }
	},
	{	
		name: "Página não Encontrada",
		path: "/:pathMatch(.*)*",
		components: { mainContent: PathNotFound }
	},
	{
		name: "Fazendas",
		path: "/farms",
		components: { mainContent: FarmSelector },
		meta: { requiresLogin: true }
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach(async (to, from, next) => {
	let path = undefined
	const metas = Object.keys(to.meta)
	for (const meta of metas) {
		path = await validations[meta]()
		if (path !== undefined) break
	}
	next(path)
})

export default router
