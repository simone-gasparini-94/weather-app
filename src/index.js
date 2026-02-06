import "./styles/styles.css";
import { getWeatherData } from "./weather";
import { bindSubmitForm, bindToggleUnit } from "./events";
import { fetchWeather } from "./api";
import { display, displayError } from "./ui";

function main() {
    let weatherData;
    let dataAPI;
    let day = 0;
    bindSubmitForm(async (location) => {
        try {
            dataAPI = await fetchWeather(location);
            weatherData = getWeatherData(dataAPI);
            console.log(weatherData);
            display(weatherData[day], day);
        } catch(err) {
            displayError();
        }
    });
    bindToggleUnit(() => {
        display(weatherData[day], day);
    })
}

main();