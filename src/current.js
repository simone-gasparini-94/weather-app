import { toCelsius } from "./utils";

function getCurrentTemp(data) {
    const f = data.currentConditions.temp;
    const c = toCelsius(f);
    return {
        c,
        f
    };
}

export function getCurrentWeather(data) {
    return {
        condition: data.currentConditions.conditions,
        temp: getCurrentTemp(data)
    };
}