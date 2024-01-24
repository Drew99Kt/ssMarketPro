import { createRouter, createWebHistory } from 'vue-router';
import Market from './components/app/Market.vue';
import TechStripper from './components/app/TechStripper.vue';
import SquadDamageDisplay from './components/app/SquadDamageDisplay.vue';
import LootSplitter from './components/app/LootSplitter.vue';
import ScrapCalculator from './components/app/ScrapCalculator.vue';
import App from './App.vue';


const routes = [
  {
    path: '/app/Market',
    component: Market
  },
  {
    path: '/app/SquadDamageDisplay',
    component: SquadDamageDisplay
  },
  {
    path: '/app/LootSplitter',
    component: LootSplitter
  },
  {
    path: '/ssMarketPro/Market',
    component: Market
  },
  {
    path: '/ssMarketPro/Market',
    component: App
  },
  {
    path: '/app/TechStripper',
    component: TechStripper
  },
  {
    path: '/app/tech-stripper',
    component: TechStripper
  },
  {
    path: '/app/market-page',
    component: Market
  },
  {
    path: '/app/ScrapCalculator',
    component: ScrapCalculator
  },

  // Add more routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  mode: 'hash',
  base: '/app/ssMarketPro/'
});

export default router;