<template>
    <div class="table-component card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-muuh">{{ title }}</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">

                <div class="filters">
                    <TableSelect
                        v-model="numberOfItens"
                        @change="selectNumberOfItens(numberOfItens)"
                    />

                    <TablePagination
                        v-model="pageSelected"
                        :numberOfPages="numberOfPages"
                        @change="selectPage()"
                    />
                </div>

                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th scope="col" v-for="field in fields" :key="field">
                                {{ field.text }}
                            </th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr v-for="item in dataFiltered" :key="item">
                            <td scope="row" v-for="field in fields" :key="field">
                                {{ item[field.value] }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Table.ts"></script>

<style lang="scss" scoped src="./Table.scss"></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>