<template>
    <div class="farm-register-view">
        <div class="container">
            <div class="conteudo">
                <form action="#">
                   
                    <div class="image-box">
                        <router-link to="/">
                            <img src="@/assets/images/icon-vaca.png" alt="">
                        </router-link>
                    </div>

                    <Input
                        :type="'text'"
                        :label="'Insira o SEI da propriedade'"
                        v-model="farm.sei"
                    />
                    <Input
                        :type="'text'"
                        :label="'Insira o nome da propriedade'"
                        v-model="farm.name"
                    />
                    <SelectBox
                        :title="'Qual o tipo de Gado'"
                        :options='options'
                        v-model="farm.type"
                    />
                    <Button
                        :value="'Cadastrar Fazenda'"
                        @click="register()"
                    />

                    <div class="link2">
                        <router-link to="/">Voltar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src='./FarmRegister.ts'></script>
<style lang="scss" scoped src='./FarmRegister.scss'></style>