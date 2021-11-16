import { Options, Vue } from "vue-class-component";
import { DashboardSidebar, DashboardHeader, Card, DashboardContent, DashboardFooter } from '../../components'

@Options({
    name: "Dashboard",
    components: { DashboardSidebar, DashboardHeader, Card, DashboardContent, DashboardFooter }
})
export default class Dashboard extends Vue {
    redirect(): void {
        this.$router.push('/dashboard/geral')
    }

    mounted(): void {
        this.redirect()
    }
}