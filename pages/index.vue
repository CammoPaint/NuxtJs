<template>
  <div class="container">
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  async asyncData(ctx) {
    return {
      products: await ctx.app.$repositories.products.index()
    };
  }
};
</script>