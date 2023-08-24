<template>
  <div class="card">
    <h1>Bienvenido</h1>
    <p>
      Lorem Ipsum es simplemente el texto relleno de las <br />
      imprentas y archivos de texto.
    </p>
    <form class="form" @submit="logInSubmit">
      <div class="form-group">
        <label class="label">Correo Electrónico</label>
        <input class="input" type="text" name="email" @input="changeValue" />
      </div>
      <div class="form-group">
        <label class="label">Contraseña</label>
        <input
          class="input"
          type="password"
          name="password"
          @input="changeValue"
        />
      </div>
      <button class="button" type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "LogIn",
  setup() {
    const store = useStore();
    const router = useRouter();

    const changeValue = ({ target }) => {
      store.dispatch("setState", {
        mut: target.name === "email" ? "setEmail" : "setPassword",
        value: target.value,
      });
    };

    const logInSubmit = () => {
      router.push("/dashboard");
    };

    return {
      changeValue,
      logInSubmit,
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  padding-left: 30%;
  padding-right: 30%;
}
.form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.label {
  width: 100%;
  text-align: start;
  font-weight: bold;
}
.input {
  border-radius: 10px;
  width: 100%;
  height: 30px;
  border: 1px solid grey;
}
.button {
  background-color: #d3d3d3;
  border-radius: 30px;
  border: 0cm;
  margin-top: 20px;
  height: 35px;
  width: 100%;
}
</style>
