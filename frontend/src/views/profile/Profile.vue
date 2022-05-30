<template>
    <div class="profile-view">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 font-weight-bold">Perfil - {{ data_.name }}</h1>
        </div>

        <div class="row">
            <div class="col-md-6">
                <ProfileCard 
                    :cow='data_'
                />
            </div>
            <div class="col-md-6">
                <div class="row">
                    <Card 
                        :title="'Peso Atual (Kg)'"
                        :value="data_.weight"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Data da Última Inseminação'"
                        :value="data_.last_insemination"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Total de Partos'"
                        :value="data_.total_childbirths"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Data da Última Pesagem'"
                        :value="data_.last_weight"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Total de Inseminações'"
                        :value="data_.total_inseminations"
                        :width="'6'"
                    />
                    <Card 
                        :title="'Data do Último Parto'"
                        :value="data_.last_childbirth"
                        :width="'6'"
                    />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <Table 
                   :title="'Partos'"
                   :data='childbirths'
                   :fields='childbirthFields'
                   :selectBox='false'
                   :genderFilter="false"
                />
            </div>
            <div class="col-md-6">
                <Table 
                   :title="'Inseminações'"
                   :data='inseminations'
                   :fields='inseminationFields'
                   :selectBox='false'
                   :genderFilter="false"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Profile.ts"></script>
<style lang="scss" scoped >
    h1 {
        color: #858796;
    }
</style>