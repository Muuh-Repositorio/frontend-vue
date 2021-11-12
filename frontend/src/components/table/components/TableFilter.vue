<template>
    <div class="filter">
        <div class="select">
            <div class="form-row align-items-center">
                <div class="col-auto my-1">
                    <label>Mostrar</label>
                </div>
                <div class="col-auto my-1">
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option value="1">4</option>
                        <option value="1">8</option>
                        <option value="1">12</option>
                        <option value="1">16</option>
                    </select>
                </div>
                <div class="col-auto my-1">
                    <label>Itens</label>
                </div>
            </div>
        </div>
        
        <div class="search">
            <div class="form-row align-items-center">
                <div class="col-auto my-1">
                    <label>Procurar</label>
                </div>
                <div class="col-auto my-1">
                    <input type="text" class="form-control" id="search-input">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'TableFilter'
})
export default class TableFilter extends Vue {}
</script>


<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .filter {
        display: flex;
        justify-content: space-between;

        padding-bottom: 10px;
    }

    #search-input {
        height: 40px;
    }

    #inlineFormCustomSelect {
        width: 55px;
        padding-left: 5px;
    }
</style>
