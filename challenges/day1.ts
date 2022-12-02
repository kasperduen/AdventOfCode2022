//Link: https://adventofcode.com/2022/day/1
const fs = require("fs");

const sumOfElfCalories: number[] = [];
let sum = 0;

const allFileContents = fs.readFileSync("./challenges/day1-input.txt", "utf8");

allFileContents.split(/\r?\n/).forEach((line: string) => {
    sum += Number(line);
    if (!line) {
        sumOfElfCalories.push(sum);
        sum = 0;
    }
});

sumOfElfCalories.sort((a, b) => (a < b ? 1 : b < a ? -1 : 0));

//Challenge 1
console.log(sumOfElfCalories[0]);

//Challenge 2
console.log(sumOfElfCalories[0] + sumOfElfCalories[1] + sumOfElfCalories[2]);
