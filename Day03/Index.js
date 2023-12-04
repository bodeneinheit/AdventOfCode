import fetch from "node-fetch";
import {configDotenv} from "dotenv";

configDotenv();

async function fetchData() {
    let response = await fetch("https://adventofcode.com/2023/day/3/input", {
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

let data = await fetchData();

// Part 1 & 2
const lineLength = data.split("\n")[0].length;
data = data.replace(/\n/gm, "");

const notSymbols = "0123456789.";
const reg = /(\d{1,3})/g;

let accumulator = 0;
let accumulatorTwo = 0;
let results = [];
let starMap = new Map();

while ((results = reg.exec(data)) !== null) {
    if (checkPartNumber(results.index, results[0].length)) {
        accumulator += Number(results[0]);
    }
}

function checkPartNumber(index, length){
    for (let i = -1; i < length+1; i ++) {
        let upperRow = (index-lineLength+i);
        let middleRow = (index+i);
        let lowerRow = (index+lineLength+i);
        if (((!notSymbols.includes(data[upperRow]) && data[upperRow] !== undefined)) || (!notSymbols.includes(data[middleRow]) && data[middleRow] !== undefined) || (!notSymbols.includes(data[lowerRow]) && data[lowerRow] !== undefined)) {
            if (data[upperRow] === "*") addToStarMap(upperRow, data.substring(index, index+length));
            if (data[middleRow] === "*") addToStarMap(middleRow, data.substring(index, index+length));
            if (data[lowerRow] === "*") addToStarMap(lowerRow, data.substring(index, index+length));
            return true;
        }
    }
    return false;
};

function addToStarMap(starIndex, number) {
    if (!starMap[starIndex]) {
        starMap[starIndex] = [number];
    } else {
        starMap[starIndex].push(number);
    }
}

// check for multiple occurrences in array
for (let starIndex in starMap) {
    if (starMap[starIndex].length === 2) {
        accumulatorTwo += starMap[starIndex][0] * starMap[starIndex][1];
    }
}

console.log(accumulator);
console.log(accumulatorTwo);