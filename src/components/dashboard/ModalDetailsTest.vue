<template>
  <b-modal v-model="showModal" hide-footer hide-header size="xl">
    <div>
      <b-tabs
        content-class="mt-3"
        active-nav-item-class="font-weight-bold text-success"
      >
        <b-tab title="General" active>
          <div class="px-3 pt-3">
            <div class="box-modal-header">
              <h3>Información Personal</h3>
              <div class="box-header-process">
                <p>
                  <span
                    :class="
                      testDetails.estatus === 'approved' ? 'title-proceso' : ''
                    "
                    >{{ testDetails.progreso.proceso }}</span
                  >
                  {{
                    testDetails.estatus === "approved" ? "| Cita agendada " : ""
                  }}
                </p>
                <CardStatusTest
                  :key="testDetails.id"
                  :data="testDetails.estatus"
                />
              </div>
            </div>

            <div class="p-info">
              <div class="p-info p-info-first">
                <div class="me-3">
                  <p class="text-secondary">
                    Nombre <br />
                    Fec. Nacimiento <br />
                    RFC
                  </p>
                </div>
                <p>
                  {{ testDetails.nombre }} <br />
                  {{ testDetails.fecha }} <br />
                  {{ testDetails.rfc }}
                </p>
              </div>

              <div class="p-info ms-5">
                <div class="me-3">
                  <p class="text-secondary">
                    Celular <br />
                    Correo <br />
                    Dirección
                  </p>
                </div>
                <p>
                  {{ testDetails.celular }} <br />
                  {{ testDetails.correo }} <br />
                  {{ testDetails.direccion }}
                </p>
              </div>
            </div>

            <hr class="mt-2 mb-2" />

            <div class="p-info">
              <div class="p-info p-info-first">
                <div class="me-3">
                  <p class="text-secondary">
                    Producto <br />
                    Sub Producto <br />
                    Tipo Nómina <br />
                    Operación
                  </p>
                </div>
                <p>
                  {{ testDetails.producto }} <br />
                  {{ testDetails.subproducto }} <br />
                  {{ testDetails.tipoNomina }} <br />
                  {{ testDetails.operacion }}
                </p>
              </div>

              <div class="p-info ms-5">
                <div class="me-3">
                  <p class="text-secondary">
                    Estado <br />
                    Banco <br />
                    Sucursal <br />
                    Promotor
                  </p>
                </div>
                <p>
                  {{ testDetails.estado }} <br />
                  {{ testDetails.banco }} <br />
                  {{ testDetails.sucursal }} <br />
                  {{ testDetails.promotor }}
                </p>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab :title="testDetails.progreso.proceso" disabled></b-tab>
      </b-tabs>
      <div class="footer-button">
        <b-button variant="success" @click="onShowModal">Cerrar</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CardStatusTest from "./CardStatusTest";

export default {
  name: "ModalDetailsTest",
  components: {
    CardStatusTest,
  },

  setup() {
    const store = useStore();
    const showModal = computed(() => store.state.showModal);
    const testDetails = computed(() => store.state.testDetails);

    const onShowModal = () => {
      store.dispatch("setState", {
        mut: "setShowModal",
        value: "",
      });
    };

    return {
      showModal,
      testDetails,
      onShowModal,
      CardStatusTest,
    };
  },
};
</script>

<style scoped>
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.box-modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: flex-end;
}
.footer-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
button {
  background-color: #63a532;
  border: 0;
}
.title-proceso {
  font-weight: bold;
  color: #63a532;
  text-align: right;
}
.p-info {
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}
.p-info-first {
  min-width: 30%;
}
.box-header-process {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: flex-end;
}
</style>
