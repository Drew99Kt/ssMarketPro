import{a as x}from"./aug_values-_T9nN4cN.js";import{_ as B,T as N}from"./TopNavBar-qMHGMTt-.js";import{c as o,a as S,b as t,w as V,v as y,F as D,r as A,o as c,e as C,t as b,g as F,d as U}from"./index-INXuoLOC.js";const z={components:{TopNavBar:N},data(){return{inputData:`Qa'ik Urk'qii Akk'oj
Twisted Tesla Augmenter
Selenite Augmenter
Qa'ik Banu Akk'oj`,rawAugValues:x,outputData:[],checked:!1,success_msg:[]}},methods:{parseData(){var f=this.outputData=[],s=this.success_msg=[],k=x.map(function(e,r,m){var a=e.stats.includes(",")?e.stats.split(","):[e.stats];return{name:e.name,stats:a.map(function(l){var u;if(u=l.match(/([a-zA-Z ]+)\s([\-\+0-9]+%?)/))return{name:u[1].trim()+(l.includes("%")?"":"_offset"),value:parseFloat(u[2].trim().match(/([\-\+][0-9]+)%?/)[1])}}),tech:e.tech}}),i=this.inputData.split(`
`).map(e=>e.trim()).filter(e=>e!=="");[i].forEach(function(e){var r=new Object,m=function(n,g){return g.stats.forEach(function(_){n[_.name]=(n[_.name]?n[_.name]:0)+_.value}),n},a=e.map(function(n){return k.find(function(g){return g.name==n})}),l=`Unknown Augmenters:

`,u=!1;for(let n=0;n<a.length;n++)a[n]==null?(l+=i[n]+`
`,u=!0):s.push(i[n]);u&&(console.log(l),alert(l)),a.filter(n=>n!==void 0).forEach(function(n){r=m(r,n)});var w=[],v=Object.keys(r);v.sort();for(var h=0;h<v.length;h++){var d=v[h],p=r[d],T=d.includes("_offset")?"":"%",E=d=="Electric Tempering"?-p:p;w.push({name:d,value:(p>0?"+":"")+p+T,raw_value:E})}f=w}),this.outputData=f,this.success_msg=s}}},I=t("div",{class:"wip"},"WIP",-1),O=t("div",{class:"container"},"WIP Augmenter Calculator (Exact name).",-1),P=t("br",null,null,-1),Q={class:"container"},W=t("br",null,null,-1),q=t("br",null,null,-1),L=t("br",null,null,-1),M={class:"table"},Z=t("thead",null,[t("tr",null,[t("th",null,"Stat Name"),t("th",null,"Stat Value")])],-1),j=t("br",null,null,-1),G=t("br",null,null,-1);function H(f,s,k,i,e,r){const m=U("TopNavBar");return c(),o(D,null,[S(m),I,O,P,t("div",Q,[t("button",{onClick:s[0]||(s[0]=(...a)=>r.parseData&&r.parseData(...a))},"Augmenter Sum "),V(t("textarea",{"onUpdate:modelValue":s[1]||(s[1]=a=>e.inputData=a),placeholder:"Enter your augmenter combo (Exact names):"},null,512),[[y,e.inputData]]),(c(!0),o(D,null,A(e.success_msg,a=>(c(),o("text",null,[C(b(a)+" ",1),W]))),256)),t("div",null,[q,L,t("table",M,[Z,t("tbody",null,[(c(!0),o(D,null,A(e.outputData,a=>(c(),o("tr",null,[t("td",null,b(a.name),1),t("td",{style:F({color:a.raw_value>0?"green":a.raw_value<0?"red":"grey"})},b(a.value),5)]))),256))])]),j,G])])],64)}const X=B(z,[["render",H]]);export{X as default};
