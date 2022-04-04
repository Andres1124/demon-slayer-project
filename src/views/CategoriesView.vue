<template>
  <div class="flex overflow-hidden">
    <div>
      <sidebar />
    </div>
    <div>
      <categories />
    </div>
  </div>
</template>
<script>
import Categories from "@/components/Categories.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "CategoriesView",
  components: {
    Categories,
    Sidebar,
  },
};
</script>
