/*global sleep addText health maxHealth*/
async function healthRegen() {
  while (health <= maxHealth - 1) {
    await sleep(1000)
    health++;
  }
  requestAnimationFrame(healthRegen)
}
healthRegen();