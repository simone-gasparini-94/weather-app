import { toCelsius } from "./utils";

export function getCurrentTemp(data) {
    const f = data.currentConditions.temp;
    const c = toCelsius(f);
    return {
        c,
        f
    };
}