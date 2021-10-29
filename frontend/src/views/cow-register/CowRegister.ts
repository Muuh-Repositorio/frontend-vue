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
    cow: any = {
        idt_farm: store.getters.getFarm
    }
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
        // Temporario ----------
        this.cow.idt_type = 0
        this.cow.idt_farm = 13
        this.cow.idt_situation = 1
        // --------------------

        const url = `${ baseApiUrl }/cow`
        axios.post(url, this.cow)
            .then(() => {
                success()
                this.resetFields()
            })
            .catch(showError)
    }

    resetFields(): void {
        this.cow = {}
    }
}
