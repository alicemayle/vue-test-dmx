<template>
  <div class="box-statistics">
    <CardStatistic
      key="approved"
      icon="person-check"
      title="Evaluación aprobada"
      :percentage="statistics.approved"
      :remainder="
        100 -
        (statistics.approved +
          statistics.dontAccept +
          statistics.incompleted +
          statistics.error)
      "
      styleCard="card-approved"
    />
    <CardStatistic
      key="dont-accept"
      icon="x-circle"
      title="No acepta oferta"
      :percentage="statistics.dontAccept"
      styleCard="card-dont-accept"
    />
    <CardStatistic
      key="incompleted"
      icon="file-earmark"
      title="Evaluación incompleta"
      :percentage="statistics.incompleted"
      styleCard="card-incompleted"
    />
    <CardStatistic
      key="error"
      icon="person-x"
      title="No cumple con el perfil"
      :percentage="statistics.error"
      styleCard="card-error"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import CardStatistic from "@/components/dashboard/CardStatistic";

export default {
  name: "DashboardStatistics",
  components: {
    CardStatistic,
  },

  setup() {
    const store = useStore();

    return {
      statistics: store.state.user.statistics,
    };
  },
};
</script>

<style scoped>
.box-statistics {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
}
</style>
