/*global rooms currentRoom addText oldLadyQuest*/
function talk(target) {
  var newTarget = target.splice(2, target.length - 1);
  console.log(newTarget);
  newTarget = newTarget.join();
  console.log(newTarget);
  newTarget = newTarget.replace(/,/g, " ");
  console.log(newTarget);
  if (rooms[currentRoom].people[newTarget] !== undefined) {
    addText(rooms[currentRoom].people[newTarget]);
    if (newTarget === "strange old lady") {
      oldLadyQuest();
    }
  } else {
    addText("No target found by that name!");
  }
}