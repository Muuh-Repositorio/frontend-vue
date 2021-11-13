import { computed, toRefs, watch } from "@vue/runtime-dom";
import { Options, Vue } from "vue-class-component";
import { TablePagination, TableSelect } from './components'

@Options({
    name: "Table",
    props: ['data', 'fields', 'title'],
    components: { TablePagination, TableSelect }
})
export default class Table extends Vue {
    props: any = toRefs(this.$props)

    dataFiltered: any = []
    numberOfItens: any = 0

    pageSelected: number = 1
    dataInPage: any = []

    dataFilter = (start: number, end: number) => computed(() => {
        return this.props.data.slice(start, end)
    })

    numberOfPages: any = computed(() => {
        const numberOfPages = Math.ceil(this.getData.length / this.numberOfItens)
        return !numberOfPages ? 1 : numberOfPages
    })

    getData: any = computed(() => {
        return this.props.data
    })

    getDataFiltered: any = computed(() => {
        return this.dataFiltered
    })

    selectNumberOfItens(numberOfItens: any) {
        this.numberOfItens = numberOfItens
        this.setData(0, this.numberOfItens)
    }

    setData(start: number, end: number) {
        this.dataFiltered = this.dataFilter(start, end)
        this.dataInPage = this.getDataFiltered
    }

    selectPage() {
        const end = this.numberOfItens * this.pageSelected
        const start = end - this.numberOfItens

        this.setData(start, end)
    }

    mounted() {
        this.setData(0, this.numberOfItens)
    }
}