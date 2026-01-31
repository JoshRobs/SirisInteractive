<template>
  <section class="foundation">
    <div class="foundation-inner">
      <!-- Image -->
      <div class="foundation-image">
        <img src="" alt="Idle Architect foundation concept" />
      </div>

      <!-- Text -->
      <div class="foundation-text">
        <h2>Start with a single decision</h2>
        <p>
          Every system in Idle Architect begins small. Place your first structure, define the rules,
          and watch complexity emerge from simple choices.
        </p>
      </div>
    </div>
  </section>
  Systems: 1. Make working more fun 2. Teach the core mechanic visually. Small version of game
  pre-loaded with js. Middle-out reveal. Either interactable or scrollable animation. 3. Show off
  variety of buildings and map. 3.Carousel of different maps 4. Show still in development
</template>
<script lang="ts" setup></script>
<style scoped>
.foundation {
  padding: 8rem 2rem;
}

.foundation-inner {
  max-width: 1100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Image */
.foundation-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

/* Text */
.foundation-text h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.foundation-text p {
  font-size: 1.05rem;
  line-height: 1.6;
  opacity: 0.85;
}

/* Mobile */
@media (max-width: 768px) {
  .foundation-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
