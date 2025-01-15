import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const Markdown = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h2 className="relative mb-8 text-3xl font-bold text-gray-900 before:absolute before:-left-4 before:top-1/2 before:h-8 before:w-1 before:-translate-y-1/2 before:bg-orange-500">
            {children}
          </h2>
        ),
        h2: ({ children }) => (
          <h3 className="group mb-6 text-2xl font-bold text-gray-800">
            <span className="relative">
              {children}
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </h3>
        ),
        h3: ({ children }) => (
          <h4 className="mb-4 inline-flex items-center gap-2 text-xl font-semibold text-gray-700 before:h-2 before:w-2 before:rounded-full before:bg-orange-400">
            {children}
          </h4>
        ),
        p: ({ children, node }) => {
          // Check if p contains img element
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          const hasImage = node.children?.some(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (child: any) => child.type === 'element' && child.tagName === 'img'
          );

          return (
            <div
              className={`${hasImage ? 'mb-10 grid grid-cols-2 gap-6' : 'mb-6 text-base leading-relaxed text-gray-600'}`}
            >
              {children}
            </div>
          );
        },
        ul: ({ children }) => (
          <ul className="mb-8 space-y-3 pl-6">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-8 space-y-3 pl-6">{children}</ol>
        ),
        li: ({ children }) => (
          <li className="group relative pl-6 text-base leading-relaxed text-gray-600 before:absolute before:left-0 before:top-[0.6em] before:h-2 before:w-2 before:rounded-full before:bg-orange-200 before:transition-all before:duration-200 hover:before:scale-150 hover:before:bg-orange-400">
            {children}
          </li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-orange-600">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="font-serif italic text-gray-800">{children}</em>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-8 border-l-4 border-orange-200 bg-orange-50 p-6 italic text-gray-700 shadow-lg">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          <code className="rounded-md bg-gray-800 px-2 py-1 font-mono text-sm text-orange-300">
            {children}
          </code>
        ),
        img: ({ src, alt }) => (
          <div className="group relative w-full overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-orange-200/50">
            <Image
              src={src || ''}
              alt={alt || ''}
              width={400}
              height={225}
              className="w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {alt && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {alt}
              </div>
            )}
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
