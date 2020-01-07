/* eslint-disable no-unused-vars */

function showMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function loadPage(name, absolutePath) {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("main").innerHTML = xhttp.responseText;
    }
  };

  // eslint-disable-next-line quotes
  if (typeof absolutePath === 'undefined') {
    xhttp.open("GET", "pages/" + name, true);
  } else {
    xhttp.open("GET", "pages/" + name, true);
  }

  xhttp.send();

}

