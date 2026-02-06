import { dom } from "./dom";
import { toCelsius } from "./utils";
import { addDays, format } from "date-fns";

function displayDay(index) {
    if (index < 0 || index > 14) {
        console.error("Invalid index");
        return;
    }
    const p = dom.container.querySelector(".day");
    const day = addDays(new Date(), 0);
    p.textContent = format(day, 'dd MMMM yyyy');
}

function displayCondition(condition) {
    if (!condition) return;
    const p = dom.container.querySelector(".condition")
    p.classList.add("current-conditon");
    p.textContent = `${condition}`;
}

function displayTemp(temp) {
    if (!temp) return;
    const p = dom.container.querySelector(".temperature")
    if (dom.toggle.classList.contains("c")) {
        p.textContent = `${temp}°F`;
    } else if (dom.toggle.classList.contains("f")) {
        p.textContent = `${toCelsius(temp)}°C`;
    }
}

export function display(data, day) {
    dom.error.classList.add("hidden");
    dom.container.classList.remove("hidden");
    displayDay(day);
    displayCondition(data.conditions);
    displayTemp(data.temp);
}


export function displayError() {
    dom.container.classList.add("hidden");
    dom.error.classList.remove("hidden");
    p.textContent = "Location not found";
}