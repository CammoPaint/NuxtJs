<template>
  <div class="mt-4">
    <div class="container" v-if="data">
      <h1>{{data.result.name}}</h1>
      <div v-html="data.result.description"></div>
    </div>
    <section class="text-center mt-5 bg-light">
      <div class="container-fluid" v-if="products">
        <h2 class="mb-4 pt-4 pb-4 text-primary">Featured Gear</h2>
        <div class="card-deck">
          <div class="col-sm-4 mb-4" v-for="product of products.result" :key="product.id">
            <product-card :product="product" />
          </div>
        </div>
      </div>
    </section>
    <section class="text-center mt-5">
      <div class="container-fluid">
        <h2 class="mb-4 pb-4 text-primary">Latest Blog Posts</h2>
        <div class="row">
          <div class="col-sm-4 mb-4" v-for="post of posts" :key="post.id">
            <div class="card h-100">
              <a href="#">
                <img class="card-img-top" :src="post.imageUrl" alt />
              </a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{post.title}}</a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard.vue";

import posts from "~/static/posts.json";

export default {
  components: {
    ProductCard
  },

  async asyncData({ app, params }) {
    let [catResponse, prodResponse] = await Promise.all([
      app.$repositories.categories.show(params.id),
      app.$repositories.products.find(`?productCategoriesId=${params.id}`)
    ]);

    return {
      data: catResponse,
      products: prodResponse,
      posts: posts.posts.filter(x => x.productCategoryId === params.id)
    };
  }
};
</script>