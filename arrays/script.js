// Task 1
const unique = (arr) => Array.from(new Set(arr));

// Task 2
const customMap = (arr, func) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]), i, arr);
  }

  return newArr;
};

// Task 3
const customReduce = (arr, func, initial) => {
  if (initial === undefined) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result = func(result, arr[i], i, arr);
    }
    return result;
  }

  let result = initial;
  for (let i = 0; i < arr.length; i++) {
    result = func(result, arr[i], i, arr);
  }
  return result;
};

// Task 4
const filterObjects = (array, fieldName) => {
  const result = [];

  array.forEach((obj) => {
    const existingObj = result.find(
      (item) => item[fieldName] === obj[fieldName]
    );

    if (existingObj) {
      Object.assign(existingObj, obj);
    } else {
      result.push({ ...obj });
    }
  });

  return result;
};

// Task 5
// const getAverage = (arr) => {
//   const map = new Map();

//   arr.forEach((obj) => {
//     const oneGenderArray = arr.filter((item) => item.gender === obj.gender);

//     const avrObject = {
//       avrAge:
//         Math.floor(
//           (oneGenderArray.reduce((result, item) => result + item.age, 0) /
//             oneGenderArray.length) *
//             10
//         ) / 10,
//       avrIncome:
//         Math.floor(
//           (oneGenderArray.reduce((result, item) => result + item.income, 0) /
//             oneGenderArray.length) *
//             10
//         ) / 10,
//     };

//     const doesKeyExist = map.has(obj.gender);

//     if (!doesKeyExist) {
//       map.set(obj.gender, avrObject);
//     }
//   });

//   return Object.fromEntries(map);
// };

const getAverage = (arr) => {
  const result = {};

  arr.forEach((obj) => {
    const oneGenderArray = arr.filter((item) => item.gender === obj.gender);

    const avrObject = {
      avgAge:
        Math.floor(
          (oneGenderArray.reduce((result, item) => result + item.age, 0) /
            oneGenderArray.length) *
            10
        ) / 10,
      avgIncome:
        Math.floor(
          (oneGenderArray.reduce((result, item) => result + item.income, 0) /
            oneGenderArray.length) *
            10
        ) / 10,
    };
    result[obj.gender] = avrObject;
  });

  return result;
};

// const getAverage = (arr) => {
//   return arr.reduce((object, obj) => {
//     const oneGenderArray = arr.filter((item) => item.gender === obj.gender);

//     const avrObject = {
//       avgAge:
//         Math.floor(
//           (oneGenderArray.reduce((result, item) => result + item.age, 0) /
//             oneGenderArray.length) *
//             10
//         ) / 10,
//       avgIncome:
//         Math.floor(
//           (oneGenderArray.reduce((result, item) => result + item.income, 0) /
//             oneGenderArray.length) *
//             10
//         ) / 10,
//     };
//     object[obj.gender] = avrObject;

//     return object;
//   }, {});
// };

const array = [
  {
    name: "Bob",
    gender: "Male",
    age: 20,
    income: 1000,
  },
  {
    name: "John",
    gender: "Male",
    age: 35,
    income: 3000,
  },
  {
    name: "Pete",
    gender: "Male",
    age: 7,
    income: 0,
  },
  {
    name: "Kate",
    gender: "Female",
    age: 25,
    income: 2000,
  },
  {
    name: "Lawrence",
    gender: "Female",
    age: 12,
    income: 30,
  },
  {
    name: "Chris",
    gender: "Female",
    age: 56,
    income: 5000,
  },
  {
    name: "Maksim",
    gender: "Trans",
    age: 56,
    income: 5000,
  },
];

console.log(getAverage(array));
// {
//   Male: { avgAge: 20.6, avgIncome: 1333.3 },
//   Female: { avgAge: 31, avgIncome: 2343.3 },
// };
