export function isValid(location) {
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(location.trim())) {
        throw new Error("Invalid input");
    }
}

export function toCelsius(num) {
    return ((num - 32) * 5 / 9).toFixed(1);
}

export function toFahrenheit(num) {
    return ((num * 9 / 5) + 32).toFixed(1);
}