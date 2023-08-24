<template>
  <div class="about">
    <h1>Dashboard</h1>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Dashboard",
  setup() {
    const store = useStore();

    console.log(store.state.form);

    return { ...store.state };
  },
};
</script>

<style></style>
