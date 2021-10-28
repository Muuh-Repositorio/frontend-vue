import { Options, Vue } from "vue-class-component";

@Options({
    name: "Table",
    props: ['data', 'fields', 'title']
})
export default class Table extends Vue {}