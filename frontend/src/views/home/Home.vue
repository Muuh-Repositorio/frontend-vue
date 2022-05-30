<template>
    <div class="home-view">
        <section>
            <div class="container-menu">
                <header>
                    <div id="logo-menu">
                        <a href="#">
                            <img src="@/assets/images/logo-menu.png" 
                            alt="Muuh!"
                            width="150">
                        </a>
                    </div>
                    <input type="checkbox" id="check">
                    <label for="check"><i class="fas fa-bars"></i></label>
                    <div id="menu">
                        <a href=""><i class="fas fa-home"></i> Início </a>
                        <a href="#container2">Sobre</a>
                        <a href="">Dúvidas</a>  
                        <router-link to="/login" v-if="!user">Login</router-link>  
                        <router-link to="/dashboard/geral" v-else>Visão Geral</router-link>  
                    </div>
                </header>
                <div id="bem-vindo">
                    <h1>Seja bem-vindo! </h1>
                    <h2>Conheça o Muuh!!</h2>
                    <p>Um serviço de gerenciamento de gado com o intuito de otimizar os processos de controle dentro de uma propriedade.</p>
                    <div>
                        <a href="#container2" id="btn-saiba-mais">Saiba Mais!</a>
                    </div>
                </div>
                <div class="img-muuhpc"><img src="@/assets/images/muuhpc.png" alt="muuh"></div>
                <div id="boss-logo"><img src="@/assets/images/boss-logo.png" alt="Boss Logo" id="logo"></div>
            </div>
        </section>
        <main>
            <div class="container2" id="container2">
                <div class="wrapper-text">
                    <div id="title">
                        <h1 class="txt-sobre" > SOBRE </h1>
                        <span id="title-line"></span>
                    </div>
                    <div>
                        <p> A <strong> Muuh!!&copy; </strong> é para você que precisa gerenciar os dados dos seus rebanhos. Aqui você realiza o controle reprodutivo das vacas, como as datas de inseminação, nascimento, secagem, último parto e muito mais! </p>
                    </div>
                </div>
            </div> 
        </main>
    </div>
</template>

<script lang="ts" src='./Home.ts'></script>
<style lang="scss" scoped src='./Home.scss'></style>