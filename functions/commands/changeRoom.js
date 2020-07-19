/*global rooms currentRoom addText startCellY startCellX roominfo*/
function changeRoom(dir) {
  if (rooms[currentRoom].directions[dir] !== undefined) {
    currentRoom = rooms[currentRoom].directions[dir];
    roominfo();
    addText(rooms[currentRoom].description);
    if (dir === "north") {
      startCellY = startCellY + 20;
    } else if (dir === "south") {
      startCellY = startCellY - 20;
    } else if (dir === "west") {
      startCellX = startCellX + 20;
    } else if (dir === "east") {
      startCellX = startCellX - 20;
    }
  } else {
    addText("You cannot go that way!");
  }
}
