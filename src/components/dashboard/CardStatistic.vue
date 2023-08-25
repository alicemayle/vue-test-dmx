<template>
  <b-card class="card-statistic text-start">
    <button :class="styleCard" disabled>
      <b-icon :icon="icon"></b-icon>
    </button>
    <b-card-text class="mt-2 mb-1">
      <p>{{ title }}</p>
      <p class="p-info-approved">
        <span>{{ percentage }}%</span>{{ remainder ? " con cita " : "" }}
        <span>{{ remainder ? ` | ${remainder}%` : "" }}</span>
        {{ remainder ? " sin cita " : "" }}
      </p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "CardStatistic",
  props: {
    icon: String,
    title: String,
    percentage: Number,
    styleCard: String,
    remainder: Number,
  },
};
</script>

<style scoped>
button {
  border: 0;
  border-radius: 5px;
}
span {
  font-weight: bold;
  font-size: 22px;
}
.card-statistic {
  border: 0;
  align-items: flex-start;
  min-width: 20%;
}
.card-approved {
  color: #63a532;
  background-color: #e6fbe8;
}
.card-dont-accept {
  color: blue;
  background-color: #e6f0fb;
}
.card-incompleted {
  color: orange;
  background-color: #fbf6e6;
}
.card-error {
  color: red;
  background-color: #fbe6e7;
}
.p-info-approved {
  font-size: 12px;
}
</style>
