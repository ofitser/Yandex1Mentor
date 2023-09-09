<template>
  <div id="app">
    <nav class="navigation">
      <router-link to="/" class="nav-link">Мои селфи</router-link> |
      <router-link to="/programming-story" class="nav-link">История</router-link> |
      <router-link to="/repository-link" class="nav-link">Репозиторий</router-link> |
      <router-link to="/css-feature-video" class="nav-link">Фишки CSS</router-link> |
      <router-link to="/teen-activity" class="nav-link">Для подростков</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>

.navigation {
  background-color: green;
  padding: 10px 0;
  text-align: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 16px;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
