/*global rooms currentRoom addText oldLadyQuest inventory experience checkExperience*/
function talk(target) {
  var newTarget = target.splice(2, target.length - 1);
  console.log(newTarget);
  newTarget = newTarget.join();
  console.log(newTarget);
  newTarget = newTarget.replace(/,/g, " ");
  console.log(newTarget);
  if (rooms[currentRoom].people[newTarget] !== undefined) {
    addText(rooms[currentRoom].people[newTarget]);
    if (
      newTarget === "strange old lady" &&
      currentRoom === "lighthouse" &&
      !inventory.includes("meat")
    ) {
      oldLadyQuest();
    } else if (
      newTarget === "strange old lady" &&
      currentRoom === "lighthouse" &&
      inventory.includes("meat")
    ) {
      inventory.splice(inventory.indexOf("meat"), 1);
      addText("Thank you for the meat...Here is your reward, as promised.");
      addText("You have received 50 experience!");
      for (var i = 0; i<10; i++) {
      experience += 5;
      checkExperience();
      }
    }
  } else {
    addText("No target found by that name!");
  }
}
