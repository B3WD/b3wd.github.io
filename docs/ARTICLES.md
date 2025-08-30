# Article Management System

This repository now includes a complete article management system that allows you to write and display articles on the website.

## How It Works

The article system consists of:

1. **Article Metadata** (`data/articles.json`) - Contains information about each article
2. **Article Content** (`articles/`) - Individual HTML files with the full article content
3. **Article Listing** (`views/articles.html`) - Displays all articles in a grid layout
4. **Styling** (`styles/article.css`) - Styles for individual article pages

## Adding a New Article

To add a new article to the website:

### 1. Add Article Metadata

Edit `data/articles.json` and add a new entry:

```json
{
  "id": "your-article-slug",
  "title": "Your Article Title",
  "description": "A brief description of your article content.",
  "author": "Author Name",
  "date": "YYYY-MM-DD",
  "image": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNDI4NWY0Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Zb3VyIFRpdGxlPC90ZXh0Pjwvc3ZnPg==",
  "tags": ["tag1", "tag2", "tag3"]
}
```

**Important**: 
- The `id` should be a URL-friendly slug (lowercase, hyphens instead of spaces)
- The `image` field uses a base64-encoded SVG for placeholder images
- Make sure to add a comma after the previous article entry

### 2. Create Article Content

Create a new HTML file in the `articles/` directory named `{id}.html` (using the same ID from step 1).

Use this template:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../styles/style.css" rel="stylesheet">
    <link href="../styles/article.css" rel="stylesheet">
    <title>Your Article Title</title>
</head>
<body class="tcentered">
    <reusable-header></reusable-header>

    <main class="article-content">
        <article>
            <header class="article-header">
                <h1>Your Article Title</h1>
                <div class="article-meta">
                    <span class="author">By Author Name</span>
                    <span class="date">Date</span>
                </div>
                <div class="article-tags">
                    <span class="tag">tag1</span>
                    <span class="tag">tag2</span>
                    <span class="tag">tag3</span>
                </div>
            </header>
            
            <div class="article-body">
                <!-- Your article content goes here -->
                <h2>Section Heading</h2>
                <p>Your content...</p>
                
                <!-- You can use code blocks like this -->
                <pre><code>Your code here</code></pre>
                
                <!-- And inline code like this -->
                <p>Use <code>inline code</code> for short snippets.</p>
            </div>
        </article>
        
        <nav class="article-navigation">
            <a href="../views/articles.html" class="back-to-articles">← Back to Articles</a>
        </nav>
    </main>

    <reusable-footer></reusable-footer>
</body>

<script src="../components/header.js"></script>
<script src="../components/footer.js"></script>

</html>
```

### 3. Test Your Article

1. Open the website in a browser
2. Navigate to the Articles page
3. Verify your new article appears in the listing
4. Click "Read More" to view the full article
5. Test the "Back to Articles" navigation

## Current Articles

The system currently includes three sample articles:

1. **Getting Started with Web Development** - A beginner's guide
2. **Modern CSS Techniques for 2024** - Advanced CSS features  
3. **JavaScript Fundamentals** - Core JavaScript concepts

## File Structure

```
/
├── data/
│   └── articles.json          # Article metadata
├── articles/
│   ├── getting-started-with-web-development.html
│   ├── modern-css-techniques.html
│   └── javascript-fundamentals.html
├── views/
│   └── articles.html          # Article listing page
├── styles/
│   ├── style.css             # Global styles
│   ├── article_card.css      # Article card styles
│   └── article.css           # Individual article page styles
└── components/
    └── article_card.js       # Article card component
```

## Styling

The article system includes responsive styling that looks great on both desktop and mobile devices. The individual article pages feature:

- Clean, readable typography
- Syntax highlighting for code blocks
- Responsive design
- Tag display
- Author and date information
- Easy navigation back to the article listing

## Future Enhancements

Possible improvements to consider:

- Search functionality
- Category/tag filtering
- Comments system
- Social sharing buttons
- Related articles suggestions
- RSS feed generation