<template>
  <div class="bg-black w-screen h-screen p-12">
    <div class="pb-16">
      <h1 class="text-white text-4xl">Lista de Categorías</h1>
    </div>

    <div class="flex flex-row flex-wrap w-2/3 justify-around">
      <div
        class="w-56 h-20 text-center text-white py-6 mt-8 ml-2"
        style="background: #3e1149"
        v-for="category in categories"
        :key="category.key"
      >
        <div>
          <span class="text-center">{{ category.label }}</span>
        </div>
        <div class="flex justify-end px-2">
          <router-link to="/edit-category">
            <small class="text-xs">Editar</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categories: [
        {
          key: "accion",
          label: "ACCIÓN",
        },
        {
          key: "aventura",
          label: "AVENTURA",
        },
        {
          key: "comedia",
          label: "COMEDIA",
        },
        {
          key: "terror",
          label: "TERROR",
        },
        {
          key: "romance",
          label: "ROMANCE",
        },
        {
          key: "misterio",
          label: "MISTERIO",
        },
      ],
    };
  },
};
</script>

