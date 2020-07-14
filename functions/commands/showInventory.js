/*global inventory*/
function showInventory() {
  if (inventory.length === 0) {
    $("#game-text").append("<p>You are not carrying anything!</p>");
    return;
  }
  $("#game-text").append("<p>Here is your inventory: </p>");
  $("#game-text").append("<p><ul>");
  for (var i = 0; i < inventory.length; i++) {
    $("#game-text").append("<li style=\"list-style-type: none\">" + inventory[i] + "</li>");
  }
  $("#game-text").append("</ul></p>");
}