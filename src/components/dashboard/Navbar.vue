<template>
  <b-navbar fixed="top" toggleable sticky class="navbar">
    <b-navbar-brand href="#">
      <img src="../../assets/logo.jpeg" alt="Dimex" class="logo" />
    </b-navbar-brand>

    <div class="row-center">
      <label class="label">Dashboard</label>
      <b-button size="sm" variant="link" class="text-decoration-none button">
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Configuración
      </b-button>
    </div>
    <!-- Right aligned nav items -->

    <b-navbar-nav class="ml-auto">
      <div class="row-center">
        <div class="avatar"></div>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ user.name }}<br />Admin </em>
          </template>
        </b-nav-item-dropdown>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "Navbar",

  setup() {
    const store = useStore();

    return { user: store.state.user };
  },
};
</script>

<style scoped>
.navbar {
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.logo {
  height: 40px;
}
.row-center {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.button {
  color: grey;
}
.button:hover {
  color: grey;
  transition: 0.7s;
  font-weight: bold;
}
.label {
  color: #63a532;
  font-weight: bold;
  padding-right: 20px;
}
.avatar {
  background-color: #d3d3d3;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  margin-right: 10px;
}
</style>
