
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    hideDropDown();
  }
}

function showDropDown(id) {
  hideDropDown();
  document.getElementById(id).classList.toggle("show")
}

function hideDropDown() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
