<template>
  <div class="selfies-container">
    <h2 class="selfies-title">Мои селфи</h2>
    <div class="selfie-images">
      <div class="selfie-item">
        <img src="../assets/LastPhoto.jpg" alt="Мое последнее селфи" class="selfie">
        <p>Одно из последних селфи :) </p>
      </div>
      <br>
      <div class="selfie-item">
        <img src="../assets/SchoolPhoto.jpg" alt="Фото из старшей школы" class="selfie">
        <p>Фото из старшей школы</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.selfies-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.selfies-title {
  color: green;
  font-size: 24px;
  margin-bottom: 20px;
}

.selfie-images {
  gap: 20px;
}

.selfie-item {
  text-align: center;
  width: 100%; 
}

.selfie {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
