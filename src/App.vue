<template>

  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Market from './components/app/Market.vue';
// import TechStripper from './components/app/TechStripper.vue';
// import SquadDamageDisplay from './components/app/SquadDamageDisplay.vue';
// import LootSplitter from './components/app/LootSplitter.vue';
// import ScrapCalculator from './components/app/ScrapCalculator.vue';
// import router  from './router';


export default {
  // ...

  beforeRouteLeave(to, from, next) {
    if (to.path === '/') {
      next('/app/TechStripper');
    } else {
      next();
    }
  },
  created() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },

  beforeUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  },

  methods: {
    handleBeforeUnload(event) {
      // Check if the user is refreshing the page
      if (event.clientY < 0) {
        // User is refreshing the page
        // Perform any necessary actions here
        console.log('User pressed refresh');
      }
    },
  },
  // components: {
  //   '/app/TechStripper': Market, 
  //   '/app/Market': TechStripper,
  //   '/app/SquadDamageDisplay': SquadDamageDisplay,
  //   '/app/LootSplitter': LootSplitter,
  //   '/app/ScrapCalculator': ScrapCalculator,
    
  // },
  // ...
};
</script>

<style>
.button-style {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  flex: auto;
  margin: 10px;
}

.button-style:hover {
  background-color: #8398af;
}

.button-style:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(179, 185, 192, 0.5);
}
</style>