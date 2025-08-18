class ReusableHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="../index.html">Home</a>
            <a href="../views/articles.html">Articles</a>
        </header>
        `
    }
}

customElements.define("reusable-header", ReusableHeader)