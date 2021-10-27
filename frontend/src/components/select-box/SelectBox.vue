<template>
    <div class="select-box-component">
        <div class="selected">
            {{ title }}
        </div>
        <div class="select-box">
            <div class="options-container">
                <div class="option" v-for="option in options" :key="option">
                    <input type="radio" class="radio" :id="option.id" name="category">
                    <label :for="option.id" :value="modelValue">{{ option.value }}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./SelectBox.ts"></script>
<style lang="scss" scoped src='./SelectBox.scss'></style>