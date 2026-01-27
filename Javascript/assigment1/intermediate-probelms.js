// #1: Sum all transactions per user
// Input: [{ user: "A", amount: 100 }, { user: "B", amount: 200 }, { user: "A", amount: 50 }]
// Output: { A: 150, B: 200 }

let transactions = [
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 },
];
let resultTransactions = {};
transactions.forEach((key) => {
  if (resultTransactions[key.user]) {
    resultTransactions[key.user] += key.amount;
  } else {
    resultTransactions[key.user] = key.amount;
  }
});
// console.log(resultTransactions);

// #2: Transform API response to object (id → name)
// Input: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
// Output: { 1: "Alice", 2: "Bob" }

let apiResponse = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

let resultResponse = {};
let result = apiResponse.forEach((key) => {
  resultResponse[key.id] = key.name;
});
// console.log(resultResponse);

// #3: Remove falsy values from object
// Input: { a: 0, b: null, c: "hello", d: undefined, e: 5 }
// Output: { c: "hello", e: 5 }

let removefalsyValues = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
let resultRemovedFalsy = {};
Object.keys(removefalsyValues).forEach((key) => {
  if (!!removefalsyValues[key]) {
    resultRemovedFalsy[key] = removefalsyValues[key];
  }
});

// console.log(resultRemovedFalsy);

// #4: Check for permissions from roles
// Input: roles={ admin:["read","write"], user:["read"], staff:["write"]}, checkRole="user", action="write"
// Output: false

let roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
let checkRole = "user";
let action = "write";
let permissions = roles[checkRole];
let resultRole = permissions.includes(action);
// console.log(resultRole);

// #5: Transform array of orders into revenue per category
// Input: [{ id: 1, category: "electronics", price: 100 }, { id: 2, category: "clothes", price: 50 }, { id: 3, category: "electronics", price: 200 }]
// Output: { electronics: 300, clothes: 50 }

let orders = [
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 },
];
let resultOrders = {};
orders.forEach((item) => {
  if (resultOrders[item.category]) {
    resultOrders[item.category] += item.price;
  } else {
    resultOrders[item.category] = item.price;
  }
});
// console.log(resultOrders);

// #6: Remove duplicate objects by id
// Input: [{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 1, name: "A" }]
// Output: [{ id: 1, name: "A" }, { id: 2, name: "B" }]

let duplicates = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];
let emptySet = new Set();
let resultDuplicates = [];
duplicates.forEach((obj) => {
  if (emptySet.has(obj.id)) {
  } else {
    emptySet.add(obj.id);
    resultDuplicates.push(obj);
  }
});
// console.log(resultDuplicates);

// #7: Chunk object entries into groups of size
// Input: { a: 1, b: 2, c: 3, d: 4 }, size=2
// Output: [ [["a",1],["b",2]], [["c",3],["d",4]] ]
// Steps:
// 1. Get entries from object using Object.entries()
// 2. Create empty result array
// 3. Loop through entries with index
// 4. Every 'size' elements, create a new chunk (use slice or manual grouping)
// 5. Push chunk to result
// 6. Return result

let entries = { a: 1, b: 2, c: 3, d: 4 };
let size = 2;
let resultEntries = [];
let allEntries = Object.entries(entries);
allEntries.forEach((item, index) => {
  if (index % size === 0) {
    let chunk = allEntries.slice(index, index + size);
    resultEntries.push(chunk);
  }
});
// console.log(resultEntries);

// #8: Find longest string among object values
// Input: { a: "apple", b: "banana", c: "kiwi" }
// Output: "banana"

let find = { a: "apple", b: "banana", c: "kiwi" };
let longestString;
let longestLength = 0;
let allValues = Object.values(find);
allValues.forEach((str) => {
  if (str.length > longestLength) {
    longestLength = str.length;
    longestString = str;
  }
});
// console.log(longestString);

// #9: Convert language translations structure
// Input: { en: { hello: "Hello", bye: "Goodbye" }, fr: { hello: "Bonjour", bye: "Au revoir" }, es: { hello: "Hola" } }
// Output: { hello: { en: "Hello", fr: "Bonjour", es: "Hola" }, bye: { en: "Goodbye", fr: "Au revoir" } }

let translations = {
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" },
};

