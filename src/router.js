import { createRouter, createWebHistory } from 'vue-router';
import Market from './components/app/Market.vue';
import TechStripper from './components/app/TechStripper.vue';
import SquadDamageDisplay from './components/app/SquadDamageDisplay.vue';
import LootSplitter from './components/app/LootSplitter.vue';
import ScrapCalculator from './components/app/ScrapCalculator.vue';
import App from './App.vue';


const routes = [
  {
    path: '/',
    component: Market
  },
  {
    path: '/market',
    component: Market
  },
  {
    path: '/squadDamageDisplay',
    component: SquadDamageDisplay
  },
  {
    path: '/lootSplitter',
    component: LootSplitter
  },
  {
    path: '/techStripper',
    component: TechStripper
  },
  {
    path: '/scrapCalculator',
    component: ScrapCalculator
  },

  // Add more routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;