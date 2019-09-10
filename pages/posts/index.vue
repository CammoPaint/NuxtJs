<template>
  <div class="container">
    <h1>Blog</h1>
        <div class="row">
          <div class="col-sm-4 mb-4" v-for="post of posts" :key="post.id">
            <nuxt-link
              :to="{ name: 'posts-id', params: { id: post.id }}"
            >
            <div class="card h-100">
                <img class="card-img-top" :src="post.imageUrl" alt />
              <div class="card-body">
                <h4 class="card-title">
                  {{post.title}}
                </h4>
              </div>
            </div>
            </nuxt-link>
          </div>
      </div>
  </div>
</template>

<script>
import json from "~/static/data.json";

export default {
  components: {
  
  },
  data() {
    return {
      products: []
    };
  },
  async asyncData(ctx) {
    return {
      posts: json.posts
    };
  }
};
</script>