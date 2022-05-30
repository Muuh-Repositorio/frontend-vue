import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { ImageBox, SelectBox, Button } from '../../components'

@Options({
    name: "SemenRegister",
    components: { ImageBox, SelectBox, Button }
})
export default class SemenRegister extends Vue {
    semen = {
        idt_farm: store.getters.getFarm
    }
    options: any = []

    loadTypes() {
        const url = `${ baseApiUrl }/cowTypes`
        axios.get(url)
            .then((response) => {
                for (const type of response.data) {
                    this.options.push({
                        id: type.idt_type,
                        value: type.type
                    })
                }
            })
            .catch(showError)
    }

    register() {
        const url = `${ baseApiUrl }/semen`
        axios.post(url, this.semen)
            .then((response) => {
                success()
                this.semen = {
                    idt_farm: store.getters.getFarm
                }
            })
            .catch(showError)
    }

    mounted() {
        this.loadTypes()
    }

}