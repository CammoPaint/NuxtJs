<template>
  <div>
    <nav-bar />
    <nuxt />
  </div>
</template>
<script>
import NavBar from "~/components/NavBar.vue";
import "~/assets/_variables.scss";

export default {
  components: {
    NavBar
  }
};
</script>
