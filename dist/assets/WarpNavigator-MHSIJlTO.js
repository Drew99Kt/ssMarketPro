import{_ as T,T as B}from"./TopNavBar-SiNsbVjL.js";import{c as v,a as y,b as t,w as g,v as W,F as b,r as k,o as _,t as I,d as P}from"./index-9Ssuykj8.js";const U={components:{TopNavBar:B},data(){return{inputWarps:"",inputDestination:"",outputData:[]}},methods:{computeClosestWarps(){var o="",l=0,p=new Map,x=this;this.inputWarps.split(`
`).filter(e=>!e.includes("Unexplored")).filter(e=>e!="").map(e=>e.split("	")[0]).forEach(e=>{p.set(e,0)}),this.inputDestination.includes("@")?o=this.inputDestination.substring(this.inputDestination.lastIndexOf("[")+1,this.inputDestination.indexOf("]")):o=this.inputDestination,o!=""&&Promise.all([fetch("https://www.starsonata.com/webapi/galaxies/v1").then(e=>e.json())]).then(e=>{var u=e[0].galaxies,c=new Map,i=new Set,r={},d=[],D=new Set;for(var h in u){var s=u[h];if(delete s.ID,delete s.df,delete s.lastUpdate,delete s.layer,delete s.mapable,delete s.x,delete s.y,delete s.special,delete s.anchor,delete s.aibases,delete s.owningTeam,delete s.protected,delete s.userbases,s.name.startsWith("DG ")){i.add(parseInt(h));continue}s.name==o&&(l=parseInt(h)),c.set(parseInt(h),s)}if(c.forEach(function(a,n,w){var C=a.links.filter(E=>!i.has(E));a.links=C,p.has(a.name)&&p.set(a.name,n),n==l?r[n]=0:r[n]=1/0,w.set(n,a),d.push(n)}),l!=0){for(;d.length;){d.sort((a,n)=>r[a]-r[n]);var f=d.shift();if(r[f]===1/0)break;D.add(f);var N=c.get(f);N.links.forEach(function(a){if(a=parseInt(a),!D.has(a)){var n=r[f]+1;n<r[a]&&(r[a]=n)}})}var m=[];p.forEach(function(a,n,w){m.push({name:n,distance:r[a]})}),m.sort((a,n)=>a.distance-n.distance),x.outputData=m}})},computePath(){}}},V=t("div",{class:"wip"},"WIP",-1),M=t("div",{class:"container"},"WIP Warp Navigator.",-1),S=t("br",null,null,-1),F={class:"container"},G=t("br",null,null,-1),O=t("br",null,null,-1),j={class:"table"},L=t("thead",null,[t("tr",null,[t("th",null,"Galaxy"),t("th",null,"Distance")])],-1),q=t("br",null,null,-1),z=t("br",null,null,-1);function A(o,l,p,x,e,u){const c=P("TopNavBar");return _(),v(b,null,[y(c),V,M,S,t("div",F,[t("button",{onClick:l[0]||(l[0]=(...i)=>u.computeClosestWarps&&u.computeClosestWarps(...i))},"Closest Warp Calculate"),g(t("textarea",{class:"list-text-area","onUpdate:modelValue":l[1]||(l[1]=i=>e.inputWarps=i),placeholder:"Enter your transwarp dialog output:"},null,512),[[W,e.inputWarps]]),g(t("textarea",{class:"single-text-area","onUpdate:modelValue":l[2]||(l[2]=i=>e.inputDestination=i),placeholder:"Enter your target galaxy:"},null,512),[[W,e.inputDestination]]),t("div",null,[G,O,t("table",j,[L,t("tbody",null,[(_(!0),v(b,null,k(e.outputData,i=>(_(),v("tr",null,[t("td",null,I(i.name),1),t("td",null,I(i.distance),1)]))),256))])]),q,z])])],64)}const K=T(U,[["render",A]]);export{K as default};
