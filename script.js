function convertToRoman(num) {
  // Roman numeral symbols and their corresponding values
  const obj = {
    0: ['M', 1000],
    1: ['CM', 900],
    2: ['D', 500],
    3: ['CD', 400],
    4: ['C', 100],
    5: ['XC', 90],
    6: ['L', 50],
    7: ['XL', 40],
    8: ['X', 10],
    9: ['IX', 9],
    10: ['V', 5],
    11: ['IV', 4],
    12: ['I', 1]
  };

  let romanNumeral = '';

  // Loop through the symbols and subtract from the number
  for (let i = 0; i < 13; i++) {
    while (num >= obj[i][1]) {
      romanNumeral += obj[i][0];  // Add symbol to result
      num -= obj[i][1];  // Subtract value from number
    }
  }

  return romanNumeral;
}

// Test the function
console.log(convertToRoman(36)); // Output: XXXVI
