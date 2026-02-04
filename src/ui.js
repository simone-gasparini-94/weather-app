import { dom } from "./dom";

export function displayCurrentTemp(temp) {
    dom.container.innerHTML = "";
    const p = document.createElement("p");
    p.classList.add("current-temperature");
    p.textContent = temp + '°C';
    dom.container.appendChild(p);
}

export function displayError() {
    dom.container.innerHTML = "";
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = "Location not found";
    dom.container.appendChild(p);
}