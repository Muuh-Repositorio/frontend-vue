import { farmKey } from "@/global";
import store from "@/store";
import { Options, Vue } from "vue-class-component";

@Options({
    name: "FarmCard",
    props: ['name', "id"]
})
export default class FarmCard extends Vue {
    selectFarm(idt_farm: any) {
        store.dispatch('setFarm', idt_farm)
        localStorage.setItem(farmKey, idt_farm)
        this.$router.push('/dashboard/geral')
    }
}