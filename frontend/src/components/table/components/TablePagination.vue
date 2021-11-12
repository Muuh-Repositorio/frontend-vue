<template>
    <div class="pagination">
        <nav>
            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link" tabindex="-1">Anterior</a>
                </li>
                    <li class="page-item"><a class="page-link">1</a></li>
                <li class="page-item">
                    <a class="page-link" >Próxima</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'TablePagination'
})
export default class TablePagination extends Vue {}
</script>

<style lang="scss" scoped>
    .pagination {
        justify-content: flex-end;
    }
</style>