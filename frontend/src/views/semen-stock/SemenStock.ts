import { baseApiUrl, showError } from "@/global";
import { Options, Vue } from "vue-class-component";
import { PageTitle, Table } from '../../components'
import store from "@/store";
import axios from "axios";

@Options({
    name: 'ControlView',
    components: { PageTitle, Table }
})
export default class SemenStock extends Vue {
    fields = [
        { value: 'idt_semen', text: "ID"},
        { value: 'type', text: "Raça"},
    ]

    filterValues = [
        { value: null, text: "Todas" },
        { value: 'Holandesa', text: "Holandesa" },
        { value: 'Pardo Suiço', text: "Pardo Suiço" },
        { value: 'Jersey', text: "Jersey" },
        { value: 'Gir Leiteiro', text: "Gir Leiteiro" },
        { value: 'Sindi', text: "Sindi" },
        { value: 'Simental', text: "Simental" },
        { value: 'Guzerá Leiteiro', text: "Guzerá Leiteiro" },
        { value: 'Girolando', text: "Girolando" },
        { value: 'Guzolando', text: "Guzolando" },
    ]

    semens = []
    semensAux = []

    loadSemens() {
        const url = `${ baseApiUrl }/semen/${ store.getters.getFarm }`
        axios.get(url)
            .then((response) => {
                this.semens = response.data.filter((value: any) => {
                    if (!value.used) return value
                })
                this.semensAux = this.semens
            })
            .catch(showError)
    }

    selectSemens(filter: any) {
        if (filter !== null) {
            this.semensAux = this.semens.filter((value: any) => {
                if (value.type === filter) return value
            })
        } else {
            this.semensAux = this.semens
        }
    }

    mounted() {
        this.loadSemens()
    }
}