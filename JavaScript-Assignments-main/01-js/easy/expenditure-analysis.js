/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];

  if (transactions.length === 0) {
    return [];
  }

  let result = {};

  transactions.forEach((e) => {
    let category = e.category;
    let price = e.price;
    if (result[category]) {
      result[category] += e.price;
    } else {
      result[category] = e.price;
    }
  });

  Object.keys(result).forEach((category) => {
   let ctg = {category: category, totalSpent: result[category]} 
   output.push(ctg)
  });

  return output
}


