import { Options, Vue } from "vue-class-component";
import { Input, Button } from '../../components'
import axios from 'axios'
import { baseApiUrl, showError, userKey } from "@/global";
import { success } from "@/config/toasted";
import store from "@/store";
import { removeMask } from '@/components/input/Input'

@Options({
    name: "Login",
    components: { Input, Button },
})
export default class Login extends Vue {
    user: any = {}

    login(): void {
        this.user.cpf = removeMask(this.user.cpf)

        const url = `${ baseApiUrl }/auth/login`
        axios.post(url, this.user)
            .then((response) => {
                success()
                this.resetFields()
                this.setUser(response)
                window.location.reload()
            })
            .catch(showError)
    }

    setUser(response: any): void {
        store.dispatch("setUser", response.data)
        localStorage.setItem(userKey, JSON.stringify(response.data))
    }

    redirectUserLogged(): void {
        const user = localStorage.getItem(userKey)
        if (user) {
            this.$router.push('/dashboard/geral')
        }
    }

    resetFields(): void {
        this.user = {}
    }

    mounted(): void {
        this.redirectUserLogged()
    }
}