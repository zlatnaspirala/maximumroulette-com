if (location.protocol !== "https:") {
  location.protocol = "https:";
}

// initial sub page
loadPage('home.html');

setTimeout(function() {
  showSlides(1)
}, 256)

// COMMON
/*
  visual js GE
  from init.js
*/

var E = function(id) {
  return document.getElementById(id);
};

/**
 * SAVE  Put the object into storage.
 * @example Usage : SAVE("MyObjectKey", myObject )
 * @function SAVE
 * @param {String} Name Name of localstorage key
 * @param {Any} Value Any object we can store.
 * @return {Any} What ever we are stored intro localStorage.
 */
function save(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj));
  console.log(JSON.stringify(obj));
}

/**
 * LOAD  Load a object from storage. Retrieve the object from storage
 * @example Usage : LOAD("MyObjectKey")
 * @function LOAD
 * @param {String} Name Name of localstorage key
 * @return {Any} What ever we are stored intro localStorage.
 */
function load(name) {
  if (localStorage.getItem(name) == "undefined" || localStorage.getItem(name) == null || localStorage.getItem(name) == "") {
    SYS.DEBUG.WARNING("error in loading localstorage object! name of object : name" + name + " , but value is " + localStorage.getItem(name));
    return false;
  } else {
    return JSON.parse(localStorage.getItem(name));
  }

}

function addScript(src) {
  var s = document.createElement("script");
  s.onload = function() {
    console.log(src + " Loaded.");
  };
  s.setAttribute("src", src);
  document.body.appendChild(s);
}

/**
 * This class will detect you device and browser and
 * store data. Instance already stored intro SYS.BROWSER
 * global object.
 * Access trow SYS.BROWSER
 *
 * @example var Browser = new DETECTBROWSER();
 * @class DETECTBROWSER
 * @constructor
 * @return {nothing}
 *
 */
function DETECTBROWSER() {
  var HREFF,
    HREFTXT = "unknown";
  this.NAVIGATOR = navigator.userAgent;
  var NAV = navigator.userAgent;
  var gecko,
    navIpad,
    operatablet,
    navIphone,
    navFirefox,
    navChrome,
    navOpera,
    navSafari,
    navandroid,
    mobile,
    navMozilla,
    navUbuntu,
    navLinux;
  navLinux = NAV.match(/Linux/gi);
  navUbuntu = NAV.match(/Ubuntu/gi);
  gecko = NAV.match(/gecko/gi);
  navOpera = (NAV.match(/Opera|OPR\//) ? true : false);
  operatablet = NAV.match(/Tablet/gi);
  navIpad = NAV.match(/ipad/gi);
  navIphone = NAV.match(/iphone/gi);
  navFirefox = NAV.match(/Firefox/gi);
  navMozilla = NAV.match(/mozilla/gi);
  navChrome = NAV.match(/Chrome/gi);
  navSafari = NAV.match(/safari/gi);
  navandroid = NAV.match(/android/gi);
  mobile = NAV.match(/mobile/gi);
  window["TYPEOFANDROID"] = 0;
  window["NOMOBILE"] = 0;

  var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
    var userAgent = navigator.userAgent.toLowerCase();
    if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1)) {
      console.log("ANDROID MOBILE");
    } else if ((userAgent.search("android") > -1) && !(userAgent.search("mobile") > -1)) {
      console.log(" ANDROID TABLET ");
      TYPEOFANDROID = 1;
    }

  } else {
    NOMOBILE = 1;
  }
  //  FIREFOX za android
  if (navFirefox && navandroid && TYPEOFANDROID == 0) {
    HREFF = "#";
    HREFTXT = "mobile_firefox_android";
  }
  //  FIREFOX za android T
  if (navFirefox && navandroid && TYPEOFANDROID == 1) {
    HREFF = "#";
    HREFTXT = "mobile_firefox_android_tablet";
  }
  // OPERA ZA ANDROID
  if (navOpera && navandroid) {
    HREFF = "#";
    HREFTXT = "opera_mobile_android";
  } // provera
  // OPERA ZA ANDROID TABLET
  if (navOpera && navandroid && operatablet) {
    HREFF = "#";
    HREFTXT = "opera_mobile_android_tablet";
  } // provera
  //  safari mobile za IPHONE - i  safari mobile za IPAD i CHROME za IPAD
  if (navSafari) {
    var Iphonesafari = NAV.match(/iphone/gi);
    if (Iphonesafari) {
      HREFF = "#";
      HREFTXT = "safari_mobile_iphone";
    } else if (navIpad) {
      HREFF = "#";
      HREFTXT = "mobile_safari_chrome_ipad";
    } else if (navandroid) {
      HREFF = "#";
      HREFTXT = "android_native";
    }
  }
  // TEST CHROME
  if (navChrome && navSafari && navMozilla && TYPEOFANDROID == 1) {
    HREFF = "#";
    HREFTXT = "mobile_chrome_android_tablet";
  }
  if (navChrome && navSafari && navMozilla && TYPEOFANDROID == 0) {
    HREFF = "#";
    HREFTXT = "mobile_chrome_android";
  }
  if (navChrome && TYPEOFANDROID == 0) {
    HREFF = "#";
    HREFTXT = "chrome_browser";
  }
  if (navMozilla && NOMOBILE == 1 && gecko && navFirefox) {
    HREFF = "#";
    HREFTXT = "firefox_desktop";
  }
  if (navOpera && TYPEOFANDROID == 0 && !mobile) {
    HREFF = "#";
    HREFTXT = "opera_desktop";
  }

  //linux
  if (navUbuntu && navMozilla && navFirefox && navLinux) {
    HREFF = "#";
    HREFTXT = "firefox_desktop_linux";
  }
  if (navMozilla && navLinux && navChrome && navSafari) {
    HREFF = "#";
    HREFTXT = "chrome_desktop_linux";
  }
  if (navMozilla && navLinux && navChrome && navSafari && navOpera) {
    HREFF = "#";
    HREFTXT = "opera_desktop_linux";
  }

  /**
   * Template for this view's container...
   * NOMOBILE = 1 means desktop platform
   * @example This is ENUMERATORS for property NAME :
   * "mobile_firefox_android"
   * "mobile_firefox_android_tablet"
   * "opera_mobile_android"
   * "opera_mobile_android_tablet"
   * "safari_mobile_iphone"
   * "mobile_safari_chrome_ipad"
   * "android_native"
   * "mobile_chrome_android_tablet"
   * "mobile_chrome_android"
   * "chrome_browser"
   * "firefox_desktop"
   * "opera_desktop"
   * "firefox_desktop_linux"
   * "chrome_desktop_linux"
   * "opera_desktop_linux" .
   * @property NAME
   * @type {String}
   * @default "unknown"
   */
  this.NAME = HREFTXT;
  /**
   * NOMOBILE = 1 Means desktop platform (Any win , mac or linux etc..)
   * NOMOBILE = 2 Means mobile platform (iOS , android etc.)
   * @property NOMOBILE
   * @type Number
   * @default "unknown"
   */
  this.NOMOBILE = NOMOBILE;
}

if ("serviceWorker" in navigator) {
  // Recommended to register onLoad
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("worker.js");
    console.info("log worker");
  });
} else {
  console.warn("maximumroulette: No support for web workers in this browser.");
}
