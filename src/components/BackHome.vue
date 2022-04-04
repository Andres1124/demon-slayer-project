<template>
  <div class="bg-black w-screen h-screen p-12">
    <div class="text-white pb-12">
      <h2 class="text-3xl">Hola, <span class="font-bold">Pedro Perez</span></h2>
    </div>
    <div class="flex flex-col">
      <span class="text-white pb-6">Seleccione una opción:</span>
      <div class="flex flex-col">
        <div class="pb-6 w-80 h-20">
          <router-link to="/categories">
            <button
              class="w-full h-full text-sm font-semibold p-3 rounded-md"
              style="background: #e487fb"
              type="submit"
            >
              Ver todas las categorías
            </button>
          </router-link>
        </div>
        <div class="pb-6 w-80 h-20">
          <router-link to="/create-category">
            <button
              class="w-full h-full text-sm font-semibold p-3 rounded-md"
              style="background: #e487fb"
              type="submit"
            >
              Crear categorías
            </button>
          </router-link>
        </div>
        <div class="pb-6 w-80 h-20">
          <button
            @click="showAlert()"
            class="w-full h-full text-sm font-semibold p-3 rounded-md"
            style="background: #e487fb"
            type="submit"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {},
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
        this.redirect();
      }, 1500);
    },
  },
};
</script>

