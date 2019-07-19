<template>
  <div class="container">
    <h1>Categories</h1>
    <div class="row">
      <div class="col-sm-4 card" v-for="category of categories.result" :key="category.id">
        <div class="card-body">
          <h5 class="card-title">{{category.name}}</h5>
          <p class="card-text"></p>
          <b-button
            :to="{ name: 'categories-id', params: { id: category.id }}"
            variant="primary"
          >View Products</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: []
    };
  },
  async asyncData(ctx) {
    return {
      categories: await ctx.app.$repositories.categories.index()
    };
  }
};
</script>
