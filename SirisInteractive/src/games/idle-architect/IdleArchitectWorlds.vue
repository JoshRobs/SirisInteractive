<template>
  <section class="p-8 flex flex-col items-center">
    <div class="flex worlds-grid justify-items-center">
      <div class="world-card" data-image="/images/world1.jpg">
        <img src="/src/assets/images/world1-thumb.png" alt="World 1" />
      </div>

      <div class="world-card" data-image="/images/world2.jpg">
        <img src="/src/assets/images/world2-thumb.png" alt="World 2" />
      </div>

      <!-- Add as many as you want -->
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style scoped>
.worlds-grid {
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.world-card {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.25s ease;
  z-index: 1;
}

.world-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
