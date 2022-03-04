let iconEl = document.getElementById("barIcon");
let navbarList = document.getElementById("navbarList")
let crossIcon = document.getElementById("crossbar")



function display() {
    crossIcon.classList.toggle("cross-icon")
    iconEl.classList.toggle("cross-icon")
    navbarList.classList.toggle("banner__links");
    navbarList.classList.toggle("navbar-links");


}