import fetch from "node-fetch";
import {configDotenv} from "dotenv";

configDotenv();
async function fetchData() {
    let response = await fetch("https://adventofcode.com/2023/day/1/input", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "cookie": process.env.cookie
        },
        "body": null,
        "method": "GET"
    });
    response = await response.text();
    return response;
}
const data = await fetchData();

// Part 1
let counter = 0;
let cleanedData = data.replace(/[^\d\n]/g, '').split('\n');
for (let line of cleanedData) {
    counter += Number(line.charAt(0) + ((line.length > 1) ? line.charAt(line.length-1) : line.charAt(0)));
}
console.log(counter);

// Part 2
const wordsMap = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
    "twone": "21",
    "oneight": "18",
    "threeight": "38",
    "fiveight": "58",
    "nineight": "98",
    "eightwo": "82"
};

let inputArray = data.split("\n");
let counter2 = 0;

for (let entry of inputArray) {
    if (entry) {
        entry = entry.replace(/(?:twone|oneight|threeight|fiveight|nineight|eightwo|zero|one|two|three|four|five|six|seven|eight|nine|)/g, match => wordsMap[match]);
        entry = entry.match(/\d/gm);
        counter2 += Number((entry.length > 1) ? entry[0] + entry[entry.length - 1] : entry + entry);
    }
}
console.log(counter2);