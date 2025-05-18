<template>
    <div id="banner">
        <div id="banner-content">
            SSMarketPro is being rewritten <a href="https://www.sonatabrain.com">here</a>. Stay tuned! - Yuugh
        </div>
    </div>
    <div>
      <router-link to="/market" tag="button" class="button-style">Market Tool</router-link>
      <router-link to="/techstripper" tag="button" class="button-style">TechStripper Tool</router-link>
      <router-link to="/squaddamagedisplay" tag="button" class="button-style">Squad Damage Display</router-link>
      <router-link to="/lootsplitter" tag="button" class="button-style">Loot Splitter</router-link>
      <router-link to="/scrapcalculator" tag="button" class="button-style">Scrap Calculator</router-link>
      <router-link to="/assetXMLPrettify" tag="button" class="button-style">Asset XML Prettify</router-link>
      <router-link to="/augcalculator" tag="button" class="button-style">Aug Calculator</router-link>
      <router-link to="/augfinder" tag="button" class="button-style">Aug Finder</router-link>
      <router-link to="/galaxyViewer" tag="button" class="button-style">Galaxy Viewer</router-link>
      <router-link to="/warpNavigator" tag="button" class="button-style">Warp Nav</router-link>
      <router-link to="/buildhelper" tag="button" class="button-style">Build Helper</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopNavBar',
  }
  </script>
  
  <style>
  .button-style {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    flex: auto;
    margin: 10px;
  }
  
  .button-style:hover {
    background-color: #8398af;
  }
  
  .button-style:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(179, 185, 192, 0.5);
  }

:root {
  color-scheme: light dark;
}

div#banner {
  /*position: absolute;
  top: 0;
  left: 0;
  /*background-color: #DDEEEE; */
  width: 100%;
}
div#banner-content {
  width: 800px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #000;
  font-size: small;
}
  </style>