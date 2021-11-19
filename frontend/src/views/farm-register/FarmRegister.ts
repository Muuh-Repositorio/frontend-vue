import { success } from "@/config/toasted";
import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { Button, Input, SelectBox, ImageBox } from '../../components'

@Options({
    name: "FarmRegister",
    components: { Button, Input, SelectBox, ImageBox }
})
export default class FarmRegister extends Vue {
    farm: any = {
        idt_user: store.getters.getUser.idt_user
    }
    options: any = [ // Conteudo Temporario
        { id: 'Leite', value: 'Gado de Leite'},
        { id: 'Corte', value: 'Gado de Corte'},
        { id: 'Suinos', value: 'Suinos'},
    ]

    register(): void {
        // delete this.farm.type // Temporario
        
        const url = `${ baseApiUrl }/farm`
        axios.post(url, this.farm)
            .then(() => {
                success()
                this.$router.push({ path: "/farms" })
                this.resetFields()
            })
            .catch(showError)
    }

    resetFields(): void {
        this.farm = {}
    }
}