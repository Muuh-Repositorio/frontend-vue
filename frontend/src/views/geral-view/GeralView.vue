<template>
    <div class="geral-view-view">
        <PageTitle 
            :title="'Visão Geral'"
        />
        <div class="row">
            <Card 
                :title="'Rebanho'"
                :value="totalCows"
            />
            <Card 
                :title="'Vacas Inseminadas'"
                :value="inseminatedCows"
            />
            <Card 
                :title="'Aptas para Secagem'"
                :value="availableCows"
            />
            <Card 
                :title="'Total de Partos'"
                :value="allChildbirth"
            />
        </div>
        <Table 
            :title="'Visão Geral'"
            :data="cows"
            :fields="fields"
            :selectBox="false"
            :filterTitle="'Mostrar vacas'"
            :filterValues="filterValues"
            @filter="filterData"
        />
    </div>
</template>

<script lang="ts" src='./GeralView.ts'></script>

<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>
