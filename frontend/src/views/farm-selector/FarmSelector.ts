import { baseApiUrl, showError } from "@/global";
import store from "@/store";
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import { FarmCard } from '../../components'

@Options({
    name: "FarmSelector",
    components: { FarmCard }
})
export default class FarmSelector extends Vue {
    farms: any[] = []

    loadFarms() {
        const idt_user = store.getters.getUser.idt_user
        const url = `${ baseApiUrl }/farm/user/${ idt_user }`
        axios.get(url)
            .then((response) => {
                this.farms = response.data
            })
            .catch(showError)
    }

    mounted() {
        this.loadFarms()
    }
}