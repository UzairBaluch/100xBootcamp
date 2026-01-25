// #1: Sum values in object arrays
// Input: { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// Output: { food: 60, travel: 20, bills: 100 }
const input1 = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
let reslut1 = {};
Object.keys(input1).forEach((key) => {
  let result = input1[key].reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  reslut1[key] = result;
});
// console.log(reslut1);

// #2: Count word occurrences in array
// Input: ["apple", "banana", "apple", "orange", "banana", "apple"]
// Output: { apple: 3, banana: 2, orange: 1 }
const input2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let result2 = {};
input2.forEach((item) => {
  if (result2[item]) {
    result2[item] = result2[item] + 1;
  } else {
    result2[item] = 1;
  }
});
// console.log(result2);

// #3: Swap keys and values of object
// Input: { a: "x", b: "y", c: "z" }
// Output: { x: "a", y: "b", z: "c" }
// Steps:
// 1. Create empty result object
// 2. Loop through keys of input
// 3. For each key-value pair, swap them: result[value] = key
// 4. Return result
let input3 = { a: "x", b: "y", c: "z" };
let result3 = {};
Object.keys(input3).forEach((key) => {
  result3[input3[key]] = key;
  return result3;
});
// console.log(result3);

// #4: Find the largest value key
// Input: { a: 10, b: 50, c: 20 }
// Output: "b"
// Steps:
// 1. Track maxKey and maxValue variables
// 2. Loop through object
// 3. If current value > maxValue, update both
// 4. Return maxKey
let input4 = { a: 100, b: 50, c: 20 };
let maxKey;
let maxValue = -Infinity;

Object.keys(input4).forEach((key) => {
  if (input4[key] > maxValue) {
    maxValue = input4[key];
    maxKey = key;
  }
});
// console.log(maxKey);

// #5: Flatten object of arrays into one array
// Input: { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
// Output: ["apple", "banana", "carrot", "pea"]
// Steps:
// 1. Create empty result array
// 2. Loop through object values
// 3. For each array, push all its elements to result (use spread or concat or loop)
// 4. Return result

let input5 = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
let result5 = [];
Object.keys(input5).forEach((key) => {
  result5.push(...input5[key]);
});
console.log(result5);

// #6: Group people by city
// Input: [{ name: "A", city: "Delhi" }, { name: "B", city: "Mumbai" }, { name: "C", city: "Delhi" }]
// Output: { Delhi: ["A", "C"], Mumbai: ["B"] }
// Steps:
// 1. Create empty result object
// 2. Loop through array of people
// 3. For each person, if city exists in result, push name, else create new array with name
// 4. Return result

// #7: Filter object by values > 50
// Input: { a: 20, b: 60, c: 40, d: 90 }
// Output: { b: 60, d: 90 }
// Steps:
// 1. Create empty result object
// 2. Loop through input object
// 3. If value > 50, add to result
// 4. Return result

// #8: Find student with highest average mark
// Input: { A: [80, 90], B: [70, 75, 85] }
// Output: "A"
// Steps:
// 1. Track bestStudent and highestAvg
// 2. Loop through students
// 3. Calculate average for each (sum / length)
// 4. If avg > highestAvg, update both variables
// 5. Return bestStudent

// #9: Unique values across all object arrays
// Input: { x: [1,2,3], y: [2,3,4], z: [4,5] }
// Output: [1,2,3,4,5]
// Steps:
// 1. Create empty Set (or array to track unique)
// 2. Loop through object values (arrays)
// 3. For each array, add all elements to Set
// 4. Convert Set back to array and return

// #10: Pick only given keys from object
// Input: { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
// Output: { name: "Rahul", city: "Noida" }
// Steps:
// 1. Create empty result object
// 2. Loop through the keys array (second parameter)
// 3. For each key, if it exists in input object, add to result
// 4. Return result

// #11: Find student with highest average marks (duplicate of #8)
// Same as #8

// #12: Sort object entries by values (ascending)
// Input: { a: 3, b: 1, c: 2 }
// Output: [["b",1], ["c",2], ["a",3]]
// Steps:
// 1. Convert object to array of entries using Object.entries()
// 2. Sort the array by second element (value) of each entry
// 3. Return sorted array

// #13: Count number of keys in object
// Input: { a: 1, b: 2, c: 3 }
// Output: 3
// Steps:
// 1. Use Object.keys() to get array of keys
// 2. Return length of that array

// #14: Capitalize string values inside object
// Input: { name: "alice", city: "delhi" }
// Output: { name: "Alice", city: "Delhi" }
// Steps:
// 1. Create empty result object
// 2. Loop through input object
// 3. For each value, capitalize first letter (charAt(0).toUpperCase() + rest)
// 4. Store in result with same key
// 5. Return result

// #15: Convert object to query string
// Input: { name: "Alice", age: 25 }
// Output: "name=Alice&age=25"
// Steps:
// 1. Get array of entries from object
// 2. Map each entry to "key=value" format
// 3. Join array with "&"
// 4. Return string

// #16: Count even and odd numbers in array
// Input: [1,2,3,4,5,6]
// Output: { even: 3, odd: 3 }
// Steps:
// 1. Create result object with even: 0, odd: 0
// 2. Loop through array
// 3. For each number, check if % 2 === 0, increment even or odd
// 4. Return result

// #17: Find common keys between two objects
// Input: { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
// Output: ["b","c"]
// Steps:
// 1. Get keys from first object
// 2. Filter keys that also exist in second object (use hasOwnProperty or 'in' operator)
// 3. Return filtered array

// #18: Convert array of objects to lookup by id
// Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }]
// Output: { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
// Steps:
// 1. Create empty result object
// 2. Loop through array
// 3. For each object, use its id as key in result
// 4. Return result

// #19: Check if all values in object are numbers
// Input: { a: 1, b: "hello", c: 3 }
// Output: false
// Steps:
// 1. Get all values from object using Object.values()
// 2. Use .every() to check if all values have typeof === 'number'
// 3. Return boolean result

// #20: Merge two objects (no sum, override second)
// Input: { a: 10, b: 20 }, { a: 5, c: 15 }
// Output: { a: 5, b: 20, c: 15 }
// Steps:
// 1. Create copy of first object (or start with empty object)
// 2. Loop through second object
// 3. Add/override all keys from second object into result
// 4. Return result
// Note: Can also use Object.assign() or spread operator {...obj1, ...obj2}
