/*global quests addText sleep*/
async function oldLadyQuest() {
 addText("I have a quest for you, though you may not want to indulge the wants of a strange old lady like me. If you do, though, I'll make it worth your while. I need you to get some meat. It's been so long since I've had meat...")
  await sleep(500)
  $("#game-text").append(
    "<p><b>You have received a quest!</b></p><p>Task: A strange old lady wants you to get some meat for her.</p><p>Reward: 1 gold coin</p>"
  );
  await sleep(500)
  quests.push(
    "Old Lady's Quest: Give a strange old lady some meat. Reward: 50 experience."
  );
}