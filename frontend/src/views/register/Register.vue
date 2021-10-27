<template>
    <div class="register-view">

        <div class="container">
            <div class="conteudo">
                <form action="#">

                    <div class="image-box">
                        <router-link to="/">
                            <img src="@/assets/images/icon-vaca.png">
                        </router-link>
                    </div>

                    <Input 
                        :type="'text'"
                        :label="'Insira seu Nome'"
                        v-model="user.name"
                    />
                    <Input 
                        :type="'text'"
                        :label="'Insira seu CPF'"
                        v-model="user.cpf"
                    />
                    <Input 
                        :type="'email'"
                        :label="'Insira seu Email'"
                        v-model="user.email"
                    />
                    <Input 
                        :type="'number'"
                        :label="'Insira seu Telefone'"
                        v-model="user.phone_number"
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