let mainNav = document.getElementById('jsMenu');

let navToggle = document.getElementById('jsToggle');

navToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
})
function openButton() {
  document.getElementById("sideOverlay").style.width = "400px";
}
function closeBar() {
  document.getElementById("sideOverlay").style.width = "0";
}
