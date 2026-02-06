import { dom } from "./dom";
import { toCelsius } from "./utils";

function displayDay(index) {
    if (index < 0 || index > 14) {
        console.error("Invalid index");
        return;
    }
    const p = document.createElement("p");
    p.classList.add("day");
    if (index === 0) {
        p.textContent = 'Today';
    } else {
        p.textContent = index;
    }
    dom.container.appendChild(p);
}

function displayCondition(condition) {
    if (!condition) return;
    const p = document.createElement("p");
    p.classList.add("current-conditon");
    p.textContent = `${condition}`;
    dom.container.appendChild(p);
}

function displayTemp(temp) {
    if (!temp) return;
    const p = document.createElement("p");
    p.classList.add("current-temperature");
    if (dom.toggle.classList.contains("c")) {
        p.textContent = `${temp}°F`;
    } else if (dom.toggle.classList.contains("f")) {
        p.textContent = `${toCelsius(temp)}°C`;
    }
    dom.container.appendChild(p);
}

export function display(data, day) {
    dom.container.innerHTML = "";
    displayDay(day);
    displayCondition(data.description);
    displayTemp(data.temp);
}


export function displayError() {
    dom.container.innerHTML = "";
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = "Location not found";
    dom.container.appendChild(p);
}