import { generateRandomColor } from "../scripts/random_background.js";


class RngBgBtn extends HTMLElement {
    connectedCallback() {
        const buttonId = "random";
        this.innerHTML = `<button id="${buttonId}">Random</button>`;
        document.querySelector(`#${buttonId}`).onclick = function () {
            document.body.style.backgroundColor = generateRandomColor();
        };
    }
}

customElements.define("rng-bg-btn", RngBgBtn);