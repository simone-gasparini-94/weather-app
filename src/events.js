import { dom } from "./dom";

export function bindSubmitForm(callback) {
    dom.form.addEventListener("submit", (e) => {
        e.preventDefault();
        callback(dom.form.elements.location.value);
    });
}

export function bindToggleUnit(callback) {
    dom.toggle.addEventListener("click", () => {
        dom.toggle.classList.toggle("c");
        dom.toggle.classList.toggle("f");
        if (dom.toggle.classList.contains("c")) {
            dom.toggle.textContent = "°C";
        } else if (dom.toggle.classList.contains("f")) {
            dom.toggle.textContent = "°F";
        }
        callback();
    });
}

export function bindChangeToPrev(callback) {
    dom.prev.addEventListener("click" , () => {
        callback();
    });
}

export function bindChangeToNext(callback) {
    dom.next.addEventListener("click", () => {
        callback();
    });
}