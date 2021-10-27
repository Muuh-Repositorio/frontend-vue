<template>
    <div class="login-view">
        <div class="container">
            <div class="conteudo">

                <div class="image-box">
                    <a href="/Home/index.html">
                        <img src="@/assets/images/muuh.png" alt="">
                    </a>
                </div>

                <form action="#">
                    <div class="titulo">Faça Login</div>
                    <Input 
                        :type="'text'"
                        :label="'Insira seu CPF'"
                        v-model="user.cpf"
                    />
                    <Input 
                        :type="'password'"
                        :label="'Insira sua Senha'"
                        v-model="user.password"
                    />
                    <div class="link">
                        <a href="">Esqueceu a Senha?</a>
                    </div>
                    
                    <Button 
                        :value="'Login!'"
                        @click="login()"
                    />

                    <div class="link2">
                        <a href="../Registro/registro.html">Registre-se</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src='./Login.ts'></script>
<style lang="scss" scoped src='./Login.scss'></style>