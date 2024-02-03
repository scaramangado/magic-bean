<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div id="app">
    <NavBar />
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style>
:root {
  --primary-bg: #333;
  --secondary-bg: #600;
  --primary-text: #eee;
  --secondary-text: #999;

  background-color: var(--primary-bg);
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  margin: 0px;
}

#app {
  max-width: 1080px;
  margin: auto;
}
</style>
