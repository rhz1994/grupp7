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
      <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="d-flex align-items-center">
          <i class="fas fa-user-circle fa-2x me-2"></i>
          <span class="fw-bold">{{ userName }}</span>
        </div>
        <p class="rating">{{ journey.rating }} ⭐</p>
      </div>

      <div class="card-body">
        <div class="me-md-4 d-flex justify-content-between align-items-center">
          <h5 class="card-title flex-grow-1 text-center">
            {{ journey.countryName }}
          </h5>
          <img
            class="w-25"
            :src="journey.flagURL"
            :alt="'Flagga för ' + journey.countryName"
          />
        </div>
        <div class="d-flex text-center align-items-center">
          <p class="year">{{ journey.yearVisited }}</p>
          <p class="notes">- {{ journey.notes }}</p>
        </div>
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

img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  border: 1px solid lightgray;
}

i {
  margin-right: 3%;
}

.thump-up {
  font-size: 2rem;
  color: #005e97;
  padding-top: 1em;
}

i:hover,
.rating:hover {
  color: darkgreen;
  transform: scale(1.2);
  transition: transform 0.2s ease, color 0.3s ease;

  cursor: pointer;
}

.fas.fa-user-circle {
  color: #888;
}

h5 {
  font-weight: bold;
  font-size: 3rem;
}

.rating {
  font-weight: bold;
  font-size: 1.5em;
}

.year {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  border-right: lightgray solid 1px;
  padding-right: 1em;
  color: green;
}

.notes {
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 0.5rem;
  padding-left: 1em;
}
</style>
