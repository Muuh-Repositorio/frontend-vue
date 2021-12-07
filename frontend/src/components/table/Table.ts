import store from "@/store";
import { computed, toRefs } from "@vue/runtime-dom";
import { Options, Vue } from "vue-class-component";
import { TablePagination, TableSelect, TableFilter } from './components'

@Options({
    name: "Table",
    props: ['data', 'fields', 'title', 'selectBox', 'filterTitle', 'filterValues'],
    components: { TablePagination, TableSelect, TableFilter }
})
export default class Table extends Vue {
    props: any = toRefs(this.$props)

    filterSelected: any = null

    dataFiltered: any = []
    numberOfItens: any = 0

    pageSelected: number = 1
    dataInPage: any = []

    itemsSelected: any = []
    buttonText = ''

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

    selectItem(item: any) {
        const button = document.getElementById('btn-actions')
        
        if (this.itemsSelected.length === 1 && item.selected) {
            button?.classList.remove('btn-enabled')
            button?.classList.add('btn-disabled')
        }

        if (item.selected !== undefined) {
            this.itemsSelected.splice(item.index, 1)
            delete item.selected
            delete item.index

        } else {
            item.index = this.itemsSelected.length
            item.selected = true
            this.itemsSelected.push(item)
            
            button?.classList.add('btn-enabled')
            button?.classList.remove('btn-disabled')
        }
    }

    selectFilter() {
        this.itemsSelected = []
        this.$emit('filter', this.filterSelected)

        if (this.props.selectBox) {
            for (const value of this.props.filterValues) {
                if (value.value === this.filterSelected) {
                    this.buttonText = value.text
                }
            }
        }
    }

    selectAction() {
        this.$emit('action', { action: this.filterSelected, items: this.itemsSelected })
    }

    mounted() {
        this.setData(0, this.numberOfItens)
    }
}