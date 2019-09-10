<template>
  <div class="container">
    <h1>Post</h1>
    <div class="col-sm-12 card">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">{{product.shortDescription}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    return {
      product: await app.$repositories.products.show(params.url)
    };
  }
};
</script>