<template>
  <button :class="data">
    <b-icon :icon="icon"></b-icon>
    {{ title }}
  </button>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "CardStatusTest",
  props: {
    key: String,
    data: String,
  },

  setup(props) {
    const icon = ref();
    const title = ref();

    const switchDetails = (key) => {
      switch (key) {
        case "approved":
          icon.value = "person-check";
          title.value = "Aprobada con cita";
          break;
        case "dont-accept":
          icon.value = "x-circle";
          title.value = "No acepta oferta";
          break;
        case "incompleted":
          icon.value = "file-earmark";
          title.value = "Evaluación incompleta";
          break;
        case "error":
          icon.value = "person-x";
          title.value = "No cumple con el perfil";
          break;
        default:
          break;
      }
    };

    onMounted(() => {
      switchDetails(props.data);
    });
    return { icon, title };
  },
};
</script>

<style scoped>
button {
  border: 0;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.approved {
  color: #63a532;
  background-color: #e6fbe8;
}
.dont-accept {
  color: blue;
  background-color: #e6f0fb;
}
.incompleted {
  color: orange;
  background-color: #fbf6e6;
}
.error {
  color: red;
  background-color: #fbe6e7;
}
</style>
