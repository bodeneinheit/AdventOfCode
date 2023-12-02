import fetch from "node-fetch";

async function fetchData() {
    let response = await fetch("https://adventofcode.com/2023/day/2/input", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "cookie": "",
            "Referer": "https://adventofcode.com/2023/day/2",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });
    response = await response.text();
    return response;
}

const data = await fetchData();
const startCubes = {
    "red": 12,
    "green": 13,
    "blue": 14
}

let games = data.replaceAll(" ", "").split("\n");

for (let [index, game] of games.entries()) {
    console.log(game.split(":")[1]?.split(";"));
}