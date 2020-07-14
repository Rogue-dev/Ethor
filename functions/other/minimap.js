/*global rooms currentRoom*/
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var startCellX = 160;
var startCellY = 160;
var keyRooms = 0;
function minimap() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.fillStyle = "green";
  ctx.fillRect(startCellX, startCellY, 10, 10);
  ctx.fillStyle = "red";
  keyRooms = Object.keys(rooms[currentRoom].directions);
  for (var i = 0; i < keyRooms.length; i++) {
    if (keyRooms[i] === "north") {
      ctx.fillRect(startCellX, startCellY - 20, 10, 10);
    }
    if (keyRooms[i] === "east") {
      ctx.fillRect(startCellX + 20, startCellY, 10, 10);
    }
    if (keyRooms[i] === "south") {
      ctx.fillRect(startCellX, startCellY + 20, 10, 10);
    }
    if (keyRooms[i] === "west") {
      ctx.fillRect(startCellX - 20, startCellY, 10, 10);
    }
  }
  requestAnimationFrame(minimap);
}
minimap();
