class ReusableFooter extends HTMLElement {
    connectedCallback() {
        // Dynamically load rng-bg-btn.js
        // Only inject the script if it hasn't been added yet
        const scriptSrc = '../components/rng-bg-btn.js';
        if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
            const script = document.createElement('script');
            script.src = scriptSrc;
            script.type = 'module';
           document.head.appendChild(script);
       }

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