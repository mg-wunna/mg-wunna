# Article Writing Rules for Mg Wunna's Blog

## Format and Structure

### File Structure

- Always use `.mdx` extension for articles
- Use placeholder cover image URL: `https://placehold.co/1200x600/ef4444/ffffff.png?font=lato&text=ARTICLE+TITLE`
- Use ArticleLayout component: `import { ArticleLayout } from '@/components/article-layout.component'`
- Each article should have its own directory with kebab-case naming
- Store article-specific images in `./images/` subdirectory within the article directory

### Import Organization

- Always import `ArticleLayout` first
- Import local images second, using descriptive camelCase names
- Group image imports logically (by section or alphabetically)
- Use descriptive filenames with hyphens: `ideal-architecture-diagram.png`
- Import with camelCase variable names: `idealArchitectureDiagram`

Example:

```javascript
import { ArticleLayout } from '@/components/article-layout.component'
import idealArchitecture from './images/ideal_architecture_principles_diagram.png'
import componentsOveruse from './images/components_overuse_example.png'
import scatteredRedux from './images/scattered_redux_logic_example.png'
```

### Article Metadata

```javascript
export const article = {
  author: 'Mg Wunna',
  date: 'YYYY-MM-DD', // Use actual publication date in YYYY-MM-DD format exclusively
  title: 'Article Title', // Break long titles across multiple lines for readability
  description: 'Brief description of the article content', // Keep concise but informative (1-2 sentences)
}

// For long titles/descriptions:
export const article = {
  author: 'Mg Wunna',
  date: '2024-10-09',
  title:
    'Long Article Titles Should Be Broken Across Multiple Lines for Better Readability',
  description:
    'Descriptions can also span multiple lines when they are long and need better formatting.',
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default (props) => <ArticleLayout article={article} {...props} />
```

### Content Guidelines

- Start with responsive cover image:

```jsx
<div style={{ width: '100%' }}>
  <Image
    src="https://placehold.co/1200x600/ef4444/ffffff.png?font=lato&text=ARTICLE+TITLE"
    alt="Cover"
    width={1200}
    height={600}
    style={{ width: '100%', height: 'auto' }}
  />
</div>
```

- Write in **simple, clear language** - avoid complex jargon
- Use **markdown formatting** for structure
- Highlight **difficult technical terms** using bold text like **`this`** for easy reference
- Include practical examples and code snippets when relevant

## Writing Style

### Language

- Use simple, conversational tone
- Explain complex concepts in easy terms
- Write as personal notes that can be referenced later
- Avoid overly formal academic language

### Technical Terms

- Use **`technical term`** format for terms that need both emphasis and code formatting
- Use **technical term** format for general emphasis of important concepts
- Be consistent within each article - don't mix formats
- Provide brief explanations for complex terms
- Use consistent terminology throughout

Examples:

- **`authentication`** - for technical terms/code
- **middleware** - for general emphasis
- **`HTTP-only cookies`** - for technical concepts

### Structure

- Use clear headings (##, ###)
- Break content into digestible sections
- Include practical examples
- Add references section at the end

## Content Requirements

### Sections to Include

1. **Introduction** - Brief overview of the topic
2. **Main Content** - Detailed explanation with examples
3. **Implementation/Practical Steps** - How to actually do it
4. **Best Practices** - Tips and recommendations
5. **Common Issues** - Problems and solutions
6. **Conclusion** - Summary and next steps
7. **References** - Links to documentation and resources

### Code Examples

- Use proper syntax highlighting
- Include comments explaining complex parts
- Show both good and bad examples when relevant
- Keep examples practical and runnable

### Images and Diagrams

- Always include a responsive cover image with proper dimensions (1200x600)
- Replace "ARTICLE+TITLE" in the URL with the actual article title using + for spaces
- Use diagrams to explain complex concepts
- Alt text for all images
- Keep images relevant and helpful
- **Cover images**: Always include full responsive styling with div wrapper
- **Local images**: Use without style attributes: `<Image src={imageMatX} alt="MatX" />`
- Store article-specific images in `./images/` subdirectory

Image Usage Examples:

```jsx
// Cover image (always responsive):
<div style={{ width: '100%' }}>
  <Image
    src="https://placehold.co/1200x600/ef4444/ffffff.png?font=lato&text=Article+Title"
    alt="Cover"
    width={1200}
    height={600}
    style={{ width: '100%', height: 'auto' }}
  />
</div>

// Local images (no style needed):
<Image src={idealArchitecture} alt="Ideal Architecture Diagram" />
```

## Personal Notes Style

- Write as if explaining to future self
- Include "why" not just "how"
- Add personal insights and experiences
- Note common mistakes and how to avoid them
- Include shortcuts and time-saving tips

## References Format

- Always include a References section at the end
- Use proper markdown link format: `[Link Text](URL)`
- Group similar links together
- Include official documentation, guides, and tools mentioned

Example:

```markdown
## References

- [JWT Best Practices](https://auth0.com/blog/jwt-best-practices/)
- [HTTP-Only Cookies Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#security)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [Axios Interceptors Documentation](https://axios-http.com/docs/interceptors)
```

## Content Structure Guidelines

- Use consistent heading hierarchy (##, ###, ####)
- Always include practical code examples with proper syntax highlighting
- Break long articles into digestible sections
- Include Introduction, Main Content, Implementation Steps, Best Practices, Common Issues, Conclusion, and References
- Maintain consistent formatting within each article
