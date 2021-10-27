import { User } from "@/assets/interfaces";
import { Options, Vue } from "vue-class-component";
import { Input, Button } from '../../components'
import axios from 'axios'
import { baseApiUrl } from "@/global";

@Options({
    name: "Login",
    components: { Input, Button }
})
export default class Login extends Vue {
    user: User = { 
        cpf: '', 
        password: ''
    }

    login(): void {
        const url = `${ baseApiUrl }/auth/login`
        axios.post(url, this.user)
            .then(() => {
                this.resetFields()
            })
            .catch()
    }

    resetFields(): void {
        this.user.cpf = ''
        this.user.password = ''
    }
}