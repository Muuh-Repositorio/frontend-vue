<template>
    <div class="input-component">
       <input :type="`${type}`" :value="modelValue" @input="onInput" required>
       <label>{{ label }}</label> 
    </div>
</template>

<script lang="ts" src='./Input.ts'></script>
<style lang="scss" scoped src='./Input.scss'></style>