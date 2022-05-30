<template>
    <div class="geral-view-view">
        <PageTitle 
            :title="'Visão Geral'"
        />
        <div class="row">
            <Card 
                :title="'Rebanho'"
                :value="totalCows"
                :width="'3'"
            />
            <Card 
                :title="'Vacas Inseminadas'"
                :value="inseminatedCows"
                :width="'3'"
            />
            <Card 
                :title="'Aptas para Inseminação'"
                :value="availableCows"
                :width="'3'"
            />
            <Card 
                :title="'Total de Partos'"
                :value="allChildbirth"
                :width="'3'"
            />
        </div>
        <Table 
            :title="'Visão Geral'"
            :data="dataFiltered"
            :fields="fields"
            :selectBox="false"
            :filterTitle="'Mostrar vacas'"
            :filterValues="filterValues"
            @filter="filterData"
            :genderFilter="true"
            @gender="filterGender"
        />
    </div>
</template>

<script lang="ts" src='./GeralView.ts'></script>

<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>
