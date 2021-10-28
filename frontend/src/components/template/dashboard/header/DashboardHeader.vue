<template>
    <div class="header-dashboard-template">
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <!-- Caixa de pesquisa -->
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Procurar..."
                        aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-muuh" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            <!-- Inicio da Topbar -->

            <ul class="navbar-nav ml-auto">

                <div class="topbar-divider d-none d-sm-block"></div>

                <li class="nav-item dropdown no-arrow">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small" id="user_name">User</span>
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
                        <a class="dropdown-item" href="../Vaca/vaca.html">
                            <i class="fas fa-plus fa-sm fa-fw mr-2 text-gray-400"></i>
                            Cadastrar Vaca
                        </a>
                        <a class="dropdown-item" href="../Fazenda/fazenda.html">
                            <i class="fas fa-plus fa-sm fa-fw mr-2 text-gray-400"></i>
                            Cadastrar Fazenda
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" onclick="logout()">
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
<style scoped src='@/views/dashboard/assets/fontawesome-free/css/all.min.css'></style>