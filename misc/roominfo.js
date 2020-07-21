/*global rooms currentRoom*/
function roominfo() {
  document.getElementById("current-room-info").innerHTML = "";
  $("#current-room-info").append("<h5>Current Room:</h5>");
  if (rooms[currentRoom].people !== undefined) {
    $("#current-room-info").append(
      "<p>People: " + Object.keys(rooms[currentRoom].people) + "</p>"
    );
  }
  if (rooms[currentRoom].enemies !== undefined) {
    $("#current-room-info").append("<p>Enemies:</p>");

    $("#current-room-info").append(
      "<p>" + Object.keys(rooms[currentRoom].enemies) + "</p>"
    );
  }
  if (rooms[currentRoom].items !== undefined) {
    $("#current-room-info").append("<p>Items:</p>");
    $("#current-room-info").append(
      "<p>" + Object.keys(rooms[currentRoom].items) + "</p>"
    );
  }
}
roominfo();