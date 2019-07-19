<template>
  <div class="card text-center" v-if="product">
    <img
      :src="imageUrl(product.imageId)"
      class="card-img-top"
      style="height:200px"
      :alt="product.name"
    />
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <b-button :to="{ name: 'products-id', params: { id: product.id }}" variant="primary">Hire Now</b-button>
    </div>
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
      return `https://hirex-staging-api.azurewebsites.net/images/${imageId}`;
    }
  }
};
</script>