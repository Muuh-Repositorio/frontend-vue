<template>
    <div class="profile-card-component">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row col-md-9">
                    <h5 class="m-0 font-weight-bold text-muuh">INFORMAÇÕES</h5>
                </div>
                <div class="buttons">
                    <button type="submit" class="btn-profile" @click="edit_()">{{ buttonText }}</button>
                </div>
            </div>

            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Nome'"
                                :disabled="true"
                                :value="cow.name"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Código'"
                                :disabled="true"
                                :value="cow.code"
                            />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Peso'"
                                :disabled="!edit"
                                :value="cow.weight"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Data de Nascimento'"
                                :disabled="true"
                                :value="cow.birth_date"
                            />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Raça'"
                                :disabled="true"
                                :value="cow.type"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Situação'"
                                :disabled="!edit"
                                :value="cow.situation"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ProfileCard.ts"></script>
<style lang="scss" scoped src="./ProfileCard.scss"></style>