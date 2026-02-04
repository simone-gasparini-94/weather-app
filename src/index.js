import "./styles/styles.css";
import { bindSubmitForm } from "./events";
import { 
    fetchWeather,
} from "./api";

function main() {
    bindSubmitForm(async (location) => {
        const weatherData = await fetchWeather(location);
        console.log(weatherData);
    });
}

main();