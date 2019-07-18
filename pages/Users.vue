<template>
  <div class="container">
    <h1>{{name}}</h1>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "../services/UserService";

export default {
  data() {
    return {
      name: "Users",
      users: [],
      errors: []
    };
  },
  created: function() {
    UserService.get(
      data => {
        this.users = data;
      },
      response => {
        this.errors.push(response.errors);
      }
    );
  }
};
</script>