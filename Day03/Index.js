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

// Part 1
const lineLength = data.split("\n")[0].length;
data = data.replace(/\n/gm, "");

const notSymbols = "0123456789.";
const reg = /(\d{1,3})/g;

let accumulator = 0;
let results = [];

while ((results = reg.exec(data)) !== null) {
    if (checkPartNumber(results.index, results[0].length)) {
        accumulator += Number(results[0]);
    }
}

function checkPartNumber(index, length){
    for (let i = -1; i < length+1; i ++) {
        if (((!notSymbols.includes(data[index-lineLength+i]) && data[index-lineLength+i] !== undefined)) || (!notSymbols.includes(data[index+i]) && data[index+i] !== undefined) || (!notSymbols.includes(data[index+lineLength+i]) && data[index+lineLength+i] !== undefined)) {
            return true;
        }
    }
    return false;
};

console.log(accumulator);

// Day 2

