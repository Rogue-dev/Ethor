/*global rooms currentRoom addText cookies*/
var tabEnemy = 0;
var enemy = 0;
var tabTalk = 0;
var talk = 0;
var word;
window.addEventListener("keydown", function(event) {
  var value = $("#user-input")
    .val()
    .toLowerCase();
  if (value.split(" ")[0] + " " + value.split(" ")[1] === "talk to") {
    var word = value.split(" ")[0] + " " + value.split(" ")[1];
  } else {
    var word = value.split(" ")[0];
  }
  $("#user-input").focus();
  if (event.code === "Tab") {
    var userInput = document.getElementById("user-input").value;
    if (
      userInput === "attack" ||
      userInput === "attack " ||
      userInput === "attack " + tabEnemy
    ) {
      try {
        if (enemy <= Object.keys(rooms[currentRoom].enemies).length - 1) {
          tabEnemy = Object.keys(rooms[currentRoom].enemies)[enemy];
        } else {
          enemy = 0;
          tabEnemy = Object.keys(rooms[currentRoom].enemies)[enemy];
        }
      } catch (err) {
        addText("No target found for that command!");
        $("text-input").value = "";
      }
      console.log("Above recycle script");
      if (tabEnemy !== 0) {
        document.getElementById("user-input").value = "attack " + tabEnemy;
        enemy++;
      }
      console.log("Below recycle script.");
    }
    if (
      userInput === "talk to" ||
      userInput === "talk to " ||
      userInput === "talk to " + tabTalk
    ) {
      console.log("conditional accepted.");

      if (Object.keys(rooms[currentRoom].people).length !== 1) {
        if (talk <= Object.keys(rooms[currentRoom].people).length - 1) {
          tabTalk = Object.keys(rooms[currentRoom].people)[talk];
        } else {
          talk = 0;
          tabTalk = Object.keys(rooms[currentRoom].enemies)[talk];
        }
      } else {
        talk = 0;
        tabTalk = Object.keys(rooms[currentRoom].people)[talk];
      }
      if (tabTalk === undefined) {
        addText("No target found for that command!");
        $("text-input").value = "";
      }
      if (tabTalk !== 0) {
        document.getElementById("user-input").value = "talk to " + tabTalk;
        if (Object.keys(rooms[currentRoom].people).length !== 0) {
          talk++;
        }
      }
    }
  }
});
