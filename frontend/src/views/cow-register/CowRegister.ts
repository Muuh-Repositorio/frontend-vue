import { baseApiUrl } from "@/global";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Input, SelectBox, Button, ImageBox } from '../../components'

@Options({
    name: "CowRegister",
    components: { Input, SelectBox, Button, ImageBox }
})
export default class CowRegister extends Vue {
    cow: any = {}
    options: any = [ // Conteudo Temporario
        { id: 'Gir', value: 'Raça Gir'},
        { id: 'Girolando', value: 'Raça Girolando'},
        { id: 'Guzerá', value: 'Raça Guzerá'},
        { id: 'Holandesa', value: 'Raça Holandesa'},
        { id: 'Jersey', value: 'Raça Jersey'},
        { id: 'Pardo', value: 'Raça Pardo Suiço'},
        { id: 'Sindi', value: 'Raça Sindi'},
    ]

    register(): void {
        const url = `${ baseApiUrl }/api/cow`
        axios.post(url, this.cow)
            .then(() => {
                this.resetFields()
            })
            .catch()
    }

    resetFields(): void {
        this.cow = {}
    }
}
