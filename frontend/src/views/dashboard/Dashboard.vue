<template>
    <div class="dashboard-view">
        <div class="page-top">
            <div id="wrapper">
                <DashboardSidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <DashboardHeader />
                        <DashboardContent />
                    </div>
                    <DashboardFooter />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src='./Dashboard.ts'></script>

<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>
<style scoped src='@/views/dashboard/assets/fontawesome-free/css/all.min.css'></style>

<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");

    * {
        font-family: Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    }
</style>