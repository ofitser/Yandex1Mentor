<template>
  <div class="css-feature-container">
    <h2 class="css-feature-title">Фишки CSS</h2>
    <p class="css-feature-text">Короткое видео про интересные способности</p>
    <div class="video-container">
      <video
        width="560"
        height="315"
        controls
        src="../assets/css.mp4"
      ></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "CSSFeatureVideo",
};
</script>

<style scoped>
.css-feature-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.css-feature-title {
  color: green;
  font-size: 24px;
  margin-bottom: 10px;
}

.css-feature-text {
  font-size: 16px;
  line-height: 1.5;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; 
  overflow: hidden;
  max-width: 100%;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