let resultedTranslation = {};
Object.keys(translations).forEach((key) => {
  Object.keys(translations[key]).forEach((e) => {
    if (resultedTranslation[e]) {
      resultedTranslation[e][key] = translations[key][e];
    } else {
      resultedTranslation[e] = {};
      resultedTranslation[e][key] = translations[key][e];
    }
  });
});
console.log(resultedTranslation);

// #10: Build index of ids grouped by category
// Input: [{ id: 1, category: "fruit" }, { id: 2, category: "veggie" }, { id: 3, category: "fruit" }]
// Output: { fruit: [1,3], veggie: [2] }


let index = [
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" },
];
let indexresult = {}
index.forEach((item)=>{
if (indexresult[item.category]) {
  indexresult[item.category].push(item.id);
} else {
  indexresult[item.category] = [item.id];
}
  
})
console.log(indexresult);

// #11: Remove deeply nested key from object
// Input: { a: { b: { c: 1, d: 2 } } }, remove "c"
// Output: { a: { b: { d: 2 } } }
// Steps:
// 1. Access the nested object where key exists (a.b)
// 2. Use delete operator to remove the key
// 3. Return modified object
// Note: This mutates the original object

// #12: Check if two objects are deeply equal
// Input: { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }
// Output: true
// Steps:
// 1. Check if both are objects (not null, not array)
// 2. Compare number of keys
// 3. Loop through keys of first object
// 4. For each key, recursively compare values
// 5. Return true if all match, false otherwise

// #13: Deep flatten nested arrays inside object
// Input: { a: [1, [2, [3]]], b: [4, [5]] }
// Output: { a: [1,2,3], b: [4,5] }
// Steps:
// 1. Create empty result object
// 2. Loop through object entries
// 3. For each array value, use .flat(Infinity) to flatten completely
// 4. Add flattened array to result with same key
// 5. Return result

// #14: Find most repeated word across categories
// Input: { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
// Output: "apple"
// Steps:
// 1. Create object to count all words
// 2. Loop through object values (arrays)
// 3. For each array, loop through words and count occurrences
// 4. Find word with highest count (similar to problem #4 from basics)
// 5. Return most repeated word

// #15: Find intersection of all arrays in object
// Input: { a: [1,2,3], b: [2,3,4], c: [3,4,5] }
// Output: [3]
// Steps:
// 1. Get all arrays from object values
// 2. Take first array as reference
// 3. Filter elements that exist in ALL other arrays
// 4. Use .every() to check if element exists in each array
// 5. Return filtered result

// #16: Deep merge two nested objects
// Input: { a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }
// Output: { a: { x: 1, y: 3, z: 4 } }
// Steps:
// 1. Create result object starting with first object
// 2. Loop through second object keys
// 3. For each key, check if value is object
// 4. If both values are objects, recursively merge them
// 5. Otherwise, override with second object's value
// 6. Return merged result

// #17: Nested object destructuring
// Input: { user: { profile: { name: "Alice", age: 25 } } }
// Output: "Alice 25"
// Steps:
// 1. Use destructuring syntax to extract nested values
// 2. Access user.profile.name and user.profile.age
// 3. Return or log the values

// #18: Find top N keys by value
// Input: { a: 10, b: 50, c: 30, d: 40 }, N=2
// Output: ["b","d"]
// Steps:
// 1. Convert object to entries array
// 2. Sort entries by value in descending order
// 3. Take first N entries using .slice(0, N)
// 4. Map to get just the keys
// 5. Return array of keys

// #19: Sort array of objects by name then age
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Alice", age: 22 }]
// Output: [{ name: "Alice", age: 22 }, { name: "Alice", age: 30 }, { name: "Bob", age: 25 }]
// Steps:
// 1. Use .sort() with comparison function
// 2. First compare by name (a.name vs b.name)
// 3. If names are equal, compare by age
// 4. Return sorted array

// #20: Reconcile two lists (missing + extra items)
// Input: expected:["a","b","c"], actual:["b","c","d"]
// Output: { missing:["a"], extra:["d"] }
// Steps:
// 1. Create result object with missing and extra arrays
// 2. Find missing: filter expected items not in actual (use .includes())
// 3. Find extra: filter actual items not in expected
// 4. Return result object
