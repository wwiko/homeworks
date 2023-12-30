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
