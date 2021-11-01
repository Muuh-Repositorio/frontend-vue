import { baseApiUrl, showError } from "@/global";
import { Options, Vue } from "vue-class-component";
import { Input, Button, ImageBox } from '../../components'
import axios from "axios";
import { success } from "@/config/toasted";
import { removeMask } from "@/components/input/Input";

@Options({
    name: "Register",
    components: { Input, Button, ImageBox }
})
export default class Register extends Vue {
    user: any = {}

    async register(): Promise<void> {
        this.user.phone = removeMask(this.user.phone)
        this.user.cpf = removeMask(this.user.cpf)

        const url = `${ baseApiUrl }/user`
        axios.post(url, this.user)
             .then(() => {
                success()
                this.resetFields()
             })
             .catch(showError)
    }

    resetFields() {
        this.user = {}
    }
}