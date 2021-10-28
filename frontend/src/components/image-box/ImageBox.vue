<template>
    <div class="image-box-component">
         <div class="image-box">
            <router-link to="/">
                <img :src="require(`../../assets/images/${image}`)" alt="">
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "ImageBox",
    props: ['image']
})
export default class ImageBox extends Vue {}
</script>

<style lang="scss" scoped src="./ImageBox.scss"></style>
