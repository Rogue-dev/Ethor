/*global rooms currentRoom*/
function roominfo() {
  document.getElementById("current-room-info").innerHTML = ""
  $("#current-room-info").append("<h5>Current Room:</h5>");
  if (rooms[currentRoom].people !== undefined) {
    $("#current-room-info").append(
      "<p>People: " + Object.keys(rooms[currentRoom].people) + "</p>"
    );
  }
  if (rooms[currentRoom].enemies !== undefined) {
    $("#current-room-info").append(
      "<p>Enemies: " + Object.keys(rooms[currentRoom].enemies) + "</p>"
    );
  }
}
