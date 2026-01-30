// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require("fs");

fs.readFile("input.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Error reading file:", error);
  } else {
    const cleanedData = data.replace(/\s+/g, " ").trim();

    fs.writeFile("input.txt", cleanedData, "utf-8", (writeError) => {
      if (writeError) {
        console.log("Error writing file:", writeError);
      } else {
        console.log("File cleaned successfully!");
      }
    });
  }
});
