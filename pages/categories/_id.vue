<template>
  <div v-if="category">
      <header class="masthead text-white text-center" :style="{ background: `url(${category.imageUrl}) no-repeat center` }">
        <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h1 class="mb-5 text-white">{{data.result.name}}</h1>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div class="form-row">
                <div class="col-12 col-md-9 mb-2 mb-md-0">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="What are you looking for"
                  />
                </div>
                <div class="col-12 col-md-3">
                  <button type="submit" class="btn btn-block btn-lg btn-primary">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
    <section class="text-center bg-light">
      <div class="container-fluid" v-if="products">
        <h2 class="mb-4 pt-4 pb-4 text-primary">Featured Gear</h2>
        <div class="card-deck">
          <div class="col-sm-4 mb-4" v-for="product of products.result" :key="product.id">
            <product-card :product="product" />
          </div>
        </div>
      </div>
    </section>
    <section class="features-icons text-center">
        <div class="container-fluid text-white">
          <div class="row">
            <div class="col-lg-12">
              <div class="mx-auto">
                <div class="features-icons-icon pb-5">
                  <font-awesome-icon :icon="category.icon" style="font-size: 60px" />
                </div>
                <h3 class="text-white">{{category.title}}</h3>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="text-center mt-5">
      <div class="container-fluid">
        <h2 class="mb-4 pb-4 text-primary">Latest Blog Posts</h2>
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
    </section>
    <section class="features-icons text-center">
        <div class="container-fluid text-white">
          <div class="row">
            <div class="col-lg-12">
              <div class="mx-auto">
                <h3 class="text-white" v-html="data.result.description"></h3>
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard.vue";

import json from "~/static/data.json";

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
      category: json.productCategories.find(x => x.id === params.id),
      posts: json.posts.filter(x => x.productCategoryId === params.id)
    };
  }
};
</script>