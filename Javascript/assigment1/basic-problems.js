// #1: Sum values in object arrays
// Input: { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// Output: { food: 60, travel: 20, bills: 100 }
const input1 = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
let result1 = {};
Object.keys(input1).forEach((key) => {
  let result = input1[key].reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  result1[key] = result;
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

let input5 = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
let result5 = [];
Object.keys(input5).forEach((key) => {
  result5.push(...input5[key]);
});
// console.log(result5);

// #6: Group people by city
// Input: [{ name: "A", city: "Delhi" }, { name: "B", city: "Mumbai" }, { name: "C", city: "Delhi" }]

let input6 = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
];
let result6 = {};
input6.forEach((item) => {
  if (result6[item.city]) {
    result6[item.city].push(item.name);
  } else {
    result6[item.city] = [item.name];
  }
});
// console.log(result6);

// #7: Filter object by values > 50
// Input: { a: 20, b: 60, c: 40, d: 90 }
// Output: { b: 60, d: 90 }

let input7 = { a: 20, b: 60, c: 40, d: 90 };
let result7 = {};
Object.keys(input7).forEach((key) => {
  if (input7[key] > 50) {
    result7[key] = input7[key];
  }
});
// console.log(result7);

// #8: Find student with highest average mark
// Input: { A: [80, 90], B: [70, 75, 85] }
// Output: "A"

let input8 = { A: [80, 90], B: [70, 75, 85] };
let bestStudent;
let highestAvg = -Infinity;

Object.keys(input8).forEach((key) => {
  let sum = input8[key].reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  let avg = sum / input8[key].length;
  if (avg > highestAvg) {
    highestAvg = avg;
    bestStudent = key;
  }
});
// console.log(bestStudent);
// console.log(highestAvg);

// #9: Unique values across all object arrays
// Input: { x: [1,2,3], y: [2,3,4], z: [4,5] }
// Output: [1,2,3,4,5]

let input9 = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
let unique = new Set();
let result9;
Object.keys(input9).forEach((key) => {
  input9[key].forEach((e) => {
    unique.add(e);
  });
});
result9 = Array.from(unique);
// console.log(result9);

// #10: Pick only given keys from object
// Input: { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
// Output: { name: "Rahul", city: "Noida" }

let input10 = { name: "Rahul", age: 23, city: "Noida" };
let result10 = {};
let key10 = ["name", "city"];
key10.forEach((key) => {
  if (input10[key]) {
    result10[key] = input10[key];
  }
});
console.log(result10);

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
