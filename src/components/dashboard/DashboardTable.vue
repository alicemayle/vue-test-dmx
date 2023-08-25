<template>
  <div class="div-table">
    <b-table
      borderless
      :fields="fields"
      :items="items"
      responsive="sm"
      :filter="filter"
    >
      <!--default data cell-->
      <template #cell()="data">
        <p>{{ data.value }}</p>
      </template>

      <!-- A custom formatted column -->
      <template #cell(progreso)="data">
        <div>{{ data.value.proceso }}</div>
        <b-progress
          striped
          :key="data.item.id"
          height="10px"
          :value="data.value.avance"
          max="100"
          variant="success"
        ></b-progress>
      </template>

      <template #cell(estatus)="data">
        <CardStatusTest :key="data.item.id" :data="data.value" />
      </template>

      <template #cell(index)="data">
        <b-button
          variant="link"
          @click="() => onClickDetails(data.item)"
          :value="data.item.estatus"
        >
          <b-icon
            variant="secondary"
            :icon="
              data.item.estatus === 'approved' || data.item.estatus === 'error'
                ? 'eye'
                : 'pencil-square'
            "
          ></b-icon>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import CardStatusTest from "@/components/dashboard/CardStatusTest";

export default {
  name: "DashboardTable",
  components: {
    CardStatusTest,
  },

  setup() {
    const store = useStore();
    const items = computed(() => store.state.user.tests);
    const filter = computed(() => store.state.filter);
    const fields = [
      "fecha",
      "nombre",
      "celular",
      "progreso",
      "estatus",
      {
        key: "index",
        label: "",
      },
    ];

    onMounted(() => {
      store.dispatch("getTests");
    });

    const onClickDetails = (item) => {
      if (item.estatus == "approved" || item.estatus == "error") {
        store.dispatch("getTestDetails", item);

        store.dispatch("setState", {
          mut: "setShowModal",
          value: "",
        });
      }
    };

    return {
      items,
      fields,
      onClickDetails,
      filter,
    };
  },
};
</script>

<style>
.div-table {
  width: 100%;
  text-align: left;
}
</style>
