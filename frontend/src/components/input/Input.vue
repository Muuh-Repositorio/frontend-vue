<template>
    <div class="input-component">
       <input :type="`${type}`" :value="modelValue" v-maska="mask" @input="onInput" min="0" required>
       <label>{{ label }}</label> 
    </div>
</template>

<script lang="ts" src='./Input.ts'></script>
<style lang="scss" scoped src='./Input.scss'></style>

<style>
    
</style>