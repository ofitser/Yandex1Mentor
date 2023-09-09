<template>
  <div class="repository-link-container">
    <h2 class="repository-link-title">Ссылка на мой репозиторий</h2>
    <p class="repository-link-text">Ссылка на публичный репозиторий с исходниками этого приложения: <a href="" class="repository-link">GitHub Repository</a></p>
  </div>
</template>

<script>
export default {
  name: "RepositoryLink",
};
</script>

<style scoped>
.repository-link-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.repository-link-title {
  color: green;
  font-size: 24px;
  margin-bottom: 10px;
}

.repository-link-text {
  font-size: 16px;
  line-height: 1.5;
}

.repository-link {
  color: green;
  text-decoration: none;
}

.repository-link:hover {
  text-decoration: underline;
}
</style>
