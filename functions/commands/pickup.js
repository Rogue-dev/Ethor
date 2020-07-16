/*global rooms currentRoom addText inventory*/
function get(object) {
  if (rooms[currentRoom].items[object] !== undefined) {
    if (rooms[currentRoom].items[object] === "available") {
      inventory.push(
        Object.keys(rooms[currentRoom].items)[
          Object.keys(rooms[currentRoom].items).indexOf(object)
        ]
      );
      addText("You have received a " + object + "!");
      rooms[currentRoom].items[object] === "unavailable"
    } else {
      addText("You have already picked up that item!")
    }
  } else {
    addText("No object found by that name!");
  }
}
