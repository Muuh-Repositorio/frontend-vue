import { baseApiUrl } from "@/global";
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
        const url = `${ baseApiUrl }/<colocar endpoint aqui>`
        axios.post(url, this.cow)
            .then(() => {
                this.resetFields()
            })
            .catch()
    }

    resetFields(): void {
        this.cow = {}
    }
}