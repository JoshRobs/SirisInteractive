<template>
  <section ref="hero" class="hero">
    <!-- Background layer -->
    <div class="hero-bg">
      <!-- Default background video (can be overridden via slot) -->
      <!-- Background image -->
      <video class="hero-video" autoplay muted loop playsinline>
        <source src="/src/assets/videos/HeroVideo.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- Center content -->
    <div class="hero-content">
      <h1 class="hero-title text-outline">Idle Architect</h1>
      <p class="hero-tagline">Play while you work</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from '@/animations/gsap'

const hero = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!hero.value) return

  const ctx = gsap.context(() => {
    gsap.from('.hero-title', {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power3.out',
    })

    gsap.from('.hero-tagline', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    })

    gsap.from('.hero-grid', {
      opacity: 0,
      scale: 1.05,
      duration: 1.5,
      ease: 'power2.out',
    })

    // Scroll-driven transition (very subtle)
    gsap.to('.hero-content', {
      y: -80,
      opacity: 0,
      scrollTrigger: {
        trigger: hero.value,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, hero)

  return () => ctx.revert()
})
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding-top: 50px;
  display: flex;
  align-items: start;
  justify-content: center;
  background: #0b0d10;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

/* Video styling */
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Background wrapper */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 600;
  font-family: 'Saans', cursive;
  margin: 0;
}

.text-outline {
  text-shadow:
    3px 3px 0 #222,
    -1px 1px 0 #222,
    1px -1px 0 #222,
    -1px -1px 0 #222,
    1px 0 0 #222,
    0 1px 0 #222,
    -1px 0 0 #222,
    0 -1px 0 #222;
}

.hero-tagline {
  margin-top: 1rem;
  font-size: 1.1rem;
  opacity: 0.8;
}
</style>
