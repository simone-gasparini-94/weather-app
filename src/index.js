import "./styles/styles.css";
import { getCurrentTemp } from "./temp";
import { bindSubmitForm } from "./events";
import { fetchWeather } from "./api";
import { displayCurrentTemp, displayError } from "./ui";

function main() {
    bindSubmitForm(async (location) => {
        try {
            const weatherData = await fetchWeather(location);
            const currentTemp = getCurrentTemp(weatherData);
            displayCurrentTemp(currentTemp.c);
        } catch(err) {
            displayError();
        }
    });
}

main();