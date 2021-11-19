<template>
    <div class="select-box-component">
        <div class="selected" @click="selectOption(id)" :id="id">
            {{ title }}
        </div>
        <div class="select-box">
            <div class="options-container" :id="id">
                <div class="option" :id="id" v-for="option in options" :key="option">
                    <input type="radio" class="radio" :value="option.id">
                    <label>{{ option.value }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./SelectBox.ts"></script>
<style lang="scss" scoped src='./SelectBox.scss'></style>