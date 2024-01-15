<template>
    <div class="wip">WIP</div>
    <div class="container">Currently this will only split the items randomly</div>
    <br>
    <div class="container">
      <label for="numberOfBoxes">Number of Boxes:</label>
      <input type="number" id="numberOfBoxes" v-model="numberOfBoxes">
      <button @click="parseData">Parse Data</button>
  
      <textarea v-model="inputData" placeholder="Enter data"></textarea>
  
      <div v-for="(item, index) in outputData" :key="index" class="output-box">
        <textarea :value="item.join('\n')" readonly></textarea>
      </div>
    </div>
  </template>
  
  <script>
  export default {
   

    data() {
      return {
        inputData: `1 Hanukkah Menorah
4 Perilium
1 Shrinkonium
13 Ace Pest Control Crate
2 Ammo Crate - Corrupted Missile
3 Corrupted Locker
6 Promethium Matrix Crystal
22 1 Hazardous Ruthless Burst[Overclocked]
22 1 Corrupted Cyborg Reach[Superconducting]
22 1 Corrupted Cyborg Reach[Evil]
22 1 Hazardous PUT-TY Burst
23 1 The Five Piece
22 4 Corrupted Conversion Ray
22 1 Corrupted Conversion Ray[Reinforced]
22 3 Gargantuan Gigo Laser
22 1 Hazardous Oomping Burst
23 2 M51 Benefactor
23 1 Paradox Shield`,
        numberOfBoxes: 0,
 
        outputData: [],
      };
    },
    methods: {
      parseData() {
        const lines = this.inputData.split('\n').filter(line => line.trim() !== '' && !line.startsWith('(Empty'));
        const lines2=[];
        lines.forEach(line => {
            console.log("Before");
            console.log(line);
            line = line.split('\t');

            if (line.length >= 3) {
                line.splice(0, 1);
                lines2.push(line);
            }else{
                lines2.push(line);
            }

            line = line.join('\t');
            
            console.log("After");
            console.log(line);
        });
        lines2.forEach(line => {
            console.log(line);
        });
        
        
        const shuffledLines = this.shuffleArray(lines);
        const boxSize = Math.ceil(lines.length / this.numberOfBoxes);
        const slicedLines = [];
        let startIndex = 0;
       


        for (let i = 0; i < this.numberOfBoxes; i++) {
          const endIndex = Math.min(startIndex + boxSize, lines.length);
          slicedLines.push(shuffledLines.slice(startIndex, endIndex));
          startIndex = endIndex;
        }
  
        this.outputData = slicedLines;
      },
      shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      },
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .output-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    width: 75%;
  }
  </style>