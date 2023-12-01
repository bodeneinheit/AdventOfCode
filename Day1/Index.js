import fetch from "node-fetch";

async function fetchData() {
    let response = await fetch("https://adventofcode.com/2023/day/1/input", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "cookie": "",
            "Referer": "https://adventofcode.com/2023/day/1",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });
    response = await response.text();
    return response;
}

const data = await fetchData();

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
};

let inputArray = data.split("\n");
let counter = 0;
const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for (let entry of inputArray) {
    if (entry) {
        console.log(entry);
        entry = entry.replace("twone", "twoone");
        entry = entry.replace("oneight", "oneeight");
        entry = entry.replace("threeight", "threeeight");
        entry = entry.replace("fiveight", "fiveeight");
        entry = entry.replace("nineight", "nineeight");
        entry = entry.replace("eightwo", "eighttwo");
        entry = entry.replace(/(?:zero|one|two|three|four|five|six|seven|eight|nine)/g, match => wordsMap[match]);
        entry = entry.match(/\d/gm);

        console.log(entry);
        if (entry.length > 1) {
            counter += Number(entry[0] + entry[entry.length - 1]);
            console.log(Number(entry[0] + entry[entry.length - 1]))
        } else {
            counter += Number(entry + entry);
            console.log(Number(entry + entry));
        }
        console.log(counter);
    }
}
console.log(counter);