import "./styles/styles.css";
import { getCurrentTemp } from "./temp";
import { bindSubmitForm, bindToggleUnit } from "./events";
import { fetchWeather } from "./api";
import { displayCurrentTemp, displayError } from "./ui";

function main() {
    const weatherData = {};
    bindSubmitForm(async (location) => {
        try {
            const data = await fetchWeather(location);
            weatherData.currentTemp = getCurrentTemp(data);
            displayCurrentTemp(weatherData.currentTemp);
        } catch(err) {
            displayError();
        }
    });
    bindToggleUnit(() => {
        displayCurrentTemp(weatherData.currentTemp);
    })
}

main();