const fs = require("fs");
const data = fs.readFileSync("./day5/input.txt", { encoding: "utf8", flag: "r" });
// 1. REMOVE LAST NEW LINE
// 2. 
const array = data.split("\n");
let count = 0;

const cut = (index, sets) => sets[index].split("-").map(Number);
const stretch = (array) =>
  Array.from(
    new Array(array[1] - array[0] + 1).fill(array[0]),
    (x, i) => x + i
  );

const max = array.length;

for (let i = 0; i < max; i++) {
  let sets = array[i].split(",");
  let one = cut(0, sets);
  let two = cut(1, sets);
  let stretched1 = stretch(one);
  let stretched2 = stretch(two);
  if (
    stretched1.includes(two[0]) ||
    stretched1.includes(two[1]) ||
    stretched2.includes(one[0]) ||
    stretched2.includes(one[1])
  ) {
    count++;
  }
}

console.log(count);
