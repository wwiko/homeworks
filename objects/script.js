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
