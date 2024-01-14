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

let arr = [1, 2, 3, 4, 5];
console.log(customReduce(arr, (sum, current) => sum + current));

// Task 4
const filterObjects = (arr, fieldName) => {};

const array = [
  {
    price: 150,
    weight: 200,
    id: "id-123",
  },
  {
    height: 100,
    isBig: false,
    id: "id-123",
  },
  {
    price: 159,
    weight: 200,
  },
];

// filterObjects(array, 'id') -> [{price: 150, weight: 200, height:    100, isBig: false, id: 'id-123' }, {price: 159, weight: 200}]
