<script setup>
import TravelCard from "../components/TravelCard.vue";
import CountryList from "../components/CountryList.vue";
</script>

<template>
  <nav class="navbar navbar-light sticky-top">
    <div class="container">
      <img
        class="logo"
        src="../assets/Worldly.png"
        alt="Bild på Worldly-logga"
      />
      <i class="fas fa-user-circle fa-3x"></i>
    </div>
  </nav>

  <main>
    <div class="d-flex">
      <div class="card" style="flex: 3; padding: 0">
        <div class="card-body">
          <h2 class="fw-bold rounded shadow pb-4 pt-4">Mina resor</h2>
          <TravelCard />
        </div>
      </div>

      <div class="card" style="flex: 2; padding: 0">
        <div class="card-body">
          <h2 class="fw-bold rounded shadow pb-4 pt-4">Lägg till resor</h2>
          <CountryList />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  border: none;
}

h2 {
  background: linear-gradient(to right, #005e97, #007bbf);
  color: white;
}

.navbar {
  width: 100%;
  height: 4em;
  margin-bottom: 2em;
  background-color: #08568c;
}

i {
  color: white;
}

.logo {
  height: 3em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover,
i:hover {
  filter: drop-shadow(0 0 2em #005e97);
  cursor: pointer;
}

.d-flex {
  display: flex;
  gap: 1rem;
}

.card-body {
  padding: 2em;
}
</style>
