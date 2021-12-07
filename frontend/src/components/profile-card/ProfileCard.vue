<template>
    <div class="profile-card-component">
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row col-md-9">
                    <h5 class="m-0 font-weight-bold text-muuh">INFORMAÇÕES</h5>
                </div>
                <div class="buttons">
                    <button type="submit" class="btn-profile">Editar</button>
                </div>
            </div>

            <div class="card-body">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Nome'"
                                :disabled="true"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Código'"
                                :disabled="true"
                            />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Peso'"
                                :disabled="true"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Data de Nascimento'"
                                :disabled="true"
                            />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Raça'"
                                :disabled="true"
                            />
                        </div>
                        <div class="form-group col-md-6">
                            <ProfileInput
                                :label="'Sexo'"
                                :disabled="true"
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