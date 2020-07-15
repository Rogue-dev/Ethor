/*global rooms currentRoom addText startCellY startCellX*/
function changeRoom(dir) {
  if (rooms[currentRoom].directions[dir] !== undefined) {
    currentRoom = rooms[currentRoom].directions[dir];
    addText(rooms[currentRoom].description);
  } else {
    addText("You cannot go that way!");
  }
}
