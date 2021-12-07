<template>
    <div class="input-profile-component">
        <label for="inputNome">{{ label }}</label>
        <input type="text" class="form-control" id="inputNome" v-model="value" :disabled="disabled">
    </div>
</template>

<script lang="ts" src="./ProfileInput.ts"></script>