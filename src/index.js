import "./styles/styles.css";
import { getWeatherData } from "./weather";
import { 
    bindSubmitForm,
    bindToggleUnit,
    bindChangeToPrev,
    bindChangeToNext
} from "./events";
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
        } catch (err) {
            displayError();
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