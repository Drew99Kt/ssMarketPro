import{a as C}from"./aug_values-ar6jcq9S.js";import{_ as E,T as H}from"./TopNavBar-CbBzErBY.js";import{c as T,a as x,b as o,e as f,w as v,h as d,F as k,r as V,o as S,t as R,i as _,d as M}from"./index-g_zw9K5x.js";const P={components:{TopNavBar:H},data(){return{selected_first_sort_key:null,selected_second_sort_key:null,selected_third_sort_key:null,selected_min_tech:"0",selected_max_tech:"23",rawAugValues:C,outputData:[]}},methods:{parseData(){this.outputData=[];var p=C.map(function(e,l,t){var g=e.stats.includes(",")?e.stats.split(","):[e.stats];return{name:e.name,stats:g.map(function(c){var r;if(r=c.match(/([a-zA-Z ]+)\s([\-\+0-9]+%?)/))return{name:r[1].trim()+(c.includes("%")?"":"_offset"),value:parseFloat(r[2].trim().match(/([\-\+][0-9]+)%?/)[1])}}),tech:e.tech}}),n=this.selected_min_tech;p=p.filter(function(e){return e.tech>=n});var D=this.selected_max_tech;p=p.filter(function(e){return e.tech<=D});var h=this.selected_first_sort_key,a=this.selected_second_sort_key,u=this.selected_third_sort_key;function s(e,l,t){var g=e.stats.find(y=>y.name==t),c=l.stats.find(y=>y.name==t),r=g!=null?g.value:0,m=c!=null?c.value:0;if(r==m)return 0;if(r<m)return-1;if(r>m)return 1}function i(e,l){if(h!=null){var t=s(e,l,h);if(t!=0)return t}if(a!=null){var t=s(e,l,a);if(t!=0)return t}if(u!=null){var t=s(e,l,u);if(t!=0)return t}return l.tech-e.tech}p.sort(i),this.outputData=p.map(function(e){function l(t){return t.name.includes("_offset")?t.value>0?t.name.replace(/_offset/g,"")+" +"+t.value:t.name.replace(/_offset/g,"")+" "+t.value:t.value>0?t.name+" +"+t.value+"%":t.name+" "+t.value+"%"}return{tech:e.tech,name:e.name,stats:e.stats.map(t=>l(t)).join(", ")}}),this.outputData.reverse()}}},W=o("div",{class:"wip"},"WIP",-1),b=o("div",{class:"container"},"WIP Augmenter Finder.",-1),w=o("br",null,null,-1),F={class:"container"},I=_('<option value="Capacity">Capacity</option><option value="Critical Hit Chance">Critical Hit Chance</option><option value="Critical Hit Strength">Critical Hit Strength</option><option value="Damage">Damage</option><option value="Docking Speed">Docking Speed</option><option value="Electrical Tempering">Electrical Tempering</option><option value="Electric Tempering">Electric Tempering</option><option value="Energy Charge">Energy Charge</option><option value="Energy Max">Energy Max</option><option value="Hostility">Hostility</option><option value="Inertial Dampening">Inertial Dampening</option><option value="Multifiring_offset">Multifiring_offset</option><option value="Projectile Velocity">Projectile Velocity</option><option value="Radar">Radar</option><option value="Range">Range</option><option value="Rate of Fire">Rate of Fire</option><option value="Resistance to Damage">Resistance to Damage</option><option value="Shield Max">Shield Max</option><option value="Shield Recovery">Shield Recovery</option><option value="Speed">Speed</option><option value="Speed_offset">Speed_offset</option><option value="Thrust">Thrust</option><option value="Tracking">Tracking</option><option value="Tractor Power">Tractor Power</option><option value="Tractor Range">Tractor Range</option><option value="Transference Power">Transference Power</option><option value="Turning">Turning</option><option value="Visibility">Visibility</option><option value="Weapon Hold">Weapon Hold</option><option value="Weapons Slots_offset">Weapons Slots_offset</option><option value="Weight">Weight</option>',31),N=[I],A=o("br",null,null,-1),B=_('<option value="Capacity">Capacity</option><option value="Critical Hit Chance">Critical Hit Chance</option><option value="Critical Hit Strength">Critical Hit Strength</option><option value="Damage">Damage</option><option value="Docking Speed">Docking Speed</option><option value="Electrical Tempering">Electrical Tempering</option><option value="Electric Tempering">Electric Tempering</option><option value="Energy Charge">Energy Charge</option><option value="Energy Max">Energy Max</option><option value="Hostility">Hostility</option><option value="Inertial Dampening">Inertial Dampening</option><option value="Multifiring_offset">Multifiring_offset</option><option value="Projectile Velocity">Projectile Velocity</option><option value="Radar">Radar</option><option value="Range">Range</option><option value="Rate of Fire">Rate of Fire</option><option value="Resistance to Damage">Resistance to Damage</option><option value="Shield Max">Shield Max</option><option value="Shield Recovery">Shield Recovery</option><option value="Speed">Speed</option><option value="Speed_offset">Speed_offset</option><option value="Thrust">Thrust</option><option value="Tracking">Tracking</option><option value="Tractor Power">Tractor Power</option><option value="Tractor Range">Tractor Range</option><option value="Transference Power">Transference Power</option><option value="Turning">Turning</option><option value="Visibility">Visibility</option><option value="Weapon Hold">Weapon Hold</option><option value="Weapons Slots_offset">Weapons Slots_offset</option><option value="Weight">Weight</option>',31),U=[B],j=o("br",null,null,-1),L=_('<option value="Capacity">Capacity</option><option value="Critical Hit Chance">Critical Hit Chance</option><option value="Critical Hit Strength">Critical Hit Strength</option><option value="Damage">Damage</option><option value="Docking Speed">Docking Speed</option><option value="Electrical Tempering">Electrical Tempering</option><option value="Electric Tempering">Electric Tempering</option><option value="Energy Charge">Energy Charge</option><option value="Energy Max">Energy Max</option><option value="Hostility">Hostility</option><option value="Inertial Dampening">Inertial Dampening</option><option value="Multifiring_offset">Multifiring_offset</option><option value="Projectile Velocity">Projectile Velocity</option><option value="Radar">Radar</option><option value="Range">Range</option><option value="Rate of Fire">Rate of Fire</option><option value="Resistance to Damage">Resistance to Damage</option><option value="Shield Max">Shield Max</option><option value="Shield Recovery">Shield Recovery</option><option value="Speed">Speed</option><option value="Speed_offset">Speed_offset</option><option value="Thrust">Thrust</option><option value="Tracking">Tracking</option><option value="Tractor Power">Tractor Power</option><option value="Tractor Range">Tractor Range</option><option value="Transference Power">Transference Power</option><option value="Turning">Turning</option><option value="Visibility">Visibility</option><option value="Weapon Hold">Weapon Hold</option><option value="Weapons Slots_offset">Weapons Slots_offset</option><option value="Weight">Weight</option>',31),z=[L],Z=o("br",null,null,-1),q=_('<option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option>',24),G=[q],J=_('<option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option>',24),K=[J],O=o("br",null,null,-1),Q=o("br",null,null,-1),X=o("br",null,null,-1),Y={class:"table"},$=o("thead",null,[o("tr",null,[o("th",null,"TL"),o("th",null,"Name"),o("th",null,"Stats")])],-1);function oo(p,n,D,h,a,u){const s=M("TopNavBar");return S(),T(k,null,[x(s),W,b,w,o("div",F,[o("label",null,[f("1st Stat "),v(o("select",{"onUpdate:modelValue":n[0]||(n[0]=i=>a.selected_first_sort_key=i)},N,512),[[d,a.selected_first_sort_key]])]),A,o("label",null,[f("2nd Stat "),v(o("select",{"onUpdate:modelValue":n[1]||(n[1]=i=>a.selected_second_sort_key=i)},U,512),[[d,a.selected_second_sort_key]])]),j,o("label",null,[f("3rd Stat "),v(o("select",{"onUpdate:modelValue":n[2]||(n[2]=i=>a.selected_third_sort_key=i)},z,512),[[d,a.selected_third_sort_key]])]),Z,o("label",null,[f("Min/Max TL "),v(o("select",{"onUpdate:modelValue":n[3]||(n[3]=i=>a.selected_min_tech=i)},G,512),[[d,a.selected_min_tech]]),v(o("select",{"onUpdate:modelValue":n[4]||(n[4]=i=>a.selected_max_tech=i)},K,512),[[d,a.selected_max_tech]])]),O,o("button",{onClick:n[5]||(n[5]=(...i)=>u.parseData&&u.parseData(...i))},"Augmenter Finder "),o("div",null,[Q,X,o("table",Y,[$,o("tbody",null,[(S(!0),T(k,null,V(a.outputData,i=>(S(),T("tr",null,[o("td",null,R(i.tech),1),o("td",null,R(i.name),1),o("td",null,R(i.stats),1)]))),256))])])])])],64)}const no=E(P,[["render",oo]]);export{no as default};
