class ReusableFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div></div>
        </footer>
        `
    }
}

customElements.define("reusable-footer", ReusableFooter)