<template>
  <div class="container">
    <h1>{{user.name}}</h1>
    <div class="col-sm-12 card">
      <div class="card-body">
        <h5 class="card-title">{{user.username}}</h5>
        <p class="card-text">{{user.email}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    return {
      user: await app.$repositories.users.show(params.id)
    };
  }
};
</script>