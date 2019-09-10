<template>
  <div class="container" v-if="data">
    <div class="card mb-4">
      <div class="card-body">
        <h2>{{data.title}}</h2>
        <img class="card-img-top" :src="data.imageUrl" :alt="data.title" />
        <!-- Post details -->
        <div class="mt-4">
        <p>{{data.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import json from "~/static/data.json";

export default {

  async asyncData({ app, params }) {
    console.log(json);
    return {
      data: json.posts.find(x => x.id === params.id)
    };
  }
};
</script>