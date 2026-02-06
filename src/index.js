import "./styles/styles.css";
import { getCurrentWeather } from "./current";
import { bindSubmitForm, bindToggleUnit } from "./events";
import { fetchWeather } from "./api";
import { displayCurrentWeather, displayError } from "./ui";

function main() {
    const weatherData = {};
    let dataAPI;
    bindSubmitForm(async (location) => {
        try {
            dataAPI = await fetchWeather(location);
            weatherData.current = getCurrentWeather(dataAPI);
            displayCurrentWeather(weatherData.current);
        } catch(err) {
            displayError();
        }
    });
    bindToggleUnit(() => {
        displayCurrentWeather(weatherData.current);
    })
}

main();