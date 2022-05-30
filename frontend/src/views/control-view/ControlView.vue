<template>
    <div class="control-view-view">
        <PageTitle 
            :title="'Controle de Gado'"
        />
        <div class="row">
            <Card
                :title="'Aptas para Inseminar'"
                :value="inseminations"
                :width="'3'"
            />
            <Card
                :title="'Aptas para Diagnosticar'"
                :value="diagnoses"
                :width="'3'"
            />
            <Card
                :title="'Aptas para Secar'"
                :value="dryings"
                :width="'3'"
            />
            <Card
                :title="'Aptas para Parir'"
                :value="childBirths"
                :width="'3'"
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