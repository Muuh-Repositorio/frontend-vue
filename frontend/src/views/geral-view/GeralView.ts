import { Options, Vue } from "vue-class-component";
import { Card, PageTitle, Table } from "../../components";

@Options({
    name: "GeralView",
    components: { Card, PageTitle, Table }
})
export default class GeralView extends Vue {
    fields = [ // Campos de exemplo - Trocar pelos campos da tabela do banco
        { value: 'id', text: "ID"},
        { value: 'nome', text: "Nome"},
        { value: 'peso', text: "Peso"},
        { value: 'nascimento', text: "Data de Nascimento"},
        { value: 'raca', text: "Raça"},
        { value: 'parto', text: "Último Parto"},
        { value: 'inseminacao', text: "Inseminação"},
        { value: 'diagnostico', text: "Diagnóstico"},
    ]

    dados = [ // Dados de exemplo
        { id: 1, nome: "Vaca", peso: 500, nascimento: "12/12/2012", raca: "Angus", parto: "12/12/2012", inseminacao: "12/12/2012", diagnostico: true },
        { id: 1, nome: "Vaca", peso: 500, nascimento: "12/12/2012", raca: "Angus", parto: "12/12/2012", inseminacao: "12/12/2012", diagnostico: true },
        { id: 1, nome: "Vaca", peso: 500, nascimento: "12/12/2012", raca: "Angus", parto: "12/12/2012", inseminacao: "12/12/2012", diagnostico: true },
        { id: 1, nome: "Vaca", peso: 500, nascimento: "12/12/2012", raca: "Angus", parto: "12/12/2012", inseminacao: "12/12/2012", diagnostico: true },
        { id: 1, nome: "Vaca", peso: 500, nascimento: "12/12/2012", raca: "Angus", parto: "12/12/2012", inseminacao: "12/12/2012", diagnostico: true },
    ]
}