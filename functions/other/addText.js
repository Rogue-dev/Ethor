function addText(text) {
  $("#game-text").append("<p>" + text + "</p>");
  $("#game-text").scrollTop($("#game-text")[0].scrollHeight);
}
