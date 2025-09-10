class ReusableHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <a href="../index.html">Home</a>
                <a href="../views/library.html?type=articles">Articles</a>
                <a href="../views/library.html?type=reads">Reads</a>
            </nav>
        </header>
        `
    }
}

customElements.define("reusable-header", ReusableHeader)