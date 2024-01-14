// Task 1
const unique = (arr) => Array.from(new Set(arr));

// Task 2
const customMap = (arr, func) => {
  const newArr = [];
  for (const item of arr) {
    newArr.push(func(item));
  }

  return newArr;
};

// Task 3
const customReduce = (arr, func) => {};
