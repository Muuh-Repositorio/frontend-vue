<template>
    <div class="farm-card-component">
        <div class="card">
            <div class="conteudo">
                <img src="@/assets/images/icon-vaca.png" class="vaca">
                <h3>{{ name }}</h3>
                <p>Esta é a {{ name }}, especializada em ...</p>
                <router-link to="#" @click="selectFarm(id)"> Entrar </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./FarmCard.ts"></script>
<style lang="scss" scoped src="./FarmCard.scss"></style>