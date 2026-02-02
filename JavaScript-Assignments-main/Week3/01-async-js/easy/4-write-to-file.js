// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');


fs.writeFile('output.txt', 'This is the content I am writing to the file!', 'utf-8', (error) => {
  if (error) {
    console.log('Error writing file:', error);
  } else {
    console.log('File written successfully!');
  }
});


let sum = 0;
for (let i = 0; i < 1000000000; i++) {
  sum += i;
}
console.log('Expensive operation done:', sum);