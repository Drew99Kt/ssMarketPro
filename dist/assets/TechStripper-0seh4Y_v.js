import{_ as c,T as d}from"./TopNavBar-PI0o7z2R.js";import{c as h,a as m,b as r,w as i,v as p,F as f,o as x,d as T}from"./index-Y8iyMetg.js";const _={name:"TechStripper",components:{TopNavBar:d},data(){return{textInput:`1 Hanukkah Menorah
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
    23 1 Paradox Shield`,outputText:""}},mounted(){this.updateOutputText()},watch:{textInput(){this.updateOutputText()}},methods:{updateOutputText(){const n=this.textInput.split(`
`).filter(o=>o.trim()!=="");if(n.length>1){const o=n.filter(s=>s.split(/\s+/).filter(t=>t.trim()!=="")&&!s.includes("(Empty")).map(s=>{const e=s.split(/\s+/).filter(t=>t.trim()!=="");return parseInt(e[0])&&parseInt(e[1])&&e.shift(),e.forEach((t,a)=>{a===0?e[a]=t+"	":a!==e.length-1&&(e[a]=t+" ")}),e.join("")});this.outputText=o.join(`
`)}else this.outputText=""}}},v=r("div",{class:"attribution"},"credits to grand.plat",-1),C={class:"container"},g=r("table",null,[r("thead",{class:"sticky-header"})],-1),B={class:"output"},k=r("h3",null,"Output:",-1);function y(n,o,s,e,t,a){const l=T("TopNavBar");return x(),h(f,null,[m(l),v,r("div",C,[i(r("textarea",{"onUpdate:modelValue":o[0]||(o[0]=u=>t.textInput=u),placeholder:"Paste items here"},null,512),[[p,t.textInput]]),g,r("div",B,[k,i(r("textarea",{"onUpdate:modelValue":o[1]||(o[1]=u=>t.outputText=u),readonly:""},null,512),[[p,t.outputText]])])])],64)}const O=c(_,[["render",y]]);export{O as default};
