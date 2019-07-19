<template>
  <div class="container">
    <h1>Users</h1>
    <div class="row">
      <div class="col-sm-4 card" v-for="user of users" :key="user.id">
        <div class="card-body">
          <h5 class="card-title">{{user.name}}</h5>
          <p class="card-text">
            {{user.address.street}}
            <br />
            {{user.address.suite}}
            <br />
            {{user.address.zipcode}}
          </p>
          <b-button :to="{ name: 'users-id', params: { id: user.id }}" variant="primary">More</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  async asyncData(ctx) {
    return {
      users: await ctx.app.$repositories.users.index()
    };
  }
};
</script>
