import "./styles/styles.css";
import { getWeatherData } from "./weather";
import { 
    bindSubmitForm,
    bindToggleUnit,
    bindChangeToPrev,
    bindChangeToNext
} from "./events";
import { fetchWeather } from "./api";
import { display, displayError, displayLocation } from "./ui";
import { isValid } from "./utils";

function main() {
    let weatherData;
    let dataAPI;
    let day = 0;
    bindSubmitForm(async (location) => {
        try {
            isValid(location);
            dataAPI = await fetchWeather(location);
            weatherData = getWeatherData(dataAPI);
            console.log(weatherData);
            displayLocation(location);
            display(weatherData[day], day);
        } catch (err) {
            displayError(err);
        }
    });
    bindToggleUnit(() => {
        display(weatherData[day], day);
    });
    bindChangeToPrev(() => {
        if (day > 0) day--;
        display(weatherData[day], day);
    });
    bindChangeToNext(() => {
        if (day < 15) day++;
        display(weatherData[day], day);
    })
}

main();