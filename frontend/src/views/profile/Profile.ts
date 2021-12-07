import { Options, Vue } from "vue-class-component";
import { Table, ProfileCard, Card } from '../../components'

@Options({
    name: "Profile",
    components: { Table, ProfileCard, Card }
})
export default class Profile extends Vue {
    childbirthFields = [
        { value: 'childbirth_date', text: "Data do Parto"},
        { value: 'insemination_type', text: "Tipo de Inseminação"},
        { value: 'heifer_gender', text: "Sexo"},
    ]

    inseminationFields = [
        { value: 'insemination_date', text: "Data de Inseminação"},
        { value: 'diagnosis', text: "Diagnóstico"},
    ]
}