<template>
    <div class="table-filter">
        <div class="form-row align-items-center">
            <div class="col-auto my-1">
                <label>{{ title }}</label>
            </div>
            <div class="col-auto my-1">
                <select 
                    class="custom-select mr-sm-2" 
                    id="inlineFormCustomSelect"
                    v-model="valueSelected"
                    @change="selectValue()"
                >
                    <option :value="value.value" v-for="value in values" :key="value">
                        {{ value.text }}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "TableFilter",
    props: ['title', 'values']
})
export default class TableFilter extends Vue {
    valueSelected = null
    
    selectValue() {
        this.$emit('update:modelValue', this.valueSelected)
    }

    mounted() {
        this.$emit('update:modelValue', this.valueSelected)
    }
}
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }

    #inlineFormCustomSelect {
        width: 130px;
        height: 28px;
        padding-left: 5px;
    }

    @media screen and (max-width: 553px) {
        .select {
            width: 500px;
        }
    }
</style>