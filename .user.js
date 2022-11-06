// ==UserScript==
// @name         AutoTrimps-Rabisu
// @version      1.0-Rabisu
// @namespace    https://EnragedRabisu.github.io/AutoTrimps
// @updateURL    https://EnragedRabisu.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, Rabisu
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *EnragedRabisu.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest 
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Rabisu';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://EnragedRabisu.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
