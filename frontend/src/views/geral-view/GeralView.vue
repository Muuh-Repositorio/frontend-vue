<template>
    <div class="geral-view-view">
        <PageTitle 
            :title="'Visão Geral'"
        />
        <div class="row">
            <Card 
                :title="'Total de Vacas'"
                :value="0"
            />
            <Card 
                :title="'Vacas Inseminadas'"
                :value="0"
            />
            <Card 
                :title="'Vacas Disponíveis'"
                :value="0"
            />
            <Card 
                :title="'Total de Partos'"
                :value="0"
            />
        </div>
        <Table 
            :title="'Visão Geral'"
            :data="dados"
            :fields="fields"
        />
    </div>
</template>

<script lang="ts" src='./GeralView.ts'></script>

<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>
