/*global health*/
$("#myHealthBar").append("<p id=\"health\">" + "Health: " +health + "/100</p>")
function updateHealthBar() {
  document.getElementById("health").remove();
  $("#myHealthBar").append("<p id=\"health\">" + "Health: " + health + "/100</p>")
  document.getElementById("myHealthBar").style.width = health + "%"
  requestAnimationFrame(updateHealthBar);
}
updateHealthBar();