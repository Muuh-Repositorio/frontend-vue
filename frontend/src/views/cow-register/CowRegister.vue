<template>
    <div class="cow-register-view">
        <div class="container">
            <div class="conteudo">
                <form action="#">
                   <ImageBox
                        :image="'icon-vaca.png'"
                   />
                    <Input
                        :type="'number'"
                        :label="'Insira o número de identificação'"
                        v-model="cow.code"
                    />
                    <Input
                        :type="'number'"
                        :label="'Insira o Peso'"
                        v-model="cow.weight"
                    />
                    <Input
                        :type="'text'"
                        :label="'Insira o nome'"
                        v-model="cow.name"
                    />
                    <Input
                        :type="'date'"
                        :label="'Insira a Data de Nascimento'"
                        v-model="cow.birth_date"
                    />
                    <SelectBox
                        :title="'Qual a Raça da Vaca?'"
                        :options="options"
                        v-model="cow.idt_type"
                    />
                    <Button
                        :value="'Cadastrar Vaca'"
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

<script lang="ts" src="./CowRegister.ts"></script>
<style lang="scss" scoped src="./CowRegister.scss" ></style>