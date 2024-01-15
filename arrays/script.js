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
