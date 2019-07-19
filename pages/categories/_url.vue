<template>
  <div class="container">
    <h1>{{category.name}}</h1>
    <div class="col-sm-12 card">
      <div class="card-body">
        <h5 class="card-title">{{category.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    return {
      category: await app.$repositories.categories.show(params.url)
    };
  }
};
</script>