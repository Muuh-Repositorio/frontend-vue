<template>
    <div class="diagnosis-register-view">
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
                    <SelectBox
                        :title="'Diagnóstico'"
                        :options="options"
                        v-model="cow.diagnosis"
                        :id="'diagnosis'"
                    />
                    <Button
                        :value="'Cadastrar Diagnóstico'"
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

<script lang="ts" src="./DiagnosisRegister.ts"></script>
<style lang="scss" scoped src="./DiagnosisRegister.scss"></style>