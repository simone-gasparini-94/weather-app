export function toCelsius(num) {
    return ((num - 32) * 5 / 9).toFixed(1);
}

export function toFahrenheit(num) {
    return ((num * 9 / 5) + 32).toFixed(1);
}