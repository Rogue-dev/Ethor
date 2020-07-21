/*global quests addText*/
function showQuests() {
  if (quests.length === 0) {
    addText("<p>You do not have any current quests!</p>");
    return;
  }
  addText("<p>Here are your current quests: </p>");
  addText("<p><ul>");
  for (var i = 0; i < quests.length; i++) {
    addText("<li style=\"list-style-type: none\">" + quests[i] + "</li>");
  }
  addText("</ul></p>");
}