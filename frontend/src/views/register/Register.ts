import { baseApiUrl } from "@/global";
import { Options, Vue } from "vue-class-component";
import { Input, Button, ImageBox } from '../../components'
import axios from "axios";

@Options({
    name: "Register",
    components: { Input, Button, ImageBox }
})
export default class Register extends Vue {
    user = {}

    register(): void {
        const url = `${ baseApiUrl }/auth/login`
        axios.post(url, this.user)
             .then(() => {
                this.resetFields()
             })
             .catch()
    }

    resetFields() {
        this.user = {}
    }
}