<template>
  <div>
    <navigation />
    <nuxt />
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Logo,
    Navigation
  }
};
</script>
