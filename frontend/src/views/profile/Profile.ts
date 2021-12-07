import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Table, ProfileCard, Card } from '../../components'

@Options({
    name: "Profile",
    components: { Table, ProfileCard, Card }
})
export default class Profile extends Vue {
    childbirthFields = [
        { value: 'childbirth_date', text: "Data do Parto"},
        { value: 'heifer_gender', text: "Sexo da Novilha"},
    ]

    inseminationFields = [
        { value: 'insemination_date', text: "Data de Inseminação"},
        { value: 'idt_bull', text: "ID Touro"},
        { value: 'idt_semen', text: "ID Sêmen"},
        { value: 'diagnosis', text: "Diagnóstico"},
    ]

    inseminations = []
    childbirths = []
    data_: any = {}

    loadInfo() {
        const url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/stats?cowParam=${ this.$route.query.param }`
        axios.get(url)
            .then((response) => {
                this.data_ = response.data
                this.inseminations = this.data_.inseminations
                this.childbirths = this.data_.childbirths
            })
            .catch(() => { this.$router.push({ path: '/dashboard/geral'}) })
    }

    mounted() {
        this.loadInfo()
    }
}