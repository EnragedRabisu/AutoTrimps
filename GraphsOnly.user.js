// ==UserScript==
// @name         AT-Rabisu-GraphsOnly
// @namespace    https://github.com/EnragedRabisu/AutoTrimps
// @version      2.6.1-Rabisu
// @updateURL    https://github.com/EnragedRabisu/AutoTrimps/GraphsOnly.user.js
// @description  Graphs Module (only) from AutoTrimps
// @author       zininzinin, spindrjr, belaith, ishakaru, genBTC, Zek, Rabisu
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @grant        none
// ==/UserScript==
var script = document.createElement('script');
script.id = 'AutoTrimps-Graphs';
script.src = 'https://EnragedRabisu.github.io/AutoTrimps/GraphsOnly.js';
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
