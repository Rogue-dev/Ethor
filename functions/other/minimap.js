/*global rooms currentRoom roomArr minimap*/
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
  for (var i = 0; i < roomArr.length; i++) {
    var roomX = roomArr[i].minimap.x;
    var roomY = roomArr[i].minimap.y;
    if (rooms[currentRoom] === roomArr[i]) {
      ctx.fillStyle = "green";
      ctx.fillRect(roomX * 20 + startCellX, roomY * 20 + startCellY, 10, 10);
    } else {
      ctx.fillStyle = "red";
      ctx.fillRect(roomX * 20 + startCellX, roomY * 20 + startCellY, 10, 10);
    }
  }
  requestAnimationFrame(minimap);
}
minimap();
