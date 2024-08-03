import { createRouter, createWebHistory } from 'vue-router';





const routes = [
  {path: '/', name: 'Home',component:()=> import('./components/TopNavBar.vue')},
  {path: '/market', name:'market',component:()=> import('./components/app/Market.vue')},
  {path: '/squadDamageDisplay', name: 'squadDamageDisplay',component:()=> import('./components/app/SquadDamageDisplay.vue')},
  {path: '/lootsplitter',name: 'lootsplitter',component:()=> import('./components/app/LootSplitter.vue')},
  {path: '/techStripper',name: 'techStripper',component:()=> import('./components/app/TechStripper.vue')},
  {path: '/scrapCalculator',name: 'scrapCalculator',component:()=> import('./components/app/ScrapCalculator.vue')},
  {path: '/assetXMLPrettify', name: 'assetXMLPrettify',component:()=> import('./components/app/AssetXMLPrettify.vue')},
  {path: '/augCalculator',name: 'augCalculator',component:()=> import('./components/app/AugCalculator.vue')},
  {path: '/augFinder',name: 'augFinder',component:()=> import('./components/app/AugFinder.vue')},
  {path: '/galaxyViewer', name: 'galaxyViewer',component:()=> import('./components/app/GalaxyViewer.vue')},


  // Add more routes if needed
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;