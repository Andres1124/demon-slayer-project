<template>
  <div class="bg-black w-screen h-screen p-12">
    <div class="pb-12">
      <h1 class="text-white text-4xl font-bold">Crear categoría</h1>
    </div>
    <div class="w-96">
      <div class="flex flex-col">
        <div class="flex flex-col w-full p-2">
          <label class="text-white text-sm pb-1">Nombre de categoría</label>
          <input
            class="
              p-2
              placeholder-gray-300
              rounded-md
              border-2 border-gray-300
              text-white
            "
            style="background: rgba(255, 255, 255, 0.47)"
            type="text"
            placeholder=""
            required
          />
        </div>
        <div class="flex flex-col w-full p-2 pt-8">
          <button
            @click="showAlert()"
            class="text-sm font-semibold p-3 rounded-md"
            style="background: #e487fb"
            type="submit"
          >
            Crear
          </button>
        </div>
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
      this.$router.push({ name: "categories" });
    },
    showAlert() {
      Swal.fire({
        title: "Categoría actulizada",
        text: "Se ha creado la categoría satisfactoriamente",
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

