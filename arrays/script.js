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
const getAverage = (arr) => {
  const result = {};

  arr.forEach((obj) => {
    const oneGenderArr = arr.filter((item) => item.gender === obj.gender);

    const avrObject = {
      avgAge:
        Math.floor(
          (oneGenderArr.reduce((result, item) => result + item.age, 0) /
            oneGenderArr.length) *
            10
        ) / 10,
      avgIncome:
        Math.floor(
          (oneGenderArr.reduce((result, item) => result + item.income, 0) /
            oneGenderArr.length) *
            10
        ) / 10,
    };
    result[obj.gender] = avrObject;
  });

  return result;
};

// Task 6
const getCommon = (arr1, arr2) => {
  const set = new Set();

  for (const item1 of arr1) {
    for (const item2 of arr2) {
      if (JSON.stringify(item1) === JSON.stringify(item2)) {
        set.add(item2);
      }
    }
  }

  return [...set];
};

// Task 7
const getWeekDay = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayIndex = new Date(Date.parse(date)).getDay();
  return days[dayIndex];
};

// Task 8
const getDifference = (date1, date2) => {
  const differenceInDays = (Date.parse(date2) - Date.parse(date1)) / 86400000;
  return Math.abs(differenceInDays);
};
