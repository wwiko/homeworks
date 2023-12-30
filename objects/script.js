/*
// Задача 1
function getDictionary(str) {
  const countedLetters = {};

  for (i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      countedLetters[str[i].toLowerCase()] =
        ++countedLetters[str[i].toLowerCase()] || 1;
    }
  }

  // for (i = 0; i < str.length; i++) {
  //   if (str[i] != " " && countedLetters[str[i].toLowerCase()] === undefined) {
  //     countedLetters[str[i].toLowerCase()] = 1;
  //   } else if (str[i] != " ") {
  //     ++countedLetters[str[i].toLowerCase()];
  //   }
  // }

  return countedLetters;
}

console.log(getDictionary("cat and DDddddog"));
*/

/*
// Задача 2
function getObjCopy(targetObject) {
  const copiedObject = {};

  for (let key in targetObject) {
    if (typeof targetObject[key] != "function") {
      copiedObject[key] = targetObject[key];
    }
  }

  return copiedObject;
}

const obj = {
  someFieldKey: "someFieldValue",
  someMethod() {},
};

const copiedObj = getObjCopy(obj);

console.log(copiedObj.someFieldKey); // someFieldValue
console.log(copiedObj.someMethod); // undefined
console.log(obj === copiedObj); // false
*/

/*
// Задача 3
let rectangle = {
  length: 10,
  width: 5,
  height: 3,

  getArea() {
    return this.length * this.width;
  },

  getPerimeter() {
    return 2 * (this.length + this.width);
  },

  getVolume() {
    return this.length * this.width * this.height;
  },
};

console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.getVolume());
*/

// Задача 4
const laptops = {
  "7d708189-2cda-4aba-8da9-8b3766bb572b": {
    name: "Laptop 1",
    price: "$1050",
    brand: "Brand 1",
    processor: "Processor Type 1",
    ram: "10GB",
    storage: "512GB",
    screenSize: '14"',
    batteryLife: "6 hours",
    qtyLeft: 5,
  },
  "941327bf-8a42-41f9-8309-780c1af08431": {
    name: "Laptop 2",
    price: "$1100",
    brand: "Brand 2",
    processor: "Processor Type 2",
    ram: "12GB",
    storage: "768GB",
    screenSize: '15"',
    batteryLife: "7 hours",
    qtyLeft: 2,
  },
  "6a121953-034f-4c91-9097-e58d29425e35": {
    name: "Laptop 3",
    price: "$1150",
    brand: "Brand 3",
    processor: "Processor Type 0",
    ram: "14GB",
    storage: "256GB",
    screenSize: '13"',
    batteryLife: "8 hours",
    qtyLeft: 1,
  },
  "ad0815a5-6d81-4489-8754-98589a800315": {
    name: "Laptop 4",
    price: "$1200",
    brand: "Brand 4",
    processor: "Processor Type 1",
    ram: "8GB",
    storage: "512GB",
    screenSize: '14"',
    batteryLife: "5 hours",
    qtyLeft: 10,
  },
  "dcae527c-9c3d-4d9c-8f28-bf1bd93b1ed1": {
    name: "Laptop 5",
    price: "$1250",
    brand: "Brand 0",
    processor: "Processor Type 2",
    ram: "10GB",
    storage: "768GB",
    screenSize: '15"',
    batteryLife: "6 hours",
    qtyLeft: 0,
  },
  "fb445092-548a-4e33-9ce5-9227c89adfe4": {
    name: "Laptop 6",
    price: "$1300",
    brand: "Brand 1",
    processor: "Processor Type 0",
    ram: "12GB",
    storage: "256GB",
    screenSize: '13"',
    batteryLife: "7 hours",
    qtyLeft: 7,
  },
  "f2ab049e-aaef-4778-b147-b1fce9b6c626": {
    name: "Laptop 7",
    price: "$1350",
    brand: "Brand 2",
    processor: "Processor Type 1",
    ram: "14GB",
    storage: "512GB",
    screenSize: '14"',
    batteryLife: "8 hours",
    qtyLeft: 3,
  },
  "692fbb56-ce11-43f4-a904-2b19a94f39b5": {
    name: "Laptop 8",
    price: "$1400",
    brand: "Brand 3",
    processor: "Processor Type 2",
    ram: "8GB",
    storage: "768GB",
    screenSize: '15"',
    batteryLife: "5 hours",
    qtyLeft: 2,
  },
  "ea3d80a7-9c04-48ff-a6d7-5a764f8e549c": {
    name: "Laptop 9",
    price: "$1450",
    brand: "Brand 4",
    processor: "Processor Type 0",
    ram: "10GB",
    storage: "256GB",
    screenSize: '13"',
    batteryLife: "6 hours",
    qtyLeft: 7,
  },
};

const clients = {
  "3df6c04d-ba41-4888-bb57-fab1d74052dc": {
    name: "Maksym Nikitchenko",
    laptop: {
      name: "Laptop 1",
      price: "$1050",
      brand: "Brand 1",
      processor: "Processor Type 1",
      ram: "10GB",
      storage: "512GB",
      screenSize: '14"',
      batteryLife: "6 hours",
    },
  },
};

function buyLaptop(name, laptopId) {
  const randomPart = () =>
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  const userId = `${randomPart()}-${randomPart()}-${randomPart()}-${randomPart()}-${randomPart()}`;

  if (laptops[laptopId].qtyLeft > 0) {
    clients[userId] = {
      name,
      laptop: {},
    };

    Object.assign(clients[userId].laptop, laptops[laptopId]);

    delete clients[userId].laptop.qtyLeft;

    --laptops[laptopId].qtyLeft;
  } else {
    alert("This laptop is out of stock");
  }
}

function sellLaptop(userId) {
  if (clients[userId] === undefined) {
    alert("Client with such id doesn't exist");
  } else {
    for (let key in laptops) {
      if (laptops[key].name === clients[userId].laptop.name) {
        ++laptops[key].qtyLeft;
      }
    }
    delete clients[userId];
  }
}

buyLaptop("Vika", "7d708189-2cda-4aba-8da9-8b3766bb572b");
sellLaptop("3df6c04d-ba41-4888-bb57-fab1d74052dc");
console.log(clients);
console.log(laptops);
