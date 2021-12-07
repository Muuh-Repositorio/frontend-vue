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
        { value: 'gender', text: "Sexo"}
        // { value: 'lastbirth', text: "Último Parto"},
        // { value: 'lastinsemination', text: "Última Inseminação"},
        // { value: 'diagnosis', text: "Diagnóstico"},
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

    dataFiltered: any = []

    cows = []
    totalCows = 0
    availableCows = 0
    inseminatedCows = 0
    allChildbirth = 0

    loadAllCows() {
        const url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }/total`
        axios.get(url)
             .then((response) => {
                this.cows = response.data
                this.dataFiltered = this.cows
             })
             .catch(showError)
    }

    loadStats() {
        const url = `${ baseApiUrl }/farm/${ store.getters.getFarm }/stats`
        axios.get(url)
            .then((response) => {
                this.totalCows = response.data.total_cows
                this.availableCows = response.data.cows_available
                this.inseminatedCows = response.data.number_of_inseminations
                this.allChildbirth = response.data.number_of_childbirths
            })
            .catch(showError)
    }
    
    filterData(value: any) {
        if (value !== null) {
            const url = `${ baseApiUrl }/cow/farm/${ store.getters.getFarm }?situation=${value}`
            console.log(url)
            axios.get(url)
                .then((response) => {
                    this.dataFiltered = response.data
                    this.filterGender('F', this.dataFiltered)
                })
                .catch(showError)
        } else {
            this.loadAllCows()
        }
    }

    filterGender(value: any, data: any = null) {
        data = data === null ? this.cows : data

        if (value !== null) {
            this.dataFiltered = data.filter((animal: any) => {
                if (animal.gender === value) {
                    return animal
                }
            })
        } else {
            this.loadAllCows()
        }
    }

    mounted() {
        this.loadAllCows()
        this.loadStats()
    }

}