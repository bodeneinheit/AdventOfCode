import fetch from "node-fetch";
import {configDotenv} from "dotenv";

configDotenv();


async function fetchData() {
    let response = await fetch("https://adventofcode.com/2023/day/2/input", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            "cookie": process.env.cookie,
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
let cleanedGames = {};

for (let [index, game] of games.entries()) {
    let pull = game.split(":")[1]?.split(";");
    if (!pull) continue;
    cleanedGames[index + 1] = [];
    for (const boxes of pull) {
        let redMatch = boxes.match(/(\d*)red/);
        let greenMatch = boxes.match(/(\d*)green/);
        let blueMatch = boxes.match(/(\d*)blue/);
        cleanedGames[index + 1].push({
            "red": (redMatch) ? redMatch[1] : 0,
            "green": (greenMatch) ? greenMatch[1] : 0,
            "blue": (blueMatch) ? blueMatch[1] : 0
        });
    };
}
console.log(cleanedGames);
