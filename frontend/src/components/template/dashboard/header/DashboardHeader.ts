import { userKey } from "@/global";
import { Options, Vue } from "vue-class-component";
import store from "@/store";

@Options({
    name: "DashboardHeader",
})
export default class DashboardHeader extends Vue {
    user = store.getters.getUser

    showMenu(): void {
        const menu = document.querySelector('.dropdown-menu.dropdown-menu-right.shadow.animated--grow-in')
        if (!menu?.classList.contains('show')) {
            menu?.classList.add('show')
        } else {
            menu?.classList.remove('show')
        }
    }

    logout(): void {
        localStorage.removeItem(userKey)
        store.dispatch('setUser', null)
        this.$router.push("/")
    }

    mounted(): void {
        
    }
}