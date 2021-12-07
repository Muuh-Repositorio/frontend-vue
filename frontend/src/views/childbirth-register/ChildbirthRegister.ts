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
    data_: any = {}
    cows = store.getters.getData

    genders = [
        { id: 'M', value: "Macho" },
        { id: 'F', value: "Fêmea" },
    ]

    register(): void {
        const url = `${ baseApiUrl }/childbirth`
        axios.post(url, this.data_)
            .then(() => {
                success()
                this.resetFields()
            })
            .catch(showError)
    }

    redirect() {
        if (!this.data_.idt_cow) {
            this.$router.push("/dashboard/geral")
        }
    }

    resetFields() {
        this.data_ = {}
    }

    mounted() {
        this.redirect()
    }
}