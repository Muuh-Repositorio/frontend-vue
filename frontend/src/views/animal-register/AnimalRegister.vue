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
                        v-model="animal.code"
                        />
                        <Input
                            :type="'text'"
                            :label="'Insira o nome'"
                            v-model="animal.name"
                        />
                        <Input
                            :type="'date'"
                            :label="'Insira a data de nascimento'"
                            v-model="animal.birth_date"
                        />
                        <Input
                            :type="'number'"
                            :label="'Insira o peso'"
                            v-model="animal.weight"
                        />
                        <SelectBox
                            :title="'Sexo'"
                            :options="genders"
                            v-model="animal.gender"
                            :id="'gender-animal'"
                        />
                        <SelectBox
                            :title="'Raça'"
                            :options="options"
                            v-model="animal.idt_type"
                            :id="'type-cow'"
                        />
                        <Button
                            :value="'Cadastrar'"
                            @click="continue_()"
                            v-show="animal.idt_situation === undefined"
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
                            v-model="childbirth_data.childbirth_date"
                            v-show="alreadyGaveBirth === 'true'"
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
                            v-model="insemination_data.insemination_date"
                            v-show="alreadyInseminated === 'true'"
                        />
                   </div>
                   <Button
                        :value="'Cadastrar'"
                        @click="register()"
                        v-show="showMoreInfo || animal.idt_situation !== undefined"
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

<script lang="ts" src="./AnimalRegister.ts"></script>
<style lang="scss" scoped src="./AnimalRegister.scss" ></style>