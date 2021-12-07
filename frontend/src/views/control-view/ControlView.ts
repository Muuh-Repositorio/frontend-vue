import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { PageTitle, Card, Table } from '../../components'
import { AbleFor, paths } from './Paths.enum'

@Options({
    name: "ControlView",
    components: { PageTitle, Card, Table }
})
export default class ControlView extends Vue {
    fields = [
        { value: 'code', text: "ID"},
        { value: 'cow_name', text: "Nome"},
        { value: 'weight', text: "Peso"},
        { value: 'situation', text: "Situação"},
    ]

    filterValues = [
        { value: null, text: "Selecionar..."},
        { value: 'Inseminate', text: "Inseminar"},
        { value: 'Diagnosis', text: "Diagnosticar"},
        { value: 'Drying', text: "Secar"},
        { value: 'Childbirth', text: "Parir"},
    ]

    cows = []
    inseminations = 0
    diagnoses = 0
    dryings = 0
    childBirths = 0

    loadCardNumbers() {
        let url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/able?for=${ this.filterValues[1].value }`
        axios.get(url)
            .then((response) => {
                this.inseminations = response.data.length
            })
            .catch(showError)

        url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/able?for=${ this.filterValues[2].value }`
        axios.get(url)
            .then((response) => {
                this.diagnoses = response.data.length
            })
            .catch(showError)

        url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/able?for=${ this.filterValues[3].value }`
        axios.get(url)
            .then((response) => {
                this.dryings = response.data.length
            })
            .catch(showError)

        url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/able?for=${ this.filterValues[4].value }`
        axios.get(url)
            .then((response) => {
                this.childBirths = response.data.length
            })
            .catch(showError)
    }

    selectCows(filter: any) {
        if (filter !== null) {
            const url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/able?for=${ filter }`
            axios.get(url)
                .then((response) => {
                    this.cows = response.data
                })
                .catch(showError)
        } else {
            this.cows = []
        }
    }

    async selectAction(data: any) {
        console.log(data.action)
        if (data.action !== 'Drying') {
            const case_: AbleFor = data.action
            const path = paths.getPaths(case_)
            if (data.items.length) {
                store.dispatch('setData', data.items)
                this.$router.push({ path: path })
            }
        } else {
            await this.dryCow(data.items)
        }
    }

    async dryCow(cows: any[]) {
        for (const cow of cows) {
            const url = `${ baseApiUrl }/cow/${ cow.idt_cow }`
            await axios.put(url, { situation: 5 })
                .then(() => {
                    success()
                })
                .catch(showError)
        }
        location.reload()
    }

    mounted() {
        this.loadCardNumbers()
    }
}