<template>
  <div class="header">
    <div class="box-title">
      <h2>Dashboard</h2>
      <p>
        Buenos días, <span class="user">{{ user.name }}</span>
      </p>
    </div>
    <b-card class="box-select-date-range">
      <b-button
        size="sm"
        variant="outline-success"
        value="all"
        @click="changeValue"
        :class="active === 'all' ? 'button-selected' : 'button'"
        >Todo</b-button
      >
      <b-button
        size="sm"
        variant="outline-success"
        value="today"
        @click="changeValue"
        :class="active === 'today' ? 'button-selected' : 'button'"
        >Hoy</b-button
      >
      <b-button
        size="sm"
        variant="outline-success"
        value="month"
        @click="changeValue"
        :class="active === 'month' ? 'button-selected' : 'button'"
        >Mes</b-button
      >
      <b-button
        size="sm"
        variant="outline-success"
        value="year"
        @click="changeValue"
        :class="active === 'year' ? 'button-selected' : 'button'"
        >Año</b-button
      >
      <b-button size="sm" variant="outline"
        ><b-icon icon="three-dots-vertical"></b-icon
      ></b-button>
    </b-card>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "DashboardHeader",

  setup() {
    const store = useStore();
    const active = computed(() => store.state.tabActive);

    const changeValue = ({ target }) => {
      store.dispatch("setState", {
        mut: "setTab",
        value: target.value,
      });
    };

    return {
      user: store.state.user,
      active,
      changeValue,
    };
  },
};
</script>

<style scoped>
.user {
  color: #63a532;
  font-weight: bold;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 30px;
}
.box-select-date-range {
  padding: 0;
  border: 0;
}
button {
  color: black;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  border-radius: 0;
}
button:hover {
  background-color: white;
  color: black;
  transition: 0.7s;
  font-weight: bold;
}
.button-selected {
  font-weight: bold;
  box-shadow: 0 2.5px 0 0 #63a532;
}
h2 {
  font-weight: bold;
}
</style>
