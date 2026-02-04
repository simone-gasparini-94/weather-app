import { dom } from "./dom";

export function displayCurrentTemp(temp) {
    if (!temp) return;
    dom.container.innerHTML = "";
    const p = document.createElement("p");
    p.classList.add("current-temperature");
    if (dom.toggle.classList.contains("c")) {
        p.textContent = `Current Temperature: ${temp.f}°F`;
    } else if (dom.toggle.classList.contains("f")) {
        p.textContent = `Current Temperature: ${temp.c}°C`;
    }
    dom.container.appendChild(p);
}

export function displayError() {
    dom.container.innerHTML = "";
    const p = document.createElement("p");
    p.classList.add("error");
    p.textContent = "Location not found";
    dom.container.appendChild(p);
}