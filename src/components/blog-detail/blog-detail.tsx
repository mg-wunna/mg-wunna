import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import CommentsAndReviews from '../comments-and-reviews/comments-and-reviews';
import Markdown from '../markdown/markdown';

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

const BlogDetail = () => {
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
      title:
        'Frontend vs Backend Development: The Two Pillars of Web Development',
      description: `In the world of web development, the distinction between frontend and backend development is fundamental. While they work together seamlessly in a finished application, each has its unique role and challenges. Let's dive into what makes each special and how they complement each other.`,
      category: 'UX/UI design',
      date: new Date('2023-01-01'),
      imageUrl: '/images/projects/project-1.png',
      href: '/projects/1',
      content: `
In the world of web development, the distinction between frontend and backend development is fundamental. While they work together seamlessly in a finished application, each has its unique role and challenges. Let's dive into what makes each special and how they complement each other.

Frontend development is all about the user experience. It's what you see and interact with in your browser - from the layout and colors to buttons and animations. Frontend developers work with HTML, CSS, and JavaScript to create responsive, intuitive interfaces. Modern frontend development often involves frameworks like React, Vue, or Angular, which help build complex user interfaces efficiently.

On the backend, developers focus on server-side logic, databases, and application architecture. This is where data is stored, processed, and secured. Backend developers typically work with languages like Python, Java, or Node.js, and manage databases using SQL or NoSQL solutions. They ensure the application can handle user requests, process data, and maintain security.

The magic happens when frontend and backend work together. When you click a button on a website, the frontend sends a request to the backend. The backend processes this request, perhaps fetches data from a database, and sends back a response. The frontend then updates what you see based on this response.

Think of it like a restaurant - the frontend is the dining area and menu (what customers see and interact with), while the backend is the kitchen (where the actual processing happens). Both are essential for a great dining experience, just as both frontend and backend are crucial for a successful web application.

![Development Architecture](/images/blogs/blog-1.png)

Understanding both aspects of web development helps create more efficient, user-friendly applications. Whether you choose to specialize in frontend or backend, knowing how they interact is key to becoming a well-rounded developer.

## Conclusion

In the end, both frontend and backend development are essential for creating functional and engaging web applications. While they may seem different at first glance, the synergy between frontend and backend is what makes the web work.

Whether you're a frontend developer creating beautiful user interfaces or a backend developer ensuring data is secure and processed efficiently, your work is crucial to the success of any web application.

So, the next time you use a website or web application, remember the hard work that goes into making it all work together. Frontend and backend developers are the unsung heroes behind the scenes, making the magic happen.

## Code Examples

\`\`\`jsx
const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
\`\`\`

## References

- [Frontend vs Backend Development: What's the Difference?](https://www.freecodecamp.org/news/frontend-vs-backend-development/)
- [What is Frontend Development?](https://www.freecodecamp.org/news/what-is-frontend-development/)
- [What is Backend Development?](https://www.freecodecamp.org/news/what-is-backend-development/)
`,
      links: [],
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
        {links.length > 0 && (
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
        )}

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-gray-600">{description}</p>
        </div>

        {/* Tools and Technology */}
        <div className="prose prose-lg max-w-none">
          <Markdown content={content} />
        </div>

        <CommentsAndReviews />
      </div>
    </main>
  );
};

export default BlogDetail;
