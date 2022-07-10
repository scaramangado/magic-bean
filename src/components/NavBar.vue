<template>
  <div id="navbar">
    <img id="logo" src="../assets/magic-bean-small.png" />
    <div class="navitem active">Main Categories</div>
    <div class="navitem">Extension Categories</div>
  </div>
</template>

<style scoped>
#navbar {
  background-color: var(--secondary-bg);
  display: flex;
  width: calc(100vw - 1.6em);
  height: 50px;
  margin: .5em;
  border-radius: .5em;
  padding: .3em;
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
  margin-left: .6em;
  color: var(--secondary-text);
}

.active {
  color: var(--primary-text);
}
</style>
