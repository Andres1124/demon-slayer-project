<template>
  <div class="">
    <div
      class="h-screen w-72 flex flex-col items-center py-6"
      style="background: #3e1149"
    >
      <div class="hidden lg:flex lg:items-center pb-8">
        <img class="w-12" src="../assets/img/logo.png" alt="logo" />
        <h1 class="text-white text-2xl font-bold py-2 ml-2">
          anime<span style="color: #ca38ed">yabu.</span>
        </h1>
      </div>
      <div>
        <h3 class="text-white tracking-wide font-semibold pb-4">Categorías</h3>
        <ul class="text-white pb-4">
          <li class="pb-2">
            <router-link to="/categories">
              <a>Ver todos</a>
            </router-link>
          </li>
          <li class="pb-2">
            <router-link to="/create-category">
              <a>Crear</a>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <h3
          @click="showAlert()"
          class="text-white tracking-wide font-semibold cursor-pointer"
        >
          Cerrar sesión
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {};
  },
  methods: {
    redirect() {
      this.$router.push({ name: "login" });
    },
    showAlert() {
      Swal.fire({
        title: "¡vuelve pronto!",
        text: "Sesión cerrada satisfactoriamente",
        icon: "success",
        timer: 1500,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    },
  },
};
</script>
