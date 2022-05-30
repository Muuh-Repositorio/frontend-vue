import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Input, SelectBox, Button, ImageBox } from '../../components'

@Options({
    name: "AnimalRegister",
    components: { Input, SelectBox, Button, ImageBox }
})
export default class AnimalRegister extends Vue {
    showInitialInfo = true
    showMoreInfo = false
    weightOrAgeIsValid: any = false
    alreadyGaveBirth = 'Não'
    alreadyInseminated = 'Não'

    insemination_data: any = {}
    childbirth_data: any = {}
    insemination_type: any = {}
    
    animal: any = {
        idt_farm: store.getters.getFarm
    }

    options: any = []
    
    trueOrFalse: any = [
        { id: true, value: "Sim" },
        { id: false, value: "Não" },
    ]

    genders: any = [
        { id: 'M', value: 'Macho'},
        { id: 'F', value: 'Fêmea'},
    ]

    insemination_types = [
        { id: 'bull', value: "Touro" },
        { id: 'semen', value: "Sêmen" },
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
        axios.post(url, this.animal)
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
        if (this.insemination_type === 'bull' && this.animal.idt_semen) {
            delete this.animal.idt_semen
        } else if (this.insemination_type === 'semen' && this.animal.idt_bull) {
            delete this.animal.idt_bull
        }

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
        if (this.childbirth_data.childbirth_date && this.alreadyGaveBirth) {
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
            weight: this.animal.weight,
            birth_date: this.animal.birth_date,
            idt_type: this.animal.idt_type
        }

        if (this.animal.gender === 'F') {
            await axios.post(url, cow)
                    .then((response) => {
                        this.weightOrAgeIsValid = response.data
                    })
                    .catch(showError)
        }

        if (this.weightOrAgeIsValid && this.animal.gender === 'F') {
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
        this.animal = { idt_farm: store.getters.getFarm }
        this.insemination_data = {}
        this.return_()
    }

    mounted() {
        this.loadTypes()
    }
}
