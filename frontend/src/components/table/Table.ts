import { Options, Vue } from "vue-class-component";
import { TableFilter, TablePagination } from './components'

@Options({
    name: "Table",
    props: ['data', 'fields', 'title'],
    components: { TableFilter, TablePagination }
})
export default class Table extends Vue {}