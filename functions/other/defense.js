/*global inventory defense*/
function checkDefense() {
  if (inventory.includes("Ragged Leather Helmet")) {
    defense += .5;
  }
  if (inventory.includes("Ragged Leather Leggings")) {
    defense += 3;
  }
  if (inventory.includes("Ragged Leather Boots")) {
    defense += 2.5
  }
  if (inventory.includes("Leather Chestpiece")) {
    defense += 5;
  }
}
