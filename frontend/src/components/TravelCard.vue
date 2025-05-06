<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const journeyPosts = ref(null);
const error = ref(null);
const userId = 1;
const userName = ref("John Doe");

onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/placesVisitedByUser/${userId}`
    );
    journeyPosts.value = response.data.placesVisitedByUser;
    console.log(journeyPosts.value);
  } catch (err) {
    error.value = "Kunde inte hämta data";
    console.error(err);
  }
});
</script>

<template>
  <div class="container mt-4">
    <div
      v-for="journey in journeyPosts"
      :key="journey.placeVisitedId"
      class="card mb-3 shadow"
    >
      <div class="d-flex justify-content-start">
        <i class="fas fa-user-circle fa-2x"></i>
        <span class="fw-bold">{{ userName }}</span>
      </div>
      <div class="card-body">
        <div class="me-md-4">
          <h5 class="card-title">{{ journey.countryName }}</h5>
          {{ journey.yearVisited }}
        </div>
        <p class="card-text mb-1">{{ journey.rating }} ⭐</p>
        <p class="card-text">{{ journey.notes }}</p>
      </div>
      <img :src="journey.imageURL" :alt="'Bild för ' + journey.countryName" />
      <div class="ms-auto mt-auto thump-up">
        <i class="fas fa-thumbs-up"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.thump-up {
  font-size: 2rem;
}
img {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

i {
  margin-right: 3%;
}
</style>
