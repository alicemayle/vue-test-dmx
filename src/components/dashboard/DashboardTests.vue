<template>
  <div class="box">
    <div class="card card-tests">
      <h3>Mis Evaluaciones</h3>
      <DashboardSearch />
      <DashboardTable />
      <ModalDetailsTest />
    </div>
  </div>
</template>

<script>
import DashboardSearch from "@/components/dashboard/DashboardSearch";
import DashboardTable from "@/components/dashboard/DashboardTable";
import ModalDetailsTest from "@/components/dashboard/ModalDetailsTest";

export default {
  name: "DashboardTests",
  components: {
    DashboardSearch,
    DashboardTable,
    ModalDetailsTest,
  },
};
</script>

<style scoped>
.box {
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
}
.card-tests {
  border: 0;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  padding: 30px;
}
</style>
