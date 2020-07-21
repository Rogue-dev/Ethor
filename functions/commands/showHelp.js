/*global commands cookies*/
function showHelp() {
  $("#game-text").append("<p>Here are the possible commands: </p>");
  $("#game-text").append("<p><ul>");
  for (var i = 0; i < commands.length; i++) {
    $("#game-text").append("<li style=\"list-style-type: none\">" + commands[i] + "</li>");
  }
  $("#game-text").append("</ul></p>");
}