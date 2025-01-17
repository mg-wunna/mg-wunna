'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { twMerge } from 'tailwind-merge';

const Markdown = ({ content }: { content: string }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    rect?: DOMRect;
  } | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement>,
    src: string,
    alt: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSelectedImage({ src, alt, rect });
  };

  useEffect(() => {
    if (selectedImage && previewRef.current) {
      const rect = selectedImage.rect;
      if (rect) {
        previewRef.current.style.transform = `translate(${rect.left}px, ${rect.top}px) scale(${rect.width / window.innerWidth})`;
        previewRef.current.style.opacity = '0';

        requestAnimationFrame(() => {
          if (previewRef.current) {
            previewRef.current.style.transform = 'translate(0, 0) scale(1)';
            previewRef.current.style.opacity = '1';
          }
        });
      }
    }
  }, [selectedImage]);

  useEffect(() => {
    const handleScroll = () => setSelectedImage(null);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedImage]);

  if (content === '') return null;
  return (
    <>
      <div
        className={twMerge(
          'fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/0 transition-all duration-500',
          selectedImage
            ? 'pointer-events-auto bg-black/90'
            : 'pointer-events-none'
        )}
        onClick={() => setSelectedImage(null)}
      >
        <button
          className={twMerge(
            'absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-all duration-500',
            selectedImage
              ? 'opacity-100 hover:scale-110 hover:bg-white/20'
              : 'opacity-0'
          )}
          onClick={() => setSelectedImage(null)}
          aria-label="Close image preview"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {selectedImage && selectedImage.alt && (
          <div
            className={twMerge(
              'mb-4 text-xl font-medium text-white transition-opacity duration-500',
              selectedImage ? 'opacity-100' : 'opacity-0'
            )}
          >
            {selectedImage.alt}
          </div>
        )}

        <div
          ref={previewRef}
          className="relative max-h-[80vh] max-w-[90vw] transition-all duration-500"
        >
          {selectedImage && (
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
            />
          )}
        </div>
      </div>

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
            // Check if p contains img element and count images
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const imageChildren = node.children?.filter(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (child: any) =>
                child.type === 'element' && child.tagName === 'img'
            );
            const hasImage = imageChildren?.length > 0;
            const hasSingleImage = imageChildren?.length === 1;

            return (
              <div
                className={`${
                  hasImage
                    ? hasSingleImage
                      ? 'mb-10 flex justify-center'
                      : 'mb-10 grid grid-cols-2 gap-6'
                    : 'mb-6 text-base leading-relaxed text-gray-600'
                } ${hasSingleImage ? 'mx-auto w-2/3' : ''}`}
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
            <strong className="font-semibold text-orange-600">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="font-serif italic text-gray-800">{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-4 border-orange-200 bg-orange-50 p-6 italic text-gray-700 shadow-lg">
              {children}
            </blockquote>
          ),
          code: ({ children, className }) => {
            const match = /language-(\w+)/.exec(className || '');
            const codeString = children as string;
            const isCopied = copiedCode === codeString;

            return match ? (
              // Fenced code block
              <div className="group relative my-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-md">
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {match[1]}
                  </span>
                  <div className="absolute right-6">
                    <button
                      className={`group/btn relative rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                        isCopied
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      onClick={() => handleCopyCode(codeString)}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isCopied ? (
                          <>
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Copied!
                          </>
                        ) : (
                          <>
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                              />
                            </svg>
                            Copy
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 -z-10 scale-x-0 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 transition-all group-hover/btn:scale-x-100 group-hover/btn:opacity-20" />
                    </button>
                  </div>
                </div>
                <pre className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 overflow-x-auto bg-gray-50 p-6">
                  <code className="block font-mono text-sm leading-relaxed tracking-wide text-gray-800">
                    {children}
                  </code>
                </pre>
              </div>
            ) : (
              // Inline code
              <code className="relative inline-block rounded-md bg-gradient-to-br from-orange-500/10 to-pink-500/10 px-3 py-1 font-mono text-sm text-orange-500 ring-1 ring-orange-500/20">
                {children}
              </code>
            );
          },
          img: ({ src, alt }) => (
            <div
              className="group relative w-full cursor-pointer overflow-hidden rounded-xl border border-solid border-gray-100 shadow-md transition-all duration-300 hover:shadow-orange-200/50"
              onClick={(e) => handleImageClick(e, src || '', alt || '')}
            >
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
    </>
  );
};

export default Markdown;
