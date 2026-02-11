import { getColorClass } from "./color-temp";
import { dom } from "./dom";
import { toCelsius } from "./utils";
import { addDays, format } from "date-fns";

function displayDay(index) {
    const p = dom.container.querySelector(".day");
    const day = addDays(new Date(), index);
    p.textContent = format(day, 'dd MMMM yyyy');
}

function displayCondition(condition) {
    if (!condition) return;
    const p = dom.container.querySelector(".condition")
    p.textContent = `${condition}`;
}

function displayTemp(temp) {
    if (!temp) return;
    const div = dom.container.querySelector("#temperature-color");
    div.removeAttribute("class");
    const cls = getColorClass(temp);
    div.classList.add(cls);
    const p = dom.container.querySelector(".temperature");
    if (dom.toggle.classList.contains("c")) {
        p.textContent = `${temp}°F`;
    } else if (dom.toggle.classList.contains("f")) {
        p.textContent = `${toCelsius(temp)}°C`;
    }
}

export function display(data, day) {
    if (day < 0 || day > 14) {
        console.error("Invalid index");
        return;
    }
    dom.prev.disabled = day === 0 ? true : false;
    dom.next.disabled = day === 14 ? true : false;
    dom.error.classList.add("hidden");
    dom.container.classList.remove("hidden");
    displayDay(day);
    displayCondition(data.conditions);
    displayTemp(data.temp);
}

export function displayLocation(location) {
    let formatted = location[0].toUpperCase()
        + location.slice(1).toLowerCase();
    dom.header.textContent = formatted;
}


export function displayError() {
    dom.container.classList.add("hidden");
    dom.error.classList.remove("hidden");
    dom.error.textContent = "Location not found";
}