/*global rooms currentRoom addText oldLadyQuest inventory experience checkExperience*/
function talk(target) {
  var newTarget = target.splice(2, target.length - 1);
  newTarget = newTarget.join();
  newTarget = newTarget.replace(/,/g, " ");
  if (rooms[currentRoom].people !== undefined) {
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
        for (var i = 0; i < 10; i++) {
          experience += 5;
          checkExperience();
        }
      }
    } else if (Object.keys(rooms[currentRoom].enemies).includes(target)) {
      addText("No target found by that name!");
    } else {
      addText("You cannot talk to that person, as they are an enemy!");
    }
  } else if (Object.keys(rooms[currentRoom].enemies).includes(target)) {
    addText("No target found by that name!");
  } else {
    addText("You cannot talk to that person, as they are an enemy!");
  }
}
