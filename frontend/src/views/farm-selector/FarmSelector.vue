<template>
    <div class="farm-selector-view">
        <div class="title">
            <h1>Selecione a Fazenda Desejada</h1>
        </div>

        <div class="container">
            <div v-for="farm in farms" :key="farm">
                <FarmCard
                    :name="farm.name"
                    :id="farm.idt_farm"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./FarmSelector.ts"></script>
<style lang="scss" scoped src="./FarmSelector.scss"></style>