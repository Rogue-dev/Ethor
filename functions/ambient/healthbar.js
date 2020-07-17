/*global health maxHealth*/
$("#myHealthBar").append("<p id=\"health\">" + "Health: " +health + "/100</p>")
function updateHealthBar() {
  document.getElementById("health").remove();
  $("#myHealthBar").append("<p id=\"health\">" + "Health: " + health + "/" + maxHealth + "</p>")
  document.getElementById("myHealthBar").style.width = (health/maxHealth) * 100 + "%"
  requestAnimationFrame(updateHealthBar);
}
updateHealthBar();