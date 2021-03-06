import { farmKey, userKey } from "@/global";
import { Options, Vue } from "vue-class-component";
import store from "@/store";

@Options({
    name: "DashboardHeader",
})
export default class DashboardHeader extends Vue {
    user = store.getters.getUser
    cowParam = ''

    showMenu(): void {
        const menu = document.querySelector('.dropdown-menu.dropdown-menu-right.shadow.animated--grow-in')
        if (!menu?.classList.contains('show')) {
            menu?.classList.add('show')
        } else {
            menu?.classList.remove('show')
        }
    }

    searchCow() {
        this.$router.push({ path: '/profile', query: { param: this.cowParam }})
    }

    logout(): void {
        localStorage.removeItem(userKey)
        localStorage.removeItem(farmKey)
        store.dispatch('setUser', null)
        this.$router.push("/")
    }
}