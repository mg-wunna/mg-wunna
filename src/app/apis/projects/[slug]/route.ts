import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from 'next/server';
import { Project } from '../../../../types/project-type';

export async function GET(request: NextRequest) {
  try {
    const slug = request?.nextUrl?.pathname.split('/').pop() || '';

    // Generate a single project with the given slug
    const project: Project = {
      _id: faker.string.uuid(),
      slug: slug,
      title: faker.lorem.sentence(),
      image: '/images/blogs/blog-1.png',
      description: faker.lorem.paragraph(),
      categories: [faker.lorem.word()],
      content: `
## About the Project

Dodecia is a personal project where I serve as both the UI designer and developer. It's a comprehensive web design implementation for a digital agency providing creative services. The site features a modern, playful atmosphere while maintaining professionalism.

Key aspects of the project include:

- Clean, intuitive user interface design
- Engaging service showcase sections
- Interactive portfolio displays
- Optimized user experience
- Clear information architecture
- Responsive design for all devices

## Screenshots

![Homepage Hero Section](/images/projects/project-1.png)
![Services Overview](/images/projects/project-1.png)
![Portfolio Grid](/images/projects/project-1.png)
![Contact Section](/images/projects/project-1.png)

## Tools and Technology

### Frontend

- **React.js** - Core frontend framework
- **Next.js** - For server-side rendering and optimal performance
- **TypeScript** - Ensuring type safety and better development experience
- **TailwindCSS** - Utility-first CSS framework for styling
- **Framer Motion** - Powering smooth animations and transitions

### Design

- **Figma** - UI/UX design and prototyping
- **Adobe Photoshop** - Image optimization and graphics
- **Adobe Illustrator** - Vector graphics and icons

### Development Tools

- **Git** - Version control
- **VS Code** - Primary IDE
- **ESLint/Prettier** - Code formatting and quality
- **Chrome DevTools** - Testing and debugging

### Deployment

- **Vercel** - Hosting and deployment
- **GitHub Actions** - CI/CD pipeline
- **Google Analytics** - User analytics and tracking

## Key Features

1. **Responsive Design**

   - Mobile-first approach
   - Fluid layouts
   - Optimized for all screen sizes

2. **Performance Optimization**

   - Lazy loading images
   - Code splitting
   - Optimized asset delivery
   - 90+ Lighthouse score

3. **Interactive Elements**

   - Smooth scroll animations
   - Hover effects
   - Loading states
   - Form validation

4. **Accessibility**
   - WCAG 2.1 compliant
   - Semantic HTML
   - Keyboard navigation
   - Screen reader friendly

## Challenges and Solutions

One of the main challenges was balancing aesthetic appeal with performance. This was solved by:

- Implementing efficient loading strategies
- Optimizing images and assets
- Using modern CSS techniques
- Careful consideration of animation performance

## Future Improvements

- Add dark mode support
- Implement more interactive features
- Enhance mobile animations
- Add multilingual support
- Integrate a headless CMS

## Project Status

Currently in production and actively maintained. Regular updates and improvements are being made based on user feedback and performance metrics.
`,
      links: [
        {
          title: 'Visit Website',
          url: 'https://dodecia.vercel.app',
        },
        {
          title: 'GitHub Repository',
          url: 'https://github.com/your-username/dodecia',
        },
      ],
      createdAt: faker.date.recent().toISOString(),
      updatedAt: faker.date.recent().toISOString(),
    };

    return NextResponse.json({
      status: '200',
      message: 'Project fetched successfully.',
      data: project,
    });
  } catch (error) {
    console.log('error', error);
    return NextResponse.json({
      status: '500',
      message: 'Project fetch failed.',
    });
  }
}
