/*global sleep addText health*/
async function healthRegen() {
  while (health <= 99) {
    await sleep(1000)
    health++;
  }
  requestAnimationFrame(healthRegen)
}
healthRegen();