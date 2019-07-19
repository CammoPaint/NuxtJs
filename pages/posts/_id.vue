<template>
  <div class="container">
    <h1>Post</h1>
    <div class="col-sm-12 card">
      <div class="card-body">
        <h5 class="card-title">{{post.title}}</h5>
        <p class="card-text">{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    return {
      post: await app.$repositories.posts.show(params.id)
    };
  }
};
</script>