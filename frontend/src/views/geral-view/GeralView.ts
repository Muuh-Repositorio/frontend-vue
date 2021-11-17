import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Card, PageTitle, Table } from "../../components";

@Options({
    name: "GeralView",
    components: { Card, PageTitle, Table }
})
export default class GeralView extends Vue {
    fields = [
        { value: 'code', text: "ID"},
        { value: 'name', text: "Nome"},
        { value: 'weight', text: "Peso"},
        { value: 'birth_date', text: "Data de Nascimento"},
        { value: 'type', text: "Raça"},
        { value: 'lastbirth', text: "Último Parto"},
        { value: 'lastinsemination', text: "Última Inseminação"},
        { value: 'diagnosis', text: "Diagnóstico"},
    ]

    filterValues = [
        { value: null, text: 'Todas' },
        { value: 'Novilha', text: 'Novilhas' },
        { value: 'Apta', text: 'Aptas' },
        { value: 'Inseminada', text: 'Inseminadas' },
        { value: 'Grávida', text: 'Grávidas' },
        { value: 'Seca', text: 'Secas' },
        { value: 'Parida', text: 'Paridas' },
        { value: 'Vendida', text: 'Vendidas' },
        { value: 'Morta', text: 'Mortas' }
    ]

    cows = []
    availableCows = 0
    inseminatedCows = 0
    allChildbirth = 0

    loadAllCows() {
        const url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/total`
        axios.get(url)
             .then((response) => {
                this.cows = response.data
             })
             .catch(showError)
    }

    loadAvailableCows() {
        const url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/able?for=Inseminate`
        axios.get(url)
            .then((response) => {
                this.availableCows = response.data.length
            })
            .catch(showError)
    }

    loadInseminatedCows() {
        const url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }?situation=Inseminated`
        axios.get(url)
            .then((response) => {
                this.inseminatedCows = response.data.length
            })
            .catch(showError)
    }

    loadAllChildbirth() {
        const url = `${ baseApiUrl }/childbirth/farm/${ store.getters.getFarm }`
        axios.get(url)
            .then((response) => {
                this.allChildbirth = response.data.length
            })
            .catch(showError)
    }
    
    filterData(value: any) {
        if (value !== null) {
            const url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }?situation=${value}`
            console.log(url)
            axios.get(url)
                .then((response) => {
                    this.cows = response.data
                })
                .catch(showError)
        } else {
            this.loadAllCows()
        }
    }

    mounted() {
        this.loadAllCows()
        this.loadAvailableCows()
        this.loadInseminatedCows()
        this.loadAllChildbirth()
    }

}