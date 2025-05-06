<script setup>
import TravelCard from "../components/TravelCard.vue";
import CountryList from "../components/CountryList.vue";
</script>

<template>
  <main>
    <h1>Worldy</h1>
    <div class="d-flex flex-row">
    <b-card title="Komponent 1" class="me-3" style="flex: 2;">
      <TravelCard/>
    </b-card>

    <b-card title="Komponent 2" style="flex: 1;">
      <CountryList />
    </b-card>
  </div>
  </main>
</template>

<style scoped>

</style>
