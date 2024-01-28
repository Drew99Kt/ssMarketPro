<template>
    <div>
      <router-link to="/market" tag="button" class="button-style">Market Tool</router-link>
      <router-link to="/techStripper" tag="button" class="button-style">TechStripper Tool</router-link>
      <router-link to="/squadDamageDisplay" tag="button" class="button-style">Squad Damage Display</router-link>
      <router-link to="/lootSplitter" tag="button" class="button-style">Loot Splitter</router-link>
      <router-link to="/scrapCalculator" tag="button" class="button-style">Scrap Calculator</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopNavBar',
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>