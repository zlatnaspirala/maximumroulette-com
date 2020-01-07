/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var browser = new DETECTBROWSER();

// Fix for firefox
E("main").style.height = window.innerHeight + "px";

if (browser.NAME.indexOf("firefox") != -1) {
  console.log("Optimise FF");

  window.onresize = function (e) {
    E("main").style.height = window.innerHeight + "px";
  };

} else if (browser.NAME.indexOf("chrome") != -1) {
  console.log("Optimise CHROME");

  window.onresize = function(e) {

    E("main").style.height =  "100%";

  };

}

