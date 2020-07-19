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
      x: 0,
      y: 0
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
      x: 0,
      y: -1
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
      x: 0,
      y: -2
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
        damage: Math.round(Math.random() * Math.floor(13)),
        loot: "Ragged Leather Helmet",
        attackNotification: "You attack a troll",
        weapon: "rock",
        experience: 5,
        status: "alive",
        name: "troll1"
      },
      troll2: {
        health: 11,
        damage: Math.round(Math.random() * Math.floor(13)),
        loot: "Ragged Leather Leggings",
        attackNotification: "You attack a troll",
        weapon: "rock",
        experience: 5,
        status: "alive",
        name: "troll2"
      },
      troll3: {
        health: 10,
        damage: Math.round(Math.random() * Math.floor(13)),
        loot: "Ragged Leather Boots",
        attackNotification: "You attack a troll",
        weapon: "rock",
        experience: 5,
        status: "alive",
        name: "troll3"
      }
    },
    minimap: {
      x: 1,
      y: -1
    },
    items: {
      meat: "available"
    }
  },
  bridge1: {
    description: "You see a river and there is a bridge to the <b>west</b>",
    directions: {
      east: "start",
      west: "bridge2"
    },
    minimap: {
      x: -1,
      y: 0
    }
  },
  bridge2: {
    description:
      "You try to cross the bridge but a troll jumps out and bites your leg!",
    directions: {
      east: "bridge1"
    },
    enemies: {
      bridgetroll: {
        health: 30,
        damage: Math.round(Math.random() * Math.floor(25)),
        loot: "Leather Chestpiece",
        attackNotification: "You attack a bridge troll",
        weapon: "bronze dagger",
        experience: 20,
        status: "alive",
        name: "bridgetroll"
      }
    },
    minimap: {
      x: -2,
      y: 0
    }
  }
};

var roomArr = Object.keys(rooms);
for (var i = 0; i < Object.keys(rooms).length; i++) {
  roomArr[i] = rooms[roomArr[i]];
}
rooms.start.minimap.x = 0;
rooms.start.minimap.y = -1;
var roomsToBeTested = [];
if (rooms.start.directions.north !== undefined) {
  roomsToBeTested.push("start:" + rooms.start.directions.north);
}
if (rooms.start.directions.east !== undefined) {
  roomsToBeTested.push("start:" + rooms.start.directions.east);
}
if (rooms.start.directions.south !== undefined) {
  roomsToBeTested.push("start:" + rooms.start.directions.south);
}
if (rooms.start.directions.west !== undefined) {
  roomsToBeTested.push("start:" + rooms.start.directions.west);
}
var alreadyTested = ["start"];
while (roomsToBeTested.length !== 0) {
  for (var i = 0; i < roomsToBeTested.length; i++) {
    var originRoom = roomsToBeTested[i].split(":")[0];
    var testx = rooms[originRoom].minimap.x;
    var testy = rooms[originRoom].minimap.y;
    var newRoom = roomsToBeTested[i].split(":")[1];
    if (rooms[originRoom].directions.north === newRoom) {
      rooms[newRoom].minimap.y = testy++;
    }
    if (rooms[originRoom].directions.east === newRoom) {
      rooms[newRoom].minimap.x = testx--;
    }
    if (rooms[originRoom].directions.south === newRoom) {
      rooms[newRoom].minimap.y = testy--;
    }
    if (rooms[originRoom].directions.west === newRoom) {
      rooms[newRoom].minimap.x = testx++;
    }
    alreadyTested.push(newRoom)
    var addingTest = Object.values(rooms[newRoom].directions)
    for (var i = 0; i < addingTest.length; i++) {
      if (!alreadyTested.includes(addingTest[i])) {
        roomsToBeTested.push(addingTest[i])
        console.log(roomsToBeTested)
      }
    }
    rooms.start.minimap.x = 0;
    rooms.start.minimap.y = 0;
  }
  roomsToBeTested = [];
}
