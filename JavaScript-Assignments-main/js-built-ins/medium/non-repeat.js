/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
  if (str === "") return null;

  let count = {};
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) {
      count[char]++; 
    } else {
      count[char] = 1; 
    }
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char] === 1) {
      return char; 
    }
  }

  return null;
}
