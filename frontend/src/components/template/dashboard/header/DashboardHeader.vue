<template>
    <div class="header-dashboard-template">
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <!-- Caixa de pesquisa -->
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Procurar..."
                        aria-label="Search" aria-describedby="basic-addon2" v-model="cowParam">
                    <div class="input-group-append">
                        <button class="btn btn-muuh" type="button">
                            <i class="fas fa-search fa-sm" @click="searchCow()"></i>
                        </button>
                    </div>
                </div>
            </form>

            <!-- Inicio da Topbar -->

            <ul class="navbar-nav ml-auto">

                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item dropdown no-arrow" @click="showMenu()">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small" id="user_name">{{ user.name }}</span>
                        <img class="img-profile rounded-circle"
                            src="@/assets/images/profile.svg">
                    </a>
                    <!-- Dropdown - Informação do usuário -->
                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Perfil
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Configurações
                        </a>
                        <router-link to="/farms" class="dropdown-item" href="#">
                            <i class="fas fa-sync fa-sm fa-fw mr-2 text-gray-400"></i>
                            Trocar Fazenda
                        </router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" @click="logout()">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Sair
                        </a>
                    </div>
                </li>

            </ul>
        </nav>
    </div>
</template>

<script lang="ts" src='./DashboardHeader.ts'></script>


<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>