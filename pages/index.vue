<template>
  <!-- Page Content -->
  <div>
    <header class="masthead text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h1 class="mb-5 text-white">Hire gear for every adventure</h1>
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

    <section class="features-icons text-center bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4" v-for="category of categories" :key="category.id">
            <nuxt-link :to="{ name: 'categories-id', params: { id: category.id }}">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 text-primary">
                <div class="features-icons-icon">
                  <font-awesome-icon :icon="category.icon" style="font-size: 60px" class="primary" />
                </div>
                <h3>{{category.name}}</h3>
                <p class="lead mb-0">{{category.title}}</p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid mt-5">
      <h2 class="mb-4 pb-4 text-center text-primary">Featured Products</h2>
      <!-- /.row -->
      <div class="row">
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1500917832468-298fa6292e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt
              />
            </a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Frers Custom 67ft Timber Yacht</a>
              </h4>
              <h5>$2400.00</h5>
              <p
                class="card-text"
              >Dreamtime was one of the custom orders built by the Swansons for Graham Oneil in 1983. It is a German Frers design 67 ft yacht which has had a good racing history as well as cruised the pacific and the Mediterranean.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt
              />
            </a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Mountain Designs Alpine Bunker All-Seasons Tent</a>
              </h4>
              <h5>$105.00</h5>
              <p
                class="card-text"
              >The Alpine Bunker 3-person tent provides fortified shelter in the most extreme weather conditions, including heavy snowfall and winds.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt
              />
            </a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Gerry Lopez Little Darlin Surf Board</a>
              </h4>
              <h5>$57.00</h5>
              <p
                class="card-text"
              >The LITTLE DARLIN grew out of the Gerry's extremely popular Cheater in the search for more high performance without losing the paddle power.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
          </div>
        </div>
      </div>
      <section class="features-icons text-center">
        <div class="container-fluid text-white">
          <div class="row">
            <div class="col-lg-12">
              <div class="mx-auto">
                <div class="features-icons-icon pb-5">
                  <font-awesome-icon icon="hiking" style="font-size: 60px" />
                </div>
                <h3 class="text-white">We are great, you should rent lots of stuff from us..</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-center mt-5">
        <h2 class="mb-4 pb-4 text-primary">Latest Blog Posts</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-4" v-for="post of posts" :key="post.id">
            <nuxt-link :to="{ name: 'posts-id', params: { id: post.id }}">
              <div class="card h-100">
                <img class="card-img-top" :src="post.imageUrl" alt />
                <div class="card-body">
                  <h4 class="card-title">{{post.title}}</h4>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
import json from "~/static/data.json";

export default {
  data() {
    return {
      products: []
    };
  },
  async asyncData(ctx) {
    return {
      categories: json.productCategories,
      products: await ctx.app.$repositories.products.index(),
      posts: json.posts.slice(0, 4)
    };
  }
};
</script>