import store from "@/store";
import { Options, Vue } from "vue-class-component";
import { DashboardSidebar, DashboardHeader, Card, DashboardContent, DashboardFooter } from '../../components'

@Options({
    name: "Dashboard",
    components: { DashboardSidebar, DashboardHeader, Card, DashboardContent, DashboardFooter }
})
export default class Dashboard extends Vue {
    redirect(): void {
        const farm = store.getters.getFarm
        if (!farm) {
            this.$router.push('/') // Colocar caminho para a seleção de fazenda
        } else {
            this.$router.push('/dashboard/geral')
        }
    }

    mounted(): void {
        this.redirect()
    }
}