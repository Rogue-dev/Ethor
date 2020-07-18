/*global quests*/
function oldLadyQuest() {
  $("#game-text").append(
    "<p><b>You have received a quest!</b></p><p>Task: A strange old lady wants you to get some meat for her.</p><p>Reward: 1 gold coin</p>"
  );
  quests.push(
    "Old Lady's Quest: Give a strange old lady some meat. Reward: 50 experience."
  );
}