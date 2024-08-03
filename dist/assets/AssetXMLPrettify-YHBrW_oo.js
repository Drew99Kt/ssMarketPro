import{_ as S,T as D}from"./TopNavBar-qBwt0ZKV.js";import{c as p,a as A,b as t,w as h,v as g,F as v,r as L,o as k,t as m,d as R}from"./index-7Vizkf1Q.js";const I={name:"LootSplitter",components:{TopNavBar:D},data(){return{inputData:"",filterString:"",outputData:[]}},methods:{parseData(){var f=this.inputData.split(`
`),a=this.filterString.toLowerCase(),u=[],c="",o="",l="",r="",e="",_=[{mask:1,mod:"Miniaturized"},{mask:2,mod:"Composite"},{mask:4,mod:"Shielded"},{mask:8,mod:"Extended"},{mask:16,mod:"Scoped"},{mask:32,mod:"Dynamic"},{mask:64,mod:"Amorphous"},{mask:128,mod:"Radioactive"},{mask:256,mod:"Sleek"},{mask:512,mod:"Resonating"},{mask:1024,mod:"Docktastic"},{mask:2048,mod:"Intelligent"},{mask:4096,mod:"Amplified"},{mask:8192,mod:"Rewired"},{mask:16384,mod:"Workhorse"},{mask:32768,mod:"Evil"},{mask:65536,mod:"Superconducting"},{mask:131072,mod:"Transcendental"},{mask:262144,mod:"Overclocked"},{mask:524288,mod:"Forceful"},{mask:1048576,mod:"Gyroscopic"},{mask:2097152,mod:"Buffered"},{mask:4194304,mod:"Super Intelligent"},{mask:8388608,mod:"Reinforced"},{mask:16777216,mod:"Angelic"}];function x(s){var i="[",n=0;return _.forEach(function(d){s&d.mask&&(i=i+(n?"|":"")+d.mod,n=n+1)}),i=i+"]",i}f.forEach(function(s){if(s.includes("<HULL")&&(o="",c=/.*>(.*)<\/HULL>/g.exec(s)[1]),s.includes("<SHIP_ALIAS>")&&(o=/.*>(.*)<\/SHIP_ALIAS>/g.exec(s)[1]),!(a.length>0&&!s.toLowerCase().includes(a))&&s.includes("<ITEM ")){l=/.*nm="([a-zA-Z\-0-9\+\.,' \(\)&=:]*)"/g.exec(s)[1];const d=/.*m="([0-9]*)"/g;if(s.includes(" m=")){var i=parseInt(d.exec(s)[1]);r=x(i)}else r="";s.includes("quant=")?e=/.*quant="([0-9]*)"/g.exec(s)[1]:e=1,u.push({ship:c,shipAlias:o,itemCount:e,item:l,mods:r})}}),this.outputData=u}}},C=t("div",{class:"wip"},"WIP",-1),b=t("div",{class:"container"},"WIP Asset XML Prettify utility.",-1),B=t("br",null,null,-1),M={class:"container"},y=t("label",{for:"filterString"},"Filter string:",-1),N=t("br",null,null,-1),E={class:"table"},H=t("thead",null,[t("tr",null,[t("th",null,"Ship"),t("th",null,"Ship Alias"),t("th",null,"Item Count"),t("th",null,"Item"),t("th",null,"Mods")])],-1);function P(f,a,u,c,o,l){const r=R("TopNavBar");return k(),p(v,null,[A(r),C,b,B,t("div",M,[y,h(t("input",{type:"text",id:"filterString","onUpdate:modelValue":a[0]||(a[0]=e=>o.filterString=e)},null,512),[[g,o.filterString]]),N,t("button",{onClick:a[1]||(a[1]=(...e)=>l.parseData&&l.parseData(...e))},"Parse Data"),h(t("textarea",{"onUpdate:modelValue":a[2]||(a[2]=e=>o.inputData=e),placeholder:"Enter data"},null,512),[[g,o.inputData]]),t("table",E,[H,t("tbody",null,[(k(!0),p(v,null,L(o.outputData,e=>(k(),p("tr",null,[t("td",null,m(e.ship),1),t("td",null,m(e.shipAlias),1),t("td",null,m(e.itemCount),1),t("td",null,m(e.item),1),t("td",null,m(e.mods),1)]))),256))])])])],64)}const U=S(I,[["render",P]]);export{U as default};
