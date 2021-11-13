<template>
    <div class="select">
        <div class="form-row align-items-center">
            <div class="col-auto my-1">
                <label>Mostrar</label>
            </div>
            <div class="col-auto my-1">
                <select 
                    class="custom-select mr-sm-2" 
                    id="inlineFormCustomSelect" 
                    v-model="perPage"
                    @change="selectNumberOfItens(perPage)"
                >
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="12">12</option>
                    <option value="16">16</option>
                </select>
            </div>
            <div class="col-auto my-1">
                <label>Itens</label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "TableSelect"
})
export default class TableSelect extends Vue {
    perPage: any = 4

    selectNumberOfItens(perPage: any) {
        this.perPage = perPage
        this.$emit('update:modelValue', this.perPage)
    }

    mounted() {
        this.$emit('update:modelValue', this.perPage)
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
        .select {
            width: 500px;
        }
    }
</style>