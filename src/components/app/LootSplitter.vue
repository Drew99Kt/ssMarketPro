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
        numberOfBoxes: 0,
        inputData: '',
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
  .wip {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 40px;
  }
  
  .output-box {
    margin-top: 10px;
  }
  </style>