/*global level experience addText*/
var xpToNextLevel = 0;
var maxHealth = 100;
function checkExperience() {
  xpToNextLevel = Math.round((3 * Math.exp(level/2)));
  if (experience >= xpToNextLevel) {
    var excessXP = experience - xpToNextLevel;
    level++;
    experience = excessXP;
    addText("<b>You Leveled Up!</b>");
    addText("You are now level " + level + "!");
    addText("Your health has increased!")
    maxHealth = Math.round(maxHealth+(maxHealth/10))
  }
}
checkExperience();
