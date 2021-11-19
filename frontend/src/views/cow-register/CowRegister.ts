import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Input, SelectBox, Button, ImageBox } from '../../components'

@Options({
    name: "CowRegister",
    components: { Input, SelectBox, Button, ImageBox }
})
export default class CowRegister extends Vue {
    showInitialInfo = true
    showMoreInfo = false
    weightOrAgeIsValid: any = false
    alreadyGaveBirth = 'Não'
    alreadyInseminated = 'Não'

    insemination_data: any = {}
    childbirth_data: any = {}
    
    cow: any = {
        idt_farm: store.getters.getFarm
    }

    options: any = []
    
    trueOrFalse: any = [
        { id: true, value: "Sim" },
        { id: false, value: "Não" },
    ]

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

    register(): void {
        const url = `${ baseApiUrl }/cow`
        axios.post(url, this.cow)
            .then((response) => {
                success()
                if (this.showMoreInfo) {
                    this.registerInsemination(response.data.idt_cow)
                    this.registerChildbirth(response.data.idt_cow)
                }
                this.resetFields()
            })
            .catch(showError)
    }

    registerInsemination(idt_cow: number) {
        if (this.insemination_data.insemination_date) {
            this.insemination_data.idt_cow = idt_cow

            const url = `${ baseApiUrl }/insemination`
            axios.post(url, this.insemination_data)
                .then((response) => {
                    success()
                })
                .catch(showError)
        }
    }

    registerChildbirth(idt_cow: number) {
        if (this.childbirth_data.childbirth_date) {
            this.childbirth_data.idt_cow = idt_cow

            const url = `${ baseApiUrl }/childbirth`
            axios.post(url, this.childbirth_data)
                .then((response) => {
                    success()
                })
                .catch(showError)
        }
    }

    async continue_() {
        const url = `${ baseApiUrl }/cow/validate`
        const cow = {
            weight: this.cow.weight,
            birth_date: this.cow.birth_date,
            idt_type: this.cow.idt_type
        }

        await axios.post(url, cow)
                .then((response) => {
                    this.weightOrAgeIsValid = response.data
                })
                .catch(showError)

        if (this.weightOrAgeIsValid) {
            this.showMoreInfo = true
            this.showInitialInfo = false
        } else {
            this.register()
        }
    }

    return_(): void {
        this.showMoreInfo = false
        this.showInitialInfo = true
        this.weightOrAgeIsValid = false
    }

    resetFields(): void {
        this.cow = { idt_farm: store.getters.getFarm }
        this.insemination_data = {}
        this.return_()
    }

    mounted() {
        this.loadTypes()
    }
}
