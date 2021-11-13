<template>
    <div class="pagination">
        <div class="form-row align-items-center">
            <div class="col-auto my-1">
                <label>Página</label>
            </div>
            <div class="col-auto my-1">
                <select 
                    class="custom-select mr-sm-2" 
                    id="inlineFormCustomSelect"
                    v-model="pageSelected"
                    @change="selectPage()"
                >
                    <option :value="page" v-for="page in numberOfPages" :key="page">
                        {{ page }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { toRefs } from "@vue/runtime-dom";
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'TablePagination',
    props: [ 'numberOfPages' ]
})
export default class TablePagination extends Vue {
    props: any = toRefs(this.$props)
    pageSelected: number = 1

    selectPage() {
        this.$emit('update:modelValue', this.pageSelected)
    }

    mounted() {   
        this.$emit('update:modelValue', this.pageSelected)
    }
}
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }

    #inlineFormCustomSelect {
        width: 55px;
        height: 28px;
        padding-left: 5px;
    }

    @media screen and (max-width: 553px) {
        .pagination {
            padding-left: 0px;
        }
    }
</style>