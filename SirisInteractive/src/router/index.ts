import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GameView from '@/views/GameView.vue'
import StudioView from '@/views/StudioView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/studio', component: StudioView },
    {
      path: '/games/:slug',
      component: GameView,
      props: true,
    },
  ],
})
