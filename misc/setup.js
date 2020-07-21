/*global roominfo getCookie cookies*/
var health = 100;
const commands = [
  "Syntax guide:",
  "&nbsp&nbsp&nbsp&nbspWords in quotes: Type this exact word, with capitalization and spaces",
  "&nbsp&nbsp&nbsp&nbspWords without quotes: These are variables. So, for example, \"attack \"{monster}, monster is a variable where you put in the name of the monster.",
  "&nbsp&nbsp&nbsp&nbspCurly braces {}: These indicate that whatever is inside the curly braces must be typed in.",
  "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Vertical bar |: These are only inside of curly braces. They separate objects, but you must type ONE object that is separated by the vertical bar.",
  "&nbsp&nbsp&nbsp&nbsp Straight braces []: Anything inside straight braces is optional.",
  "Commands:",
  "Go: Syntax: <b>\"go\" {\"north\"|\"east\"|\"south\"|\"west\"}</b> Description: Walk in a certain direction.",
  "Inventory: Syntax: <b>\"inventory\"</b> Description: Shows inventory.",
  "Talk to: Syntax: <b>\"talk to \"{person}</b> Description: Talk to a person.",
  "Quests: Syntax: <b>\"quests\"</b> Description: Shows current quests.",
  "Exits: Syntax: <b>\"exits\"</b> Description: Show exits to current room.",
  "Attack: Syntax: <b>\"attack \"{monster} [\"with \" {weapon}]</b> Description: Attack monsters.",
  "Other:",
  "You can press \"tab\" to cycle throught the possible targets of the attack command or talk to command, if you currently have attack or talk to typed into the textbox."
];
var inventory = ["rusty bronze dagger"];
var quests = [];
var monster = ""
var target = "";
var currentRoom = "start"
var command = [];
var beginnerArea = true;
var monsterHealth = 0;
var monsterDamage = 0;
var monsterLoot = ""
var monsterWeapon = "";
var monsterExperience = 0;
var experience = 0;
var level = 1;
var cycleVar = 0;
var defense = 0;
