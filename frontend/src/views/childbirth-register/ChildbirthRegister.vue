<template>
    <div class="childbirth-register-view">
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
                        :label="'Data do parto'"
                        v-model="cow.childbirth_date"
                    />
                    <SelectBox
                        :title="'Sexo da novilha'"
                        :options="genders"
                        v-model="cow.heifer_gender"
                        :id="'gender-heifer'"
                    />
                    <Button
                        :value="'Cadastrar Parto'"
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

<script lang="ts" src="./ChildbirthRegister.ts"></script>
<style lang="scss" scoped src="./ChildbirthRegister.scss"></style>