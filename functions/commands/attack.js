/*global rooms currentRoom monster addText monsterHealth
monsterDamage monsterLoot invBestWeapon
checkBestWeapon health bestWeapon monsterWeapon
inventory experience sleep monsterExperience
checkExperience checkDefense defense*/
async function attack(monster) {
  if (rooms[currentRoom].enemies[monster] !== undefined && rooms[currentRoom].enemies[monster].status === "alive") {
    checkBestWeapon();
    checkDefense();
    monsterHealth = rooms[currentRoom].enemies[monster].health;
    monsterDamage = rooms[currentRoom].enemies[monster].damage;
    monsterLoot = rooms[currentRoom].enemies[monster].loot;
    monsterWeapon = rooms[currentRoom].enemies[monster].weapon;
    monsterExperience = rooms[currentRoom].enemies[monster].experience
    while (!health <= 0 || !monsterHealth <= 0) {
      addText(
        rooms[currentRoom].enemies[monster].attackNotification +
          " with a " +
          invBestWeapon +
          "."
      );
      await sleep(500)
      monsterHealth = monsterHealth - bestWeapon.damage;
      addText(monster + " has " + monsterHealth + " health left.");
      if (monsterHealth <= 0) {
        await sleep(500)
        addText("You have defeated " + monster + "!");
        await sleep(500);
        addText("You have received a " + rooms[currentRoom].enemies[monster].loot + "!")
        inventory.push(rooms[currentRoom].enemies[monster].loot)
        experience = experience + monsterExperience
        checkExperience();
        rooms[currentRoom].enemies[monster].status = "dead"
        break;
      }
      await sleep(500)
      addText(monster + " attacks you with " + monsterWeapon);
      health = health - Math.round(monsterDamage-(defense/100));
      await sleep(500)
      addText("You have " + health + " health left.");
      if (health <= 0) {
        await sleep(500)
        addText("You have died!")
        currentRoom = "start";
        experience = 0;
        break;
      }
      await sleep(500)
    }
  } else {
    if (rooms[currentRoom].enemies[monster] === undefined) {
      addText("No target found by that name!");
    } else {
      addText("Target is already dead!")
    }
  }
}
