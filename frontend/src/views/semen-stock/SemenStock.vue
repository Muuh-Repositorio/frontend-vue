<template>
    <div class="semen-stock-view">
        <PageTitle 
            :title="'Estoque de Sêmen'"
        />
        <Table 
            :title="'Sêmens'"
            :data=semensAux
            :fields=fields
            :selectBox="false"
            :filterTitle="'Raça'"
            :filterValues="filterValues"
            @filter="selectSemens"
        />
    </div>
</template>


<script lang="ts" src="./SemenStock.ts"></script>

<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>