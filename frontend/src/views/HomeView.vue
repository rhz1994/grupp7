<script setup>
import TravelCard from "../components/TravelCard.vue";
import CountryList from "../components/CountryList.vue";
</script>

<template>
  <nav class="navbar navbar-light sticky-top">
    <div class="container">
      <img
        class="logo"
        src="../assets/WorldlyBlue.png"
        alt="Bild på Worldly-logga"
      />
      <i class="fas fa-user-circle fa-3x"></i>
    </div>
  </nav>

  <main>
    <div class="d-flex flex-grow">
      <b-card title="Komponent 1" class="me-3" style="flex: 2">
        <h2 class="fw-bold rounded shadow pb-4 pt-4" style="flex: 2">
          Mina resor
        </h2>
        <TravelCard />
      </b-card>

      <b-card title="Komponent 2" style="flex: 1">
        <h2 class="fw-bold rounded shadow pb-4 pt-4" style="flex: 1">
          Lägg till resor
        </h2>
        <CountryList />
      </b-card>
    </div>
  </main>
</template>

<style scoped>
h2 {
  background: linear-gradient(to right, #005e97, #007bbf);
  color: white;
}

main {
  padding: 4em;
}
.navbar {
  width: 100%;
  height: 6em;
  margin-bottom: 5em;
  background-color: #005e97;
}

i {
  color: white;
}

.logo {
  height: 5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover,
i:hover {
  filter: drop-shadow(0 0 2em #005e97);
  cursor: pointer;
}
</style>
