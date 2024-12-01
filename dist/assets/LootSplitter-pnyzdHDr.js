import{_ as f,T as x}from"./TopNavBar-CbBzErBY.js";import{c as i,a as g,b as r,w as d,v as p,F as m,r as B,o as u,d as v}from"./index-g_zw9K5x.js";const b={name:"LootSplitter",components:{TopNavBar:x},data(){return{inputData:`1 Hanukkah Menorah
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
23 1 Paradox Shield`,numberOfBoxes:0,outputData:[]}},methods:{parseData(){const s=this.inputData.split(`
`).filter(o=>o.trim()!==""&&!o.startsWith("(Empty")),e=s.map(o=>{const t=o.match(/\d+/g);return console.log("Before"),console.log(o),console.log("After"),t&&t.length>=2&&(o=o.replace(t[0],"").trim(),console.log(o),console.log("Qty amount"),console.log(t[1])),o}),l=this.shuffleArray(e),c=Math.ceil(e.length/this.numberOfBoxes),n=[];let a=0;for(let o=0;o<this.numberOfBoxes;o++){const t=Math.min(a+c,s.length);n.push(l.slice(a,t)),a=t}this.outputData=n},shuffleArray(s){for(let e=s.length-1;e>0;e--){const l=Math.floor(Math.random()*(e+1));[s[e],s[l]]=[s[l],s[e]]}return s}}},C=r("div",{class:"wip"},"WIP",-1),_=r("div",{class:"container"},"Currently this will only split the items randomly",-1),D=r("br",null,null,-1),y={class:"container"},k=r("label",{for:"numberOfBoxes"},"Number of Boxes:",-1),M=["value"];function O(s,e,l,c,n,a){const o=v("TopNavBar");return u(),i(m,null,[g(o),C,_,D,r("div",y,[k,d(r("input",{type:"number",id:"numberOfBoxes","onUpdate:modelValue":e[0]||(e[0]=t=>n.numberOfBoxes=t)},null,512),[[p,n.numberOfBoxes]]),r("button",{onClick:e[1]||(e[1]=(...t)=>a.parseData&&a.parseData(...t))},"Parse Data"),d(r("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>n.inputData=t),placeholder:"Enter data"},null,512),[[p,n.inputData]]),(u(!0),i(m,null,B(n.outputData,(t,h)=>(u(),i("div",{key:h,class:"output-box"},[r("textarea",{value:t.join(`
`),readonly:""},null,8,M)]))),128))])],64)}const T=f(b,[["render",O]]);export{T as default};
