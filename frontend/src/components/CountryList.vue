<template>
     <div class="country-container">
      <ul class="list-group list-group-flush">
  <li class="list-group-item d-flex justify-content-between" v-for="country in countries">{{ country.countryName }}
    <div class="btn-container">
      <button class="btn btn-outline-primary" type="submit"><i class="fa-solid fa-info"></i></button>
      <button class="btn btn-outline-primary" type="submit"><i class="fa-solid fa-plus"></i></button>
    </div>
    </li>
</ul>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const countries = ref(null)

  onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/countries`
    );
    countries.value = response.data.countries;
    console.log(countries.value);
  } catch (err) {
    error.value = "Kunde inte hämta data";
    console.error(err);
  }
});
</script>

<style scoped>
.country-container{
 border: 1px solid rgba(7, 7, 7, 0.1);
 border-radius: 5px;
 box-shadow: 0 4px 8px rgba(44, 43, 43, 0.1);
 padding: 15px;
  margin: 23px;
  background-color: #fff;
}

.btn-container button{
  margin: 5px;

}



</style>
