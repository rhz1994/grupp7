<template>
  <div class="country-container">
    <ul class="list-group list-group-flush">
      <li
        class="list-group-item d-flex align-items-center justify-content-between"
        v-for="country in countries"
        :key="country.countryId"
      >

        <img
          class="flag-img"
          :src="country.flagURL"
          :alt="'Flagga för ' + country.countryName"
        />
         {{ country.countryName }}

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
            <li>Continent: {{ country.continentName }}</li>
          </ul>
        </div>

        <div class="btn-container">
          <button
            class="btn btn-outline-primary"
            @click="showInfo(country.countryName)"
          >
            <i class="fa-solid fa-info"></i>
          </button>

          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#postFormModal"
            @click="setSelectedCountry(country)"
          >
            Add Visit
          </button>
        </div>
      </li>
    </ul>
  </div>

  <PostForm :selectedCountry="selectedCountry" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import PostForm from "./PostForm.vue"; // importing component

const countries = ref(null);
const selectedCountry = ref(false);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/countries`);
    countries.value = response.data.countries;
    // console.log(countries.value);
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

// Max postform

const setSelectedCountry = (country) => {
  selectedCountry.value = country;
};
</script>

<style scoped>
.country-container {
  position: relative;
  border: 1px solid rgba(7, 7, 7, 0.158);
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(44, 43, 43, 0.1);
  padding: 5px;
  margin: 23px;
  background-color: #fff;

}



.btn-container button {
  margin: 1px;
  font-size: 80%;
}

.btn-container img{
  margin-right: 10px;

}

.flag-img {
  width: 15%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

li{
  font-size: 15px;
}
.infoBox button {
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 4px 8px;
  line-height: 1;
  font-size: 10px;
}
</style>
