import { injectComponentDependencies } from "../scripts/component_dependencies.js";


class ReusableFooter extends HTMLElement {
    connectedCallback() {        
        injectComponentDependencies(
            '../components/rng-bg-btn.js'
        );

        this.innerHTML = `
        <footer class="fsmall">
            <div>
                Have fun with the background color!
            </div>
            <div>
                <rng-bg-btn></rng-bg-btn>
            </div>
        </footer>
        `;
    }
}

customElements.define("reusable-footer", ReusableFooter)