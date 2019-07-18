<template>
  <div class="container">
    <h1>{{name}}</h1>
    <div class="row">
      <b-card
        title="Card Title"
        :img-src="photo.url"
        :img-alt="photo.title"
        img-top
        tag="article"
        class="col-sm-4"
        v-for="photo of photos"
        :key="photo.id"
      >
        <b-card-text>{{photo.title}}</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import PhotoService from "../services/PhotoService";

export default {
  data() {
    return {
      name: "Photos",
      photos: [],
      errors: []
    };
  },
  created: function() {
    PhotoService.get(
      data => {
        this.photos = data;
      },
      response => {
        this.errors.push(response.errors);
      }
    );
  }
};
</script>