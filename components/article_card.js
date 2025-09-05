function articleCard(imgSrc, imgAlt, title, text, linkHref, linkText) {
    return `
    <div class="article-card">
        <img src="${imgSrc}" class="card-img-top" alt="${imgAlt}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${text}</p>
            <a href="${linkHref}" class="btn btn-primary">${linkText}</a>
        </div>
    </div>
`;
}