<template>
  <div class="scene">
    <div class="cube">
      <span class="side top">Add to Wishlist</span>
      <span class="side front">Add to Wishlist</span>
      <span class="side leftSide">Add to Wishlist</span>
      <span class="side rightSide">Add to Wishlist</span>
      <span class="side back">Add to Wishlist</span>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.scene {
  width: 12em;
  justify-content: center;
  align-items: center;
}

.cube {
  color: #ccc;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  transition: all 0.85s cubic-bezier(0.17, 0.67, 0.14, 0.93);
  transform-style: preserve-3d;
  transform-origin: 50% 50%;

  width: 10em;
  height: 10em;
  /* Apply animation: name, duration, timing, iteration-count */
  animation: spin 30s linear infinite;
}

.side {
  box-sizing: border-box;
  position: absolute;
  display: inline-block;
  height: 10em;
  width: 10em;
  text-align: center;
  text-transform: uppercase;
  padding-top: 3.8em;
  font-weight: bold;
  transition: all 0.3s ease;
}

.side:hover {
  box-shadow:
    inset 0 0 0 4px #ef476f,
    inset 0 0 0 8px #ffd166,
    inset 0 0 0 12px #06d6a0,
    inset 0 0 0 16px #118ab2;
  background: #073b4c;
  color: #fff;
}

.top {
  background: #222229;
  color: #ffffff;
  transform: rotateX(90deg) translate3d(0, 0, 5em);
  box-shadow: inset 0 0 0 5px #fff;
}

.front {
  background: #222229;
  color: #ffffff;
  box-shadow: inset 0 0 0 4px rgb(226, 226, 226);
  transform: translate3d(0, 0, 5em);
}

.leftSide {
  background: #222229;
  color: #ffffff;
  box-shadow: inset 0 0 0 4px rgb(226, 226, 226);
  transform: rotateY(90deg) translate3d(0em, 0, 5em);
}
.rightSide {
  background: #222229;
  color: #ffffff;
  box-shadow: inset 0 0 0 4px rgb(226, 226, 226);
  transform: rotateY(-90deg) translate3d(0em, 0, 5em);
}
.back {
  background: #222229;
  color: #ffffff;
  box-shadow: inset 0 0 0 4px rgb(226, 226, 226);
  transform: rotateY(-180deg) translate3d(0em, 0, 5em);
}

@keyframes spin {
  0% {
    transform: rotateY(0deg) rotateX(-5deg);
  }
  50% {
    transform: rotateY(180deg) rotateX(5deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(-5deg);
  }
}
</style>
