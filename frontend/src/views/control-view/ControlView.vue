<template>
    <div class="control-view-view">
        <PageTitle 
            :title="'Controle de Gado'"
        />
        <div class="row">
            <Card
                :title="'Aptas para Inseminar'"
                :value="inseminations"
            />
            <Card
                :title="'Aptas para Diagnosticar'"
                :value="diagnoses"
            />
            <Card
                :title="'Aptas para Secar'"
                :value="dryings"
            />
            <Card
                :title="'Aptas para Parir'"
                :value="childBirths"
            />
        </div>
        <Table
            :title="'Vacas'"
            :data="cows"
            :fields="fields"
            :selectBox="true" 
            :filterTitle="'Vacas aptas para'"
            :filterValues="filterValues"
            @filter="selectCows"
            @action="selectAction"
        />
    </div>
</template>

<script lang="ts" src="./ControlView.ts"></script>

<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>