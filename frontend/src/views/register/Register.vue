<template>
    <div class="register-view">

        <div class="container">
            <div class="conteudo">
                <form action="#">

                    <ImageBox
                        :image="'icon-vaca.png'"
                    />
                    <Input 
                        :type="'text'"
                        :label="'Insira seu Nome'"
                        v-model="user.name"
                    />
                    <Input 
                        :type="'text'"
                        :label="'Insira seu CPF'"
                        v-model="user.cpf"
                        :mask="'###.###.###-##'"
                    />
                    <Input 
                        :type="'email'"
                        :label="'Insira seu Email'"
                        v-model="user.email"
                    />
                    <Input 
                        :type="'text'"
                        :label="'Insira seu Telefone'"
                        v-model="user.phone"
                        :mask="'(##) # ####-####'"
                    />
                    <Input 
                        :type="'password'"
                        :label="'Insira sua Senha'"
                        v-model="user.password"
                    />
                    <Input 
                        :type="'password'"
                        :label="'Confirme sua Senha'"
                        v-model="user.confirmPassword"
                    />

                    <Button 
                        :value="'Registrar!'"
                        @click="register()"
                    />
                </form>
            </div>
        </div>

    </div>
</template>

<script lang="ts" src='./Register.ts'></script>
<style lang="scss" scoped src='./Register.scss'></style>