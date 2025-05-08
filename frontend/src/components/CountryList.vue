<template>
  <div class="country-container">
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex align-items-center justify-content-between"
        v-for="country in countries"
      >
        <div class="country-name">{{ country.countryName }}</div>
        :key="country.countryId"
        <img
          class="flag-img"
          :src="country.flagURL"
          :alt="'Flagga för ' + country.countryName"
        />

        <div class="infoBox" v-if="selectedCountry === country.countryName">
          <button
            class="btn btn-outline-primary"
            type="submit"
            @click="closeInfo()"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
          <ul>
            <li>Capital: {{ country.countryCapital }}</li>
            <li>Population: {{ country.countryPopulation }}</li>
            <li>Continent: {{ country.countryContinent }}</li>
          </ul>
        </div>

        <div class="btn-container">
          <button
            class="btn btn-outline-primary"
            @click="showInfo(country.countryName)"
          >
            <i class="fa-solid fa-info"></i>
          </button>

          <button class="btn btn-outline-primary" type="submit">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const countries = ref(null);
const selectedCountry = ref(false);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/countries`);
    countries.value = response.data.countries;
    console.log(countries.value);
  } catch (err) {
    error.value = "Kunde inte hämta data";
    console.error(err);
  }
});

function showInfo(country) {
  selectedCountry.value = country;
}
function closeInfo() {
  selectedCountry.value = null;
}
</script>

<style scoped>
.country-container {
  position: relative;
  border: 1px solid rgba(7, 7, 7, 0.158);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(44, 43, 43, 0.1);
  padding: 15px;
  margin: 23px;
  background-color: #fff;
}

.btn-container button {
  margin: 5px;
}

.flag-img {
  width: 60px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 1em;
}

.country-name {
  font-weight: bold;
  font-size: 1.2rem;
  flex: 1;
}

.infoBox {
  position: absolute;
  z-index: 1;
  font-size: 14px;
  top: 1%;
  /* margin-top: 8px; */
  background-color: rgba(248, 249, 250, 0.95);
  padding: 3px;
  width: 100%;
  border: 1px solid rgba(7, 7, 7, 0.158);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(44, 43, 43, 0.1);
  text-align: left;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.infoBox button {
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 4px 8px;
  line-height: 1;
  font-size: 12px;
}
</style>
