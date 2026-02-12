import { toCelsius } from "./utils";

export function getColorClass(temp) {
    let t = Number(temp);
    if (Number.isNaN(t) || t < 0) {
        console.log("Invalid temperature");
        return 't20';
    }
    t = toCelsius(t);
    const temps = 
    [41, 36, 30, 25, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1, -2, -5, -10, -15, -22, -80];
    for (let i = 0; i < temps.length; i++) {
        if (t >= temps[i]) {
            return `t${i}`;
        }
    }
    return 't20';
}