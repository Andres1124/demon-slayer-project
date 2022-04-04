<template>
  <div class="flex overflow-hidden">
    <div>
      <sidebar />
    </div>
    <div>
      <edit-category />
    </div>
  </div>
</template>
<script>
import EditCategory from "@/components/EditCategory.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "EditCategoryView",
  components: {
    EditCategory,
    Sidebar,
  },
};
</script>
