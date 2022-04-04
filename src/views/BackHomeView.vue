<template>
  <div class="flex overflow-hidden">
    <div>
      <sidebar />
    </div>
    <div>
      <back-home />
    </div>
  </div>
</template>

<script>
import BackHome from "@/components/BackHome.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "BackHomeView",
  components: {
    BackHome,
    Sidebar,
  },
};
</script>