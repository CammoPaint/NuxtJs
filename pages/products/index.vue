<template>
  <div class="container">
    <h1>Products</h1>
    <div class="card-deck">
      <div class="col-sm-4 mb-4" v-for="product of products.result" :key="product.id">
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard.vue";

export default {
  components: {
    ProductCard
  },
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