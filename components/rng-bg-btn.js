import { generateRandomColor } from "../scripts/random_background.js";

class RngBgBtn extends HTMLElement {
    static btnCount = 0;

    connectedCallback() {
        const whiteId = `white-${RngBgBtn.btnCount++}`;
        const randomId = `random-${RngBgBtn.btnCount++}`;
        this.innerHTML = `
            <button id="${whiteId}">White</button>
            <button id="${randomId}">Random</button>
        `;
        this.querySelector(`#${whiteId}`).onclick = function () {
            document.body.style.backgroundColor = "#ffffff";
            sessionStorage.setItem('bgc', "#ffffff");
            console.log('Background color changed to: #ffffff');
        };
        this.querySelector(`#${randomId}`).onclick = function () {
            const color = generateRandomColor();
            document.body.style.backgroundColor = color;
            sessionStorage.setItem('bgc', color);
            console.log('Background color changed to:', color);
        };
    }
}

customElements.define("rng-bg-btn", RngBgBtn);