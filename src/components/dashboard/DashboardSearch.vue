<template>
  <div class="w-25 mw-50">
    <b-input-group size="sm" class="mt-3 mb-4">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <input
        type="search"
        placeholder="Buscar"
        id="filter-input"
        class="form-control"
        @input="changeValue"
      />
    </b-input-group>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "DashboardSearch",

  setup() {
    const store = useStore();

    const changeValue = ({ target }) => {
      store.dispatch("setState", {
        mut: "setFilter",
        value: target.value,
      });
    };

    return {
      changeValue,
    };
  },
};
</script>

<style></style>
