import { Options, Vue } from "vue-class-component";

@Options({
    name: "DashboardSidebar"
})
export default class DashboardSidebar extends Vue {
    toggleMenu(): void {
        const sidebar = document.getElementById('accordionSidebar')
        if (!sidebar?.classList.contains('toggled')) {
            sidebar?.classList.add('toggled')
        } else {
            sidebar?.classList.remove('toggled')
        }
    }
}