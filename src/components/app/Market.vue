<template>
  <TopNavBar />
  <div class="container">
    <textarea v-model="textInput" placeholder="Enter text separated by |"></textarea>
    <button @click="resetNumbers">Reset Numbers</button>
    <table>
      <thead class="sticky-header">
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex" :class="{ 'greyed-row': rowIndex % 2 === 0 }">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" contenteditable @input="updateCell(rowIndex, cellIndex, $event.target.innerText)">{{ cell }}</td>
        </tr>
      </tbody>
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
  name: 'Market',
  components: {
    TopNavBar,
  },
  data () {
    return {
      textInput: `sellprice | buyprice | maxbuy | maxsell | maxmake | name
500 | 200 | 200 | 100 | 0 | Workers
100 | 88 | 10011 | 0 | 0 | Peasants
1500 | 1250 | 2000 | 1000 | 0 | Nuclear Waste`,
      headers: [],
      rows: [],
      outputText: ''
    };
  },
  mounted() {
    this.parseShopData();
    this.updateOutputText();
  },
  watch: {
    textInput() {
      this.parseShopData();
      this.updateOutputText();
    },
    rows: {
      deep: true,
      handler() {
        this.updateOutputText();
      }
    }
  },
  methods: {
    parseShopData() {
      const lines = this.textInput.split('\n').filter(line => line.trim() !== '');
      if (lines.length > 1) {
        this.headers = lines[0].split('|').map(header => header.trim());
        this.rows = lines.slice(1).map(line => line.split('|').map(cell => cell.trim()));
      } else {
        this.headers = [];
        this.rows = [];
      }
    },
resetNumbers() {
  this.rows.forEach((row, rowIndex) => { // Add rowIndex parameter
    row.forEach((cell, cellIndex) => {
      if (!isNaN(cell)) {
        this.rows[rowIndex][cellIndex] = 0;
      }
    });
  });
  this.updateOutputText();
},
    updateOutputText() {
      const outputRows = [this.headers, ...this.rows];
      this.outputText = outputRows.map(row => row.join(' | ')).join('\n');
    }, 

    updateCell(rowIndex, cellIndex, value) {
    if (!isNaN(value)) {
      value = Number(value);
    }
    this.rows[rowIndex][cellIndex] = value;
    this.updateOutputText();
  },
    updateCell(rowIndex, cellIndex, value) {
      this.rows[rowIndex][cellIndex] = value;
      this.updateOutputText();
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
  </style>