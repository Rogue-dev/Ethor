/*global rooms quests currentRoom commands inventory addText oldLadyQuest showExits changeRoom target monster showHelp
showInventory talk showQuests attack cycle*/
function playerInput(input) {
  if (input.split(" ")[0] + " " + input.split(" ")[1] === "talk to") {
    var command = input.split(" ")[0] + " " + input.split(" ")[1];
  } else {
    var command = input.split(" ")[0];
  }
  switch (command) {
    case "go":
      var dir = input.split(" ")[1];
      changeRoom(dir);
      break;
    case "help":
      showHelp();
      break;
    case "inventory":
      showInventory();
      break;
    case "talk to":
      target = input.split(" ");
      talk(target);
      break;
    case "quests":
      showQuests();
      break;
    case "exits":
      showExits();
      break;
    case "attack":
      monster = input.split(" ")[1];
      attack(monster);
      break;
    case "":
      break;
    default:
      addText("Invalid command!")
  }
}

$(document).ready(function() {
  $("#game-text").append("<p>" + rooms.start.description + "</p>");
  $(document).keypress(function(key) {
    if (key.which === 13 && $("#user-input").is(":focus")) {
      var value = $("#user-input")
        .val()
        .toLowerCase();
      $("#user-input").val("");
      playerInput(value);
    }
  });
});
