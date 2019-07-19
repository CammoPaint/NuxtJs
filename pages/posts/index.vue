<template>
  <div class="container">
    <h1>Posts</h1>
    <div class="row">
      <div class="col-sm-4 card" v-for="post of posts" :key="post.id">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <p class="card-text">{{post.body}}</p>
          <b-button
            :to="{ name: 'posts-id', params: { id: post.id }}"
            variant="primary"
          >More</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  async asyncData(ctx) {
    return {
      posts: await ctx.app.$repositories.posts.index()
    };
  }
};
</script>