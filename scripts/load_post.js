async function loadPost() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'articles';
    const articleId = params.get('id');

    if (!articleId) {
        document.querySelector('.article-content').innerHTML = '<p>Article ID not provided.</p>';
        return;
    }

    try {
        const response = await fetch(`../posts/${type}/${articleId}.html`);
        if (!response.ok) throw new Error('Article not found');
        const articleHtml = await response.text();
        document.querySelector('.article-content').innerHTML = articleHtml;
    } catch (error) {
        console.error('Error loading article:', error);
        document.querySelector('.article-content').innerHTML = '<p>Sorry, the article could not be loaded at this time.</p>';
    }
}

async function fillPostHeader() {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('id');
    const type = params.get('type') || 'articles';

    if (!articleId) return;

    try {
        const response = await fetch(`../data/${type}_metadata.json`);
        const articles = await response.json();
        const article = articles.find(a => a.id === articleId);
        if (!article) return;

        // class=article-header
        const header = document.querySelector('.article-header');
        header.innerHTML = `
                <h1>${article.title}</h1>
                <div class="article-meta">
                    <span class="author">By ${article.author}</span>
                    <span class="date">${article.date}</span>
                </div>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
    } catch (error) {
        console.error('Error loading article metadata:', error);
    }
}

function updateNavigation() {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') || 'articles';

    const nav = document.querySelector('.article-navigation');
    if (!nav) return;

    if (type === 'articles') {
        nav.innerHTML = `<a href="../views/library.html" class="back-to-posts">Back to Articles</a>`;
    } else if (type === 'reads') {
        nav.innerHTML = `<a href="../views/library.html?type=reads" class="back-to-posts">Back to Reads</a>`;
    } else {
        nav.innerHTML = `<a href="../views/library.html" class="back-to-posts">Back to Library</a>`;
    }
}

// Load the article when the page loads
window.addEventListener('load', fillPostHeader);
window.addEventListener('load', loadPost);
window.addEventListener('load', updateNavigation);