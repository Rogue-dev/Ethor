/*global rooms currentRoom addText*/
function wares() {
  if (rooms[currentRoom].people !== undefined) {
    addText("Please note: This feature is still under development and is being released earlier than expected due to a bug fix. I will work hard to get this feature ready for use soon.")
    if (Object.keys(rooms[currentRoom].people).includes("merchant")) { 
    addText("apple: 5 copper. Description: Restores health to full.");
    addText("Small Iron Sword: 3 silver. Description: Does seven damage")
    } else {
      addText("No merchants in this room!");
    }
  } else {
    addText("No merchants in this room!")
  }
}