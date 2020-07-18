/*global rooms currentRoom addText inventory*/
function get(object) {
  console.log(object)
  if (rooms[currentRoom].items[object] !== undefined) {
    console.log("Not undefined.")
    if (rooms[currentRoom].items[object] === "available") {
      console.log("available")
      if (!(!object === "meat" && currentRoom === "trolls")) {
        console.log("Last if gate passed successfully.")
        inventory.push(
          Object.keys(rooms[currentRoom].items)[
            Object.keys(rooms[currentRoom].items).indexOf(object)
          ]
        );
        console.log("pushed")
        addText("You have received a " + object + "!");
        console.log("notification received.")
        rooms[currentRoom].items[object] === "unavailable";
        console.log("marked unavailable.")
      } else if (
        rooms.trolls.enemies.troll1.status === "alive" ||
        rooms.trolls.enemies.troll2.status === "alive" ||
        rooms.trolls.enemies.troll3.status === "alive"
      ) {
        addText("Trolls are guarding the meat!");
      }
    } else {
      addText("You have already picked up that item!");
    }
  } else {
    addText("No object found by that name!");
  }
}
