import { generateRandomColor } from "../scripts/random_background.js";

class RngBgBtn extends HTMLElement {
    static btnCount = 0;

    connectedCallback() {
        const buttonId = `random-${RngBgBtn.btnCount++}`;
        this.innerHTML = `<button id="${buttonId}">Random</button>`;
        this.querySelector(`#${buttonId}`).onclick = function () {
            document.body.style.backgroundColor = generateRandomColor();
            console.log('Background color changed to:', document.body.style.backgroundColor);
        };
    }
}

customElements.define("rng-bg-btn", RngBgBtn);