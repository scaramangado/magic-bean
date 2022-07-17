<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import GameView from './components/GameView.vue';
import { oot } from './speedruncom/model';
</script>

<template>
  <NavBar />
  <Suspense>
    <GameView :game-id="oot" />
  </Suspense>
</template>

<style>
:root {
  --primary-bg: #333;
  --secondary-bg: #600;
  --primary-text: #eee;
  --secondary-text: #bbb;

  background-color: var(--primary-bg);
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  margin: 0px;
}
</style>
