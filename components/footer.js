class ReusableFooter extends HTMLElement {
    connectedCallback() {
        // Dynamically load rng-bg-btn.js
        const script = document.createElement('script');
        script.src = '../components/rng-bg-btn.js';
        script.type = 'module';
        document.head.appendChild(script);

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