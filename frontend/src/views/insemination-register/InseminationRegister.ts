import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Input, ImageBox, Button } from '../../components'

@Options({
    name: "InseminationRegister",
    components: { Input, ImageBox, Button }
})
export default class InseminationRegister extends Vue {
    cow = {}
    cows = store.getters.getData

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
        this.cows = this.cows.splice(1, this.cows.length)
        this.cow = this.cows[0]
    }

    mounted() {
        this.cow = this.cows[0]
    }
}