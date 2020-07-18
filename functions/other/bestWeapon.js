/*global inventory rustyBronzeDagger invObjects*/
var bestWeapon = 0;
var invBestWeapon = 0;
function checkBestWeapon() {
  if (inventory.includes("rusty bronze dagger")) {
    invBestWeapon = "rusty bronze dagger";
    bestWeapon = invObjects.rustyBronzeDagger
  }
}