
// initial sub page
loadPage('home.html');

setTimeout(function() {
  showSlides(1)
}, 256)

// COMMON
/*
  from init.js
*/

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
