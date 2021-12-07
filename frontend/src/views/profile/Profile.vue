<template>
    <div class="profile-view">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 font-weight-bold">Perfil - {NOME DA VACA}</h1>
        </div>

        <div class="row">
            <div class="col-md-6">
                <ProfileCard />
            </div>
            <div class="col-md-6">
                <div class="row">
                    <Card 
                        :title="'Peso Atual (Kg)'"
                        :value="0"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Data da Última Inseminação'"
                        :value="0"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Total de Partos'"
                        :value="0"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Data da Última Pesagem'"
                        :value="0"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Total de Inseminações'"
                        :value="0"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Data do Último Parto'"
                        :value="0"
                        :width="'6'"
                    />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <Table 
                   :title="'Partos'"
                   :data='[]'
                   :fields='childbirthFields'
                   :selectBox='false'
                   :genderFilter="false"
                />
            </div>
            <div class="col-md-6">
                <Table 
                   :title="'Inseminações'"
                   :data='[]'
                   :fields='inseminationFields'
                   :selectBox='false'
                   :genderFilter="false"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Profile.ts"></script>
<style lang="scss" scoped src="./Profile.scss"></style>