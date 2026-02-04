export function bindSubmitForm(callback) {
    const form = document.querySelector("#location-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        callback(form.elements.location.value);
    });
}