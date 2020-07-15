var rooms = {
  start: {
    description:
      "You are in a dark, cold place and you see a light to <b>north</b>\
     and you hear the sound of running water to the <b>west</b>",
    directions: {
      north: "clearing1",
      west: "bridge1"
    },
    minimap: {
      X: 0,
      Y: 0
    }
  },
  clearing1: {
    description:
      "You arrive to a clearing, you see a lighthouse to the <b>north</b>\
     and there is a strange smell coming from the <b>east</b>",
    directions: {
      south: "start",
      north: "lighthouse",
      east: "trolls"
    },
    minimap: {
      X: 0,
      Y: -1
    }
  },
  lighthouse: {
    description:
      "You arrive to the lighthouse and walk up to the door. A strange old lady\
     opens the door. What do you do?",
    directions: {
      south: "clearing1"
    },
    people: {
      "strange old lady":
        "I have a quest for you, though you may not want to indulge the wants of a strange old lady like me. If you do, though, I'll make it worth your while. I need you to get some meat. It's been so long since I've had meat..."
    },
    minimap: {
      X: 0,
      Y: -2
    }
  },
  trolls: {
    description:
      "You arrive to another clearing, there are some trolls roasting some mysterious meat. \
     They haven't seen you yet. What do you do?",
    directions: {
      west: "clearing1"
    },
    enemies: {
      troll1: {
        health: 10,
        damage: 3,
        loot: "Ragged Leather Helmet",
        attackNotification: "You attack a troll",
        weapon: "rock",
        experience: 5,
        status: "alive",
        name: "troll1"
      },
      troll2: {
        health: 11,
        damage: 3,
        loot: "Ragged Leather Leggings",
        attackNotification: "You attack a troll",
        weapon: "rock",
        experience: 5,
        status: "alive",
        name: "troll2"
      },
      troll3: {
        health: 10,
        damage: 3,
        loot: "Ragged Leather Boots",
        attackNotification: "You attack a troll",
        weapon: "rock",
        experience: 5,
        status: "alive",
        name: "troll3"
      }
    }
  },
  bridge1: {
    description: "You see a river and there is a bridge to the <b>west</b>",
    directions: {
      east: "start",
      west: "bridge2"
    }
  },
  bridge2: {
    description:
      "You try to cross the bridge but a troll jumps out and bites your leg!",
    directions: {
      east: "bridge1"
    }
  }
};
