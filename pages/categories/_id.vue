<template>
  <div class="container" v-if="data">
    <h1>{{data.result.name}}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    return {
      data: await app.$repositories.categories.show(params.id)
    };
  }
};
</script>