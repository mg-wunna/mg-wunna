import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from 'next/server';
import { Blog } from '../../../../types/blog-type';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const slug = request?.nextUrl?.pathname.split('/').pop() || '';

    // Generate a single blog post with the given slug
    const blog: Blog = {
      _id: faker.string.uuid(),
      slug: slug,
      title: faker.lorem.sentence(),
      image: '/images/blogs/blog-1.png',
      description: faker.lorem.paragraph(),
      category: faker.lorem.word(),
      content: `
## Introduction

In this blog post, we'll explore the fascinating world of modern web development and the tools that make it possible. From frontend frameworks to deployment strategies, we'll cover everything you need to know to build robust web applications.

## The Evolution of Web Development

The web development landscape has changed dramatically over the past decade. We've seen the rise of:

- Single Page Applications (SPAs)
- Static Site Generators
- Serverless Architecture
- JAMstack
- Progressive Web Apps (PWAs)

## Modern Frontend Development

### React and Its Ecosystem

React has revolutionized how we build user interfaces. Key benefits include:

- Component-based architecture
- Virtual DOM
- Rich ecosystem of libraries
- Strong community support

### The Rise of TypeScript

TypeScript has become increasingly popular due to:

- Static typing
- Better IDE support
- Enhanced code maintainability
- Reduced runtime errors

## Best Practices

1. **Code Organization**
   - Modular architecture
   - Clean code principles
   - Consistent naming conventions

2. **Performance Optimization**
   - Code splitting
   - Lazy loading
   - Asset optimization
   - Caching strategies

3. **Testing**
   - Unit tests
   - Integration tests
   - End-to-end testing
   - Test-driven development

4. **Security**
   - Input validation
   - XSS prevention
   - CSRF protection
   - Secure authentication

## Future Trends

Looking ahead, we can expect to see:

- Increased adoption of Web Assembly
- More focus on performance
- Better developer tools
- Enhanced browser capabilities

## Conclusion

The web development field continues to evolve rapidly. Staying updated with the latest tools and techniques is crucial for building modern, efficient web applications.

## Resources

Here are some valuable resources to learn more:

- [Frontend vs Backend Development: What's the Difference?](https://www.freecodecamp.org/news/frontend-vs-backend-development/)
- [What is Frontend Development?](https://www.freecodecamp.org/news/what-is-frontend-development/)
- [What is Backend Development?](https://www.freecodecamp.org/news/what-is-backend-development/)
`,
      createdAt: faker.date.recent().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    };

    return NextResponse.json({
      status: '200',
      message: 'Blog fetched successfully.',
      data: blog,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        status: '500',
        message: 'Blog fetch failed.',
      },
      { status: 500 }
    );
  }
}
