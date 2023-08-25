<template>
  <div class="dashboard">
    <Navbar />
    <DashboardHeader />
    <DashboardStatistics />
    <DashboardTests />
  </div>
</template>

<script>
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Navbar from "@/components/dashboard/Navbar";
import DashboardStatistics from "@/components/dashboard/DashboardStatistics";
import DashboardTests from "@/components/dashboard/DashboardTests";

export default {
  name: "DashboardView",
  components: {
    Navbar,
    DashboardHeader,
    DashboardStatistics,
    DashboardTests,
  },
};
</script>

<style>
.dashboard {
  background-color: #ecf5f9;
}
</style>
