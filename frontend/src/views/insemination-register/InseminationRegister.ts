import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Input, ImageBox, Button } from '../../components'

@Options({
    name: "InseminationRegister",
    components: { Input, ImageBox, Button }
})
export default class InseminationRegister extends Vue {
    cow = {}

    register(): void {
        const url = `${ baseApiUrl }/insemination`
        axios.post(url, this.cow)
            .then(() => {
                success()
                this.resetFields()
            })
            .catch(showError)
    }

    resetFields(): void {
        this.cow = {}
    }
}