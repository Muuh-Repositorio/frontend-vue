<template>
    <div class="semen-register-view">
        <div class="container">
            <div class="conteudo">
                <form action="#">
                    <ImageBox
                        :image="'icon-vaca.png'"
                    />
                    <SelectBox
                        :title="'Raça'"
                        :options="options"
                        v-model="semen.idt_type"
                        :id="'cow-types'"
                    />
                    <Button
                        :value="'Cadastrar Sêmen'"
                        @click="register()"
                    />
                    <div class="link2">
                        <router-link to="/dashboard/geral">Voltar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script lang="ts" src="./SemenRegister.ts"></script>
<style lang="scss" scoped src="./SemenRegister.scss"></style>