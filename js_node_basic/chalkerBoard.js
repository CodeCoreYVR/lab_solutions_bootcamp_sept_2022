import chalk from "chalk";

// Skip first 2 elements from `process.argv` and assign remaining 3 elements
// to variables: colour, width and height.
const [, , colour, width, height] = process.argv;

const board = Array.from({ length: width * height })
  // Alternate the background color of even numbered
  // characters
  .map(
    (v, i) =>
      (i + 1 + Math.floor(i / width)) % 2 === 0
        ? chalk.bgKeyword(colour)(" ")
        : " "
  )
  // Join all characters into one string with a "\n" character
  // every `width` characters.
  .reduce((acc, v, i) => ((i + 1) % width === 0 ? acc + v + "\n" : acc + v));

console.log(board);