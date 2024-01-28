<template>
    <TopNavBar />
    <div class="container">
        <textarea v-model="inputData" placeholder="Enter data" @input="processData"></textarea>
      
      <h2>Recorded damage for this squad</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>DPS</th>
            <th>Total Damage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in damageData" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.dps }}</td>
            <td>{{ entry.totalDamage }}</td>
          </tr>
        </tbody>
      </table>
  
      <h2>Recorded healing for this squad</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>HPS</th>
            <th>Total Healing</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in healingData" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.hps }}</td>
            <td>{{ entry.totalHealing }}</td>
          </tr>
        </tbody>
      </table>
  
      <h2>Top tanking for this squad</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Tanking</th>
            <th>Percent</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in tankingData" :key="entry.id">
            <td>{{ entry.name }}</td>
            <td>{{ entry.totalTanking }}</td>
            <td>{{ entry.percent }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import TopNavBar from './../TopNavBar.vue';
  export default {
    name: 'SquadDamageDisplay',
    components: {
      TopNavBar,
    },
    data() {
      return {
        inputData: [],
        damageData: [],
        healingData: [],
        tankingData: []
      };
    },
    methods: {
      processData() {
        console.log("InputData");
        console.log(this.inputData);
        var lines = this.inputData.split('\n');
        console.log("Lines");
        console.log(lines);
        const damageTableStartIndex = lines.findIndex(line => line.startsWith('Recorded damage for this squad:'));
        const healingTableStartIndex = lines.findIndex(line => line.startsWith('Recorded healing for this squad:'));
        const tankingTableStartIndex = lines.findIndex(line => line.startsWith('Top tanking for this squad:'));
        console.log("damageIndex");
        console.log(damageTableStartIndex);
        console.log("HealingIndex");
        console.log(healingTableStartIndex);
        console.log("TankingIndex");
        console.log(tankingTableStartIndex);
        if (damageTableStartIndex !== -1) {
            console.log("damage");
          this.damageData = this.parseDamageTable(lines.slice(damageTableStartIndex + 1, healingTableStartIndex !== -1 ? healingTableStartIndex : tankingTableStartIndex));
        }
  
        if (healingTableStartIndex !== -1) {
            console.log("healing");
          this.healingData = this.parseHealingTable(lines.slice(healingTableStartIndex + 1, tankingTableStartIndex !== -1 ? tankingTableStartIndex : lines.length));
        }
  
        if (tankingTableStartIndex !== -1) {
            console.log("tanking");
          this.tankingData = this.parseTankingTable(lines.slice(tankingTableStartIndex + 1, lines.length));
        }
      },
      parseDamageTable(lines) {
        const data = [];
        for (const line of lines) {
            console.log(line);
            console.log(lines);
            if (line.startsWith('Active combat duration:')) {
            continue;
            }
            if(line === ''){
                continue;
            }
            const [name, dpsAndTotalDamage] = line.split(':').map(item => item.trim());
            const [dps, totalDamage] = dpsAndTotalDamage.split(/[(](.*)[)]/).map(item => item.trim());
            data.push({ name, dps, totalDamage });
        }
        return data;
        },
      parseHealingTable(lines) {
        console.log("xxxxxxxxxxxxxxxxxxxx");
        const data = [];
        for (const line of lines) {

          if (line.startsWith('Active combat duration:')) {
            continue;
          }
          if(line === ''){
                continue;
            }
          console.log(line);
            console.log("xxxxxxxxxxxxxxxxxxxx");
          const [name, healingAndTotalHealing] = line.split(':').map(item => item.trim());
          const [hps, totalHealing] = healingAndTotalHealing.split(/[(](.*)[)]/).map(item => item.trim());
          data.push({ name, hps, totalHealing });
        }
        return data;
      },
      parseTankingTable(lines) {
        const data = [];
        for (const line of lines) {
          if (line.startsWith('Active combat duration:')) {
            continue;
          }
          if(line === ''){
                continue;
            }
          const [name, totalTankingAndPercent] = line.split(':').map(item => item.trim());
          const [totalTanking, percent] = totalTankingAndPercent.split(/[(](.*)[)]/).map(item => item.trim());
          data.push({ name, totalTanking, percent });

        }
        return data;
      }
    }
  };
  </script>
  
  <style>
  textarea {
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  border: 1px solid black;
}

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>