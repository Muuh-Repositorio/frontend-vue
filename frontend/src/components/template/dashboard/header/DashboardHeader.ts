import { Options, Vue } from "vue-class-component";

@Options({
    name: "DashboardHeader"
})
export default class DashboardHeader extends Vue {
    showMenu(): void {
        const menu = document.querySelector('.dropdown-menu.dropdown-menu-right.shadow.animated--grow-in')
        if (!menu?.classList.contains('show')) {
            menu?.classList.add('show')
        } else {
            menu?.classList.remove('show')
        }
        
    }
}