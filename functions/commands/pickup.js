/*global rooms currentRoom addText inventory*/
function get(object) {
  if (rooms[currentRoom].items[object] !== undefined) {
    if (rooms[currentRoom].items[object] === "available") {
      if (!(object === "meat" && currentRoom === "trolls")) {
        inventory.push(
          Object.keys(rooms[currentRoom].items)[
            Object.keys(rooms[currentRoom].items).indexOf(object)
          ]
        );
        addText("You have received a " + object + "!");
        rooms[currentRoom].items[object] === "unavailable";
      }
    } else {
      if (rooms[currentRoom].enemies.troll1.status === "alive" || rooms[currentRoom].enemies.troll2.status === "alive"|| rooms[currentRoom].enemies.troll3.status === "alive") {
        addText("Trolls are still guarding the meat!")
      }
      addText("You have already picked up that item!");
    }
  } else {
    addText("No object found by that name!");
  }
}
