<template>
  <div class="container">
    <h1>Home</h1>
    <div class="row">
      <b-card
        title="Card Title"
        :img-src="photo.url"
        :img-alt="photo.title"
        img-top
        tag="article"
        class="col-sm-4"
        v-for="photo of photos"
        :key="photo.id"
      >
        <b-card-text>{{photo.title}}</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: []
    };
  },
  async asyncData(ctx) {
    return {
      photos: await ctx.app.$repositories.photos.index()
    };
  }
};
</script>