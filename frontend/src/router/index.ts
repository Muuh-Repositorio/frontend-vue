import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { 
	Home, 
	Login, 
	Register, 
	FarmRegister, 
	Dashboard, 
	GeralView,
	AnimalRegister,
	InseminationRegister,
	PathNotFound,
	FarmSelector,
	ControlView,
	SemenRegister,
	ChildbirthRegister,
	DiagnosisRegister,
	Profile,
	SemenStock
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
			},
			{
				name: "Controle",
				path: "/dashboard/control",
				components: { dashboardContent: ControlView }
			},
			{
				name: "Perfil",
				path: "/profile",
				components: { dashboardContent: Profile }
			},
			{
				name: "Estoque - Sêmen",
				path: "/stock/semen",
				components: { dashboardContent: SemenStock }
			}
		]
	},
	{
		name: "Registrar Rebanho",
		path: "/animalRegister",
		components: { mainContent: AnimalRegister },
		meta: { requiresLogin: true, requiresFarm: true }
	},
	{
		name: "Registrar Inseminação",
		path: "/inseminationRegister",
		components: { mainContent: InseminationRegister },
		meta: { requiresLogin: true, requiresFarm: true }
	},
	{
		name: "Registrar Sêmen",
		path: "/semenRegister",
		components: { mainContent: SemenRegister },
		meta: { requiresLogin: true, requiresFarm: true }
	},
	{
		name: "Registrar Parto",
		path: "/childbirthRegister",
		components: { mainContent: ChildbirthRegister },
		meta: { requiresLogin: true, requiresFarm: true }
	},
	{
		name: "Registrar Diagnóstico",
		path: "/diagnosisRegister",
		components: { mainContent: DiagnosisRegister },
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
