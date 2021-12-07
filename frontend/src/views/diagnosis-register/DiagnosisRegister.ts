import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { ImageBox, Button, SelectBox } from '../../components'

@Options({
    name: "DiagnosisRegister",
    components: { ImageBox, Button, SelectBox }
})
export default class DiagnosisRegister extends Vue {
    cow: any = {}
    cows = store.getters.getData

    options = [
        { id: true, value: "Positivo"},
        { id: false, value: "Negativo"},
    ]

    register(): void {
        const url = `${ baseApiUrl }/insemination`
        axios.put(url, this.cow)
            .then(() => {
                if (this.cow.diagnosis) {
                    this.updateCowSituation(4)
                } else {
                    this.updateCowSituation(2)
                }
                success()
            })
            .catch(showError)
    }

    updateCowSituation(situation: number): void {
        const url = `${ baseApiUrl }/cow/${ this.cow.idt_cow }`
        axios.put(url, { situation: situation})
            .then(() => {
                success()
            })
            .catch(showError)
    }
}