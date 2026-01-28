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
let indexresult = {};
index.forEach((item) => {
  if (indexresult[item.category]) {
    indexresult[item.category].push(item.id);
  } else {
    indexresult[item.category] = [item.id];
  }
});
console.log(indexresult);

// #11: Remove deeply nested key from object
// Input: { a: { b: { c: 1, d: 2 } } }, remove "c"
// Output: { a: { b: { d: 2 } } }

let removeKey = { a: { b: { c: 1, d: 2 } } };
delete removeKey.a.b.c;
console.log(removeKey);

// #12: Check if two objects are deeply equal
// Input: { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }
// Output: true

let obj1 = { a: { x: 1, y: 2 } };
let obj2 = { a: { x: 1, y: 2 } };
let isEqual = (obj1, obj2) => {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (!isEqual(obj1[key], obj2[key])) {
      return true;
    }
  }
  return true;
};
console.log(isEqual(obj1, obj2));

// #13: Deep flatten nested arrays inside object
// Input: { a: [1, [2, [3]]], b: [4, [5]] }
// Output: { a: [1,2,3], b: [4,5] }

let deepFlatten = { a: [1, [2, [3]]], b: [4, [5]] };
let resultDeep = {};
Object.entries(deepFlatten).forEach(([key, value]) => {
  resultDeep[key] = value.flat(Infinity);
});
console.log(resultDeep);
// #14: Find most repeated word across categories
// Input: { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
// Output: "apple"

let input14 = {
  fruits: ["apple", "apple", "banana"],
  drinks: ["apple", "tea"],
};
let result14 = {};
Object.entries(input14).forEach(([key, value]) => {
  value.forEach((item) => {
    if (result14[item]) {
      result14[item] = result14[item] + 1;
    } else {
      result14[item] = 1;
    }
  });
});
let mostRepeatedWord = Object.entries(result14).reduce((acc, curr) => {
  if (acc[1] < curr[1]) {
    acc = curr;
  }
  return acc;
});
console.log(mostRepeatedWord[0]);

// #15: Find intersection of all arrays in object
// Input: { a: [1,2,3], b: [2,3,4], c: [3,4,5] }
// Output: [3]

let input15 = {
  a: [1, 2, 3],
  b: [2, 3, 4],
  c: [3, 4, 5],
};
let result15 = input15.a.filter((item) =>
  Object.values(input15).every((arr) => arr.includes(item)),
);
console.log(result15);

// #16: Deep merge two nested objects
// Input: { a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }
// Output: { a: { x: 1, y: 3, z: 4 } }


let obbj1 = { a: { x: 1, y: 2 } };
let obbj2 = { a: { y: 3, z: 4 } };
let deepMerge = (obbj1, obbj2) => {
  let result = { ...obbj1 };
  Object.entries(obbj2).forEach(([key, value]) => {
    if (typeof value === "object") {
      result[key] = deepMerge(result[key], value);
    } else {
      result[key] = value;
    }
  });
  return result;
};
console.log(deepMerge(obbj1, obbj2));

// #17: Nested object destructuring
// Input: { user: { profile: { name: "Alice", age: 25 } } }
// Output: "Alice 25"


let input17 = { user: { profile: { name: "Alice", age: 25 } } };
let { user: { profile: { name, age } } } = input17;
console.log(`${name} ${age}`);

// #18: Find top N keys by value
// Input: { a: 10, b: 50, c: 30, d: 40 }, N=2
// Output: ["b","d"]


let input18 = { a: 10, b: 50, c: 30, d: 40 };
let N = 2;
let result18 = Object.entries(input18)
  .sort((a, b) => b[1] - a[1])
  .slice(0, N)
  .map((item) => item[0]);
console.log(result18);

// #19: Sort array of objects by name then age
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Alice", age: 22 }]
// Output: [{ name: "Alice", age: 22 }, { name: "Alice", age: 30 }, { name: "Bob", age: 25 }]


let input19 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 },
];
let result19 = input19.sort((a, b) => {
  if (a.name === b.name) {
    return a.age - b.age;
  }
  return a.name.localeCompare(b.name);
});
console.log(result19);


// #20: Reconcile two lists (missing + extra items)
// Input: expected:["a","b","c"], actual:["b","c","d"]
// Output: { missing:["a"], extra:["d"] }


let expected = ["a", "b", "c"];
let actual = ["b", "c", "d"];
let result20 = {
  missing: expected.filter((item) => !actual.includes(item)),
  extra: actual.filter((item) => !expected.includes(item)),
};
console.log(result20);