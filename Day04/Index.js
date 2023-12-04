import fetch from "node-fetch";
import {configDotenv} from "dotenv";

configDotenv();

async function fetchData() {
    let response = await fetch("https://adventofcode.com/2023/day/4/input", {
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
let accumulator = 0;


// Part 1
let cleanedData = data.replaceAll(/Card.*\d:./gm, "").split("\n");
for (let i = 0; i < cleanedData.length; i++) {
    cleanedData[i] = cleanedData[i].split(" | ");
    for (let j = 0; j < cleanedData[i].length; j++) {
        cleanedData[i][j] = cleanedData[i][j].split(" ");
    }
    let matches = 0;
    for (const myNumber of cleanedData[i][0]) {
        if (cleanedData[i][1]?.includes(myNumber)) {
            if (myNumber !== "") matches++;
        }
    }
    accumulator += (matches > 0) ? Math.pow(2, matches - 1) : 0;
}

console.log(accumulator);
