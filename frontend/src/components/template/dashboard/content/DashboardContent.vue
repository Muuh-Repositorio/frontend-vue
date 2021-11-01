<template>
    <div class="content-dashboard-template">
        <div class="container-fluid">
            <router-view name="dashboardContent"></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    name: "DashboardContent"
})
export default class DashboardContent extends Vue {}
</script>

<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.css'></style>
<style scoped src='@/views/dashboard/assets/css/muuh-dashboard.min.css'></style>
<style scoped src='@/views/dashboard/assets/datatables/dataTables.bootstrap4.min.css'></style>