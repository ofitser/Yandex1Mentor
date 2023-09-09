<template>
  <div class="teen-activity-container">
    <h2 class="teen-activity-title">Задание со звездочкой, для подростков</h2>
    <p class="teen-activity-text">Предложить задание или активность, которая поможет подросткам почувствовать силу JavaScript.</p>
    <p class="teen-activity-text">Скопируй и вставь этот код в консоль. Нажми Enter</p>

    
    <div class="code-section">
      <h3 class="code-title">Код(показывает матрицу на экране):</h3>
      <pre class="code-block"><code>const matrixCanvas = document.createElement('canvas');
matrixCanvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none';
document.body.appendChild(matrixCanvas);

const ctx = matrixCanvas.getContext('2d');
const text = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const textArr = [...text];
const fontSize = 16;
const columns = Math.floor(window.innerWidth / fontSize);
const drops = new Array(columns).fill(1);

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
  ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

  ctx.fillStyle = '#0f0';
  ctx.font = `${fontSize}px arial`;

  for (let i = 0; i &lt; columns; i++) {
    const textIndex = Math.floor(Math.random() * textArr.length);
    const char = textArr[textIndex];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33);</code></pre>
      <p class="code-title">Можно рассказать и показать, что сила JavaScript'а в том, что он используется везде. И казалось бы, код написали мы, но использовать его можно на любом сайте</p>
      <p class="code-title">Можно скопировать этот текст и вставить его в консоли на странице гугла, и он точно так же будет работать. Добавить, что это лишь пример, и сделать можно многое - все зависит от желания и идей вас самих </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "TeenActivity",
};
</script>

<style scoped>
.teen-activity-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.teen-activity-title {
  color: green;
  font-size: 24px;
  margin-bottom: 10px;
}

.teen-activity-text {
  font-size: 16px;
  line-height: 1.5;
}

.teen-activity-example {
  margin-top: 20px;
}

.activity-description {
  font-size: 16px;
}

.code-section {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  overflow-x: auto;
}

.code-title {
  font-size: 18px;
  color: #333;
}

.code-block {
  font-family: Monaco, monospace;
  font-size: 14px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
