<template>
  <div class="card h-100" v-if="product">
    <nuxt-link :to="{ name: 'products-id', params: { id: product.id }}">
      <img class="card-img-top" :src="imageUrl(product.imageId)" :alt="product.name" />
      <div class="card-body">
        <h4 class="card-title">{{product.name}}</h4>
        <h5>From $ {{product.basePrice}} / day</h5>
        <p class="card-text">{{product.shortDescription}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </nuxt-link>
  </div>
</template>
<style>
.card-img-top {
  width: 100%;
  height: 20vw;
  object-fit: cover;
}
</style>
<script>
export default {
  props: ["product"],
  methods: {
    imageUrl: function(imageId) {
      return `https://hirex-dev-api.azurewebsites.net/images/${imageId}`;
    }
  }
};
</script>