<template>
    <div class="sidebar-dashboard-template">
        <ul class="navbar-nav bg-gradient-muuh sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="../Home/index.html">
                <div class="sidebar-brand-icon">
                    <img src="@/assets/images/icon-vaca.png" alt="">
                </div>
                <div class="sidebar-brand-text mx-3" id="sidebar-logo-menu">
                    <img src="@/assets/images/logo-menu.png" alt="">
                </div>
            </a>

            <hr class="sidebar-divider">

            <div class="sidebar-heading">
                NAVEGAÇÃO
            </div>

            <div class="nav-container"></div>

            <hr class="sidebar-divider d-none d-md-block">

            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle" @click="toggleMenu()"></button>
            </div>

        </ul>
    </div>
</template>

<script lang="ts" src='./DashboardSidebar.ts'></script>

<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>
<style scoped src='@/views/dashboard/assets/fontawesome-free/css/all.min.css'></style>