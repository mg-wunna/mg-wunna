import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import Markdown from '../markdown/markdown';
import ProjectDetailComments from './project-detail--comments';

type CardProps = {
  type: 'project' | 'blog';
  title: string;
  description: string;
  category: string;
  date: Date;
  imageUrl: string;
  href: string;
  content?: string;
  links?: {
    title: string;
    url: string;
  }[];
};

const ProjectDetail = () => {
  const {
    title,
    description,
    category,
    date,
    imageUrl,
    content,
    links,
  }: CardProps = useMemo(() => {
    return {
      type: 'project',
      title: 'Dodecia - Digital agency web design',
      description: `I'm working on this personal project as a UI designer and developer. A web design, design and implementation that provides services. The site has a fun and relaxed atmosphere. Service and portfolio sections are important aspects of the overall design. I focus on a good user experience and clearly communicate information.`,
      category: 'UX/UI design',
      date: new Date('2023-01-01'),
      imageUrl: '/images/projects/project-1.png',
      href: '/projects/1',
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
    };
  }, []);

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link
            href="/"
            className="hover:text-gray-900"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/projects"
            className="hover:text-gray-900"
          >
            Projects
          </Link>
          <span>/</span>
          <span className="text-gray-900">Dodecia</span>
        </nav>

        {/* Title Section */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{title}</h1>
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
            {category}
          </div>
          <div className="mt-4 text-sm text-gray-500">
            {date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={450}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Links */}
        <div className="mb-8 flex flex-wrap gap-4">
          {links?.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              className="group relative inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              <span>{link.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          ))}
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-gray-600">{description}</p>
        </div>

        {/* Tools and Technology */}
        <div className="prose prose-lg max-w-none">
          <Markdown content={content} />
        </div>

        <ProjectDetailComments />
      </div>
    </main>
  );
};

export default ProjectDetail;
