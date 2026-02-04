import { dom } from "./dom";

export function bindSubmitForm(callback) {
    dom.form.addEventListener("submit", (e) => {
        e.preventDefault();
        callback(dom.form.elements.location.value);
    });
}