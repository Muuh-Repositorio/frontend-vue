<template>
    <div class="insemination-register-view">
        <div class="container">
            <div class="conteudo">
                <form action="#">
                    <ImageBox
                        :image="'icon-vaca.png'"
                    />
                    <Input 
                        :type="'number'"
                        :label="'Número de Identificação da Vaca'"
                        v-model="cow.idt_cow"
                    />
                    <Input 
                        :type="'date'"
                        :label="'Data de Inseminação'"
                        v-model="cow.insemination_date"
                    />
                    <Button
                        :value="'Cadastrar Inseminação'"
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

<script lang="ts" src="./InseminationRegister.ts"></script>
<style lang="scss" scoped src="./InseminationRegister.scss"></style>