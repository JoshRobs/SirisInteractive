<template>
  <GameLayout>
    <IdleArchitectHero />
    <IdleArchitectSellingPoint />
    <IdleArchitectSystems />
    <IdleArchitectWorld />
  </GameLayout>
</template>

<script setup lang="ts">
import IdleArchitectHero from '@/games/idle-architect/IdleArchitectHero.vue'
import IdleArchitectSellingPoint from '@/games/idle-architect/IdleArchitectSellingPoint.vue'
import IdleArchitectSystems from '@/games/idle-architect/IdleArchitectSystems.vue'
import IdleArchitectWorld from '@/games/idle-architect/IdleArchitectWorlds.vue'
import GameLayout from '@/layouts/GameLayout.vue'
</script>
