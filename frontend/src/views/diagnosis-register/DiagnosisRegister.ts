import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { ImageBox, Button, SelectBox, Input } from '../../components'

@Options({
    name: "DiagnosisRegister",
    components: { ImageBox, Button, SelectBox, Input }
})
export default class DiagnosisRegister extends Vue {
    cow: any = {}
    cows = store.getters.getData

    options = [
        { id: true, value: "Positivo"},
        { id: false, value: "Negativo"},
    ]

    register(): void {
        const url = `${ baseApiUrl }/insemination/${ this.cow.idt_insemination }`
        axios.put(url, this.cow)
            .then(() => {
                if (this.cow.diagnosis === 'true') {
                    this.updateCowSituation(4)
                } else {
                    this.updateCowSituation(2)
                }
                success()
                this.resetFields()
            })
            .catch(showError)
    }

    updateCowSituation(situation: number): void {
        const url = `${ baseApiUrl }/cow/${ this.cow.idt_cow }`
        axios.put(url, { situation: situation})
            .then(() => {
            })
            .catch(showError)
    }

    resetFields(): void {
        this.cows = this.cows.splice(1, this.cows.length)
        this.cow = this.cows.length > 0 ? this.cows[0] : {}
    }

    mounted() {
        if (this.cows.length > 0) {
            this.cow = this.cows[0]
        }
    }
}