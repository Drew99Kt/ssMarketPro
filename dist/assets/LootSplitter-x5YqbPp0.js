import{_ as f,T as g}from"./TopNavBar-QMmgb-cS.js";import{c as i,a as x,b as r,w as d,v as p,F as m,r as v,o as u,d as B}from"./index-Zig_OVjJ.js";const _={name:"LootSplitter",components:{TopNavBar:g},data(){return{inputData:`1 Hanukkah Menorah
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
`).filter(o=>o.trim()!==""&&!o.startsWith("(Empty")),t=s.map(o=>{const e=o.match(/\d+/g);return console.log("Before"),console.log(o),console.log("After"),e&&e.length>=2&&(o=o.replace(e[0],"").trim(),console.log(o),console.log("Qty amount"),console.log(e[1])),o}),l=this.shuffleArray(t),c=Math.ceil(t.length/this.numberOfBoxes),n=[];let a=0;for(let o=0;o<this.numberOfBoxes;o++){const e=Math.min(a+c,s.length);n.push(l.slice(a,e)),a=e}this.outputData=n},shuffleArray(s){for(let t=s.length-1;t>0;t--){const l=Math.floor(Math.random()*(t+1));[s[t],s[l]]=[s[l],s[t]]}return s}}},b=r("div",{class:"attribution"},"credits to grand.plat",-1),C=r("div",{class:"wip"},"WIP",-1),D=r("div",{class:"container"},"Currently this will only split the items randomly",-1),y=r("br",null,null,-1),k={class:"container"},M=r("label",{for:"numberOfBoxes"},"Number of Boxes:",-1),O=["value"];function L(s,t,l,c,n,a){const o=B("TopNavBar");return u(),i(m,null,[x(o),b,C,D,y,r("div",k,[M,d(r("input",{type:"number",id:"numberOfBoxes","onUpdate:modelValue":t[0]||(t[0]=e=>n.numberOfBoxes=e)},null,512),[[p,n.numberOfBoxes]]),r("button",{onClick:t[1]||(t[1]=(...e)=>a.parseData&&a.parseData(...e))},"Parse Data"),d(r("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>n.inputData=e),placeholder:"Enter data"},null,512),[[p,n.inputData]]),(u(!0),i(m,null,v(n.outputData,(e,h)=>(u(),i("div",{key:h,class:"output-box"},[r("textarea",{value:e.join(`
`),readonly:""},null,8,O)]))),128))])],64)}const N=f(_,[["render",L]]);export{N as default};
