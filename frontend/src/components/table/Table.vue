<template>
    <div class="table-component card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-muuh">{{ title }}</h6>
            <button 
                class="btn-disabled" 
                id="btn-actions" 
                type="submit"
                @click="selectAction()"
                v-show="selectBox && filterSelected"
            > 
                {{ buttonText }}
            </button>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <div class="gender-filter">
                    <TableFilter
                        :title="'Sexo'"
                        :values="genders"
                        v-model="gender"
                        @change="selectGender()"
                    />
                </div>
                <div class="filters">
                    <TableSelect
                        v-model="numberOfItens"
                        @change="selectNumberOfItens(numberOfItens)"
                    />

                    <TableFilter
                        :title="filterTitle"
                        :values="filterValues"
                        v-model="filterSelected"
                        @change="selectFilter()"
                        v-show="gender === 'F'"
                    />
                </div>

                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th scope="col" v-for="field in fields" :key="field">
                                {{ field.text }}  
                            </th>
                            <th v-show="selectBox">Selecionar</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr v-for="item in dataFiltered" :key="item">
                            <td scope="row" v-for="field in fields" :key="field">
                                {{ item[field.value] }}
                            </td>
                            <td v-show="selectBox">
                                <input type="checkbox" class="check-dgn" title="Apta" @click="selectItem(item)">
                            </td>
                        </tr>
                    </tbody>
                </table>

                <TablePagination
                    v-model="pageSelected"
                    :numberOfPages="numberOfPages"
                    @change="selectPage()"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Table.ts"></script>

<style lang="scss" scoped src="./Table.scss"></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>