/*global inventory addText cookies*/
function showInventory() {
  if (inventory.length === 0) {
    addText("<p>You are not carrying anything!</p>");
    return;
  }
  addText("<p>Here is your inventory: </p>");
  addText("<p><ul>");
  for (var i = 0; i < inventory.length; i++) {
    addText("<li style=\"list-style-type: none\">" + inventory[i] + "</li>");
  }
  addText("</ul></p>");
}