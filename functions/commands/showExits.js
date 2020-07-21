/*global cookies rooms currentRoom addText*/
function showExits() {
  if (rooms[currentRoom].directions.hasOwnProperty("north")) {
    addText("North : " + rooms[currentRoom].directions["north"]);
  }
  if (rooms[currentRoom].directions.hasOwnProperty("east")) {
    addText("East : " + rooms[currentRoom].directions["east"]);
  }
  if (rooms[currentRoom].directions.hasOwnProperty("south")) {
    addText("South : " + rooms[currentRoom].directions["south"]);
  }
  if (rooms[currentRoom].directions.hasOwnProperty("west")) {
    addText("West : " + rooms[currentRoom].directions["west"]);
  }
}