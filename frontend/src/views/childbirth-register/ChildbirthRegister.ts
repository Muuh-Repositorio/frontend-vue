import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Input, ImageBox, Button, SelectBox } from '../../components'

@Options({
    name: "ChildbirthRegister",
    components: { Input, ImageBox, Button, SelectBox }
})
export default class ChildbirthRegister extends Vue {
    cow: any = {}
    cows = store.getters.getData

    genders = [
        { id: 'M', value: "Macho" },
        { id: 'F', value: "Fêmea" },
    ]

    register(): void {
        const url = `${ baseApiUrl }/childbirth`
        axios.post(url, this.cow)
            .then(() => {
                success()
                this.resetFields()
            })
            .catch(showError)
    }

    resetFields() {
        this.cows = this.cows.splice(1, this.cows.length)
        this.cow = this.cows.length > 0 ? this.cows[0] : {}
    }

    mounted() {
        if (this.cows.length > 0) {
            this.cow = this.cows[0]
        }
    }
}