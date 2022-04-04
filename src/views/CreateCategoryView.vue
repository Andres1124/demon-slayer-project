<template>
  <div class="flex overflow-hidden">
    <div>
      <sidebar />
    </div>
    <div>
      <create-category />
    </div>
  </div>
</template>
<script>
import CreateCategory from "@/components/CreateCategory.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "CategooriesView",
  components: {
    CreateCategory,
    Sidebar,
  },
};
</script>
