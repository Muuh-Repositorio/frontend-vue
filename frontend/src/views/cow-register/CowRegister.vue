<template>
    <div class="cow-register-view">
        <div class="container">
            <div class="conteudo">
                <form action="#">
                   <ImageBox
                        :image="'icon-vaca.png'"
                   />
                   <div class="initial-info" v-show="showInitialInfo">
                       <Input
                        :type="'number'"
                        :label="'Insira o número de identificação'"
                        v-model="cow.code"
                        />
                        <Input
                            :type="'text'"
                            :label="'Insira o nome'"
                            v-model="cow.name"
                        />
                        <Input
                            :type="'date'"
                            :label="'Insira a data de nascimento'"
                            v-model="cow.birth_date"
                        />
                        <Input
                            :type="'number'"
                            :label="'Insira o peso'"
                            v-model="cow.weight"
                        />
                        <SelectBox
                            :title="'Qual a raça da vaca?'"
                            :options="options"
                            v-model="cow.idt_type"
                            :id="'type-cow'"
                        />
                        <Button
                            :value="'Cadastrar Vaca'"
                            @click="continue_()"
                            v-show="cow.idt_situation === undefined"
                        />
                   </div>
                   <div class="more-info" v-show="showMoreInfo">
                        <SelectBox
                            :title="'Já reproduziu antes?'"
                            :options="trueOrFalse"
                            v-model="alreadyGaveBirth"
                            :id="'lastBirth'"
                        />
                        <Input
                            :type="'date'"
                            :label="'Insira a data do último parto'"
                            v-model="cow.lastBirth"
                            v-show="alreadyGaveBirth === 'Sim'"
                        />
                        <SelectBox
                            :title="'Já está inseminada?'"
                            :options="trueOrFalse"
                            :id="'alreadyInseminated'"
                            v-model="alreadyInseminated"
                        />
                        <Input
                            :type="'date'"
                            :label="'Insira a data de inseminação'"
                            v-model="cow.lastBirth"
                            v-show="alreadyInseminated === 'Sim'"
                        />
                   </div>
                   <Button
                        :value="'Cadastrar Vaca'"
                        @click="register()"
                        v-show="showMoreInfo || cow.idt_situation !== undefined"
                    />
                    <Button
                        :value="'Editar Informações'"
                        @click="return_()"
                        v-show="showMoreInfo"
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