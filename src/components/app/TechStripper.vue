<template>
  <TopNavBar />
  <div class="attribution">credits to grand.plat</div>
    <div class="container">
      <textarea v-model="textInput" placeholder="Paste items here"></textarea>

      
      <table>
        <thead class="sticky-header">

        </thead>
      </table>
      <div class="output">
        <h3>Output:</h3>
        <textarea v-model="outputText" readonly></textarea>
      </div>
    </div>
    </template>
    
    <script>
    import TopNavBar from './../TopNavBar.vue';
    export default {
      name: 'TechStripper',
      components: {
        TopNavBar,
      },
      data() {
        return {
 
            textInput: `1 Hanukkah Menorah
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
          outputText: ''
        };
      },
      mounted() {
        this.updateOutputText();
      },
      watch: {
        textInput() {
          this.updateOutputText();
        }
      },
      methods: {
        updateOutputText() {
    const lines = this.textInput.split('\n').filter(line => line.trim() !== '');
    if (lines.length > 1) {

      const outputLines = lines.filter(line => {
        const cells = line.split(/\s+/).filter(cell => cell.trim() !== '');
        return cells && !line.includes('(Empty');;
      }).map(line => {
        const cells = line.split(/\s+/).filter(cell => cell.trim() !== '');
        if(parseInt(cells[0]) && parseInt(cells[1])){
          cells.shift();
        }
        cells.forEach((c, index) => {
        if (index === 0) {
            cells[index] = c + '\t'; // Add a tab to the first cell
        } else if (index !== cells.length - 1) {
            cells[index] = c + ' '; // Add a space to the cells except the last one
        }
        });
        return cells.join('');
      });
      this.outputText = outputLines.join('\n');
    } else {
      this.outputText = '';
    }
  }
      }
    };
    </script>
    
    <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
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
  
  .greyed-row {
    /* background-color: #f2f2f2; */
  }
  
  .output {
    margin-top: 20px;
  }
  
  .output textarea {
    width: 300%;
  
   
  
  }
  
  .sticky-header {
    position: sticky;
    top: 0;
    /* background-color: white; */
  }

.attribution {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
  font-size: small;
  /* color: grey; */
}

</style>