<script setup lang="ts">
import FilterTextField from "./FilterTextField.vue";
</script>

<template>
  <div id="navbar">
    <RouterLink id="logo" to="/">
      <img id="logo" src="../assets/magic-bean-small.png" />
    </RouterLink>
    <RouterLink class="navitem" to="/oot">Main Categories</RouterLink>
    <RouterLink class="navitem" to="/ootextras">Extension Categories</RouterLink>
    <FilterTextField />
  </div>
</template>

<style scoped>
#navbar {
  background-color: var(--secondary-bg);
  display: flex;
  width: calc(100% - 1.6rem);
  height: 2.8rem;
  margin: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.3rem;
  flex-direction: row;
  align-items: center;
}

#logo {
  height: 100%;
}

ul {
  list-style: none;
}

.navitem {
  display: flex;
  margin-left: 0.6em;
  color: var(--secondary-text);
  text-decoration: none;
}

.router-link-active {
  color: var(--primary-text);
}
</style>
