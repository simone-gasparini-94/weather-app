import "./styles/styles.css";
import { bindSubmitForm } from "./events";

function main() {
    let location = null;
    bindSubmitForm((value) => {
        location = value;
        console.log(location);
    });
}

main();