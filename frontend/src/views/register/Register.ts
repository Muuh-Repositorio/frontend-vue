import { baseApiUrl, showError } from "@/global";
import { Options, Vue } from "vue-class-component";
import { Input, Button, ImageBox } from '../../components'
import axios from "axios";
import { success } from "@/config/toasted";

@Options({
    name: "Register",
    components: { Input, Button, ImageBox }
})
export default class Register extends Vue {
    user = {}

    async register(): Promise<void> {
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