<template>
    <div class="content-template">
        <router-view name="mainContent"></router-view>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "Content"
})
export default class Content extends Vue {}
</script>