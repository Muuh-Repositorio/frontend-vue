<template>
    <div class="path-not-found-view">
        <img src="@/assets/images/404.gif">
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "PathNotFound"
})
export default class PathNotFound extends Vue {}
</script>

<style lang="scss" scoped>
    .path-not-found-view {
        text-align: center;
    }
</style>