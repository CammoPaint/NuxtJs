<template>
  <div class="container" v-if="data">
    <div class="card mb-4">
      <div class="card-body">
        <h1>{{data.result.name}}</h1>
        <!-- Show the product image if there's only one -->
        <div class="row text-center">
          <img :src="imageUrl(data.result.imageId)" class="img-fluid" alt="#" />
        </div>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-body">
        <h2>Details</h2>
        <!-- Product details -->
        <p class="end-divider-line">{{data.result.shortDescription}}</p>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <h5>Price</h5>
            <p>{{data.result.basePrice | currency: 'AUD'}} / day</p>
            <h5 v-If="data.result.bond>0">Security Deposit</h5>
            <p v-If="data.result.bond>0">{{data.result.bond | currency: 'AUD'}} / hire</p>
            <h5>Supplier</h5>
            <p>{{data.result.organisationName}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imageUrl: function(imageId) {
      return `https://hirex-staging-api.azurewebsites.net/images/${imageId}`;
    }
  },
  async asyncData({ app, params }) {
    return {
      data: await app.$repositories.products.show(params.id)
    };
  }
};
</script>