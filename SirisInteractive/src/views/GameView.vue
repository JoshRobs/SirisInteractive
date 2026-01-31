<template>
  <GameLayout>
    <component :is="gameComponent" />
  </GameLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import IdleArchitectHero from '@/games/idle-architect/IdleArchitectHero.vue'
import GameLayout from '@/layouts/GameLayout.vue'

const props = defineProps<{ slug: string }>()

const gameComponent = computed(() => {
  if (props.slug === 'idle-architect') return IdleArchitectHero
  return null
})
</script>
