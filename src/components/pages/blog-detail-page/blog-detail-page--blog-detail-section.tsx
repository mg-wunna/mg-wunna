'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Blog } from '../../../types/blog-type';
import Markdown from '../../commons/markdown/markdown';
import CommentsSection from '../../sections/comments-section/comments-section';
import BlogDetailSkeletonSection from './blog-detail-page--skeleton-section';

const BlogDetailPageBlogDetailSection = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const params = useParams();

  const slug = useMemo(() => {
    return typeof params?.slug === 'string' ? params.slug : '';
  }, [params?.slug]);

  useEffect(() => {
    if (!slug || blog) return;

    fetch(`/apis/blogs/${slug}`)
      .then((response) => response.json())
      .then(async (data) => {
        const contentResponse = await fetch(
          `/blogs/${data.data.slug}/content.md`
        );
        const content = (await contentResponse.text()).replaceAll(
          '(../../blogs/',
          '(/blogs/'
        );
        setBlog({ ...data.data, content });
      })
      .catch((error) => console.error('Error fetching blog:', error));
  }, [blog, slug]);

  if (!blog) {
    return <BlogDetailSkeletonSection />;
  }

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
          <span className="capitalize text-gray-900">
            {blog.slug.split('-').join(' ')}
          </span>
        </nav>

        {/* Title Section */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            {blog.title}
          </h1>
          {blog.categories.map((category) => (
            <div
              key={category}
              className="mr-1 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm capitalize text-blue-800"
            >
              {category}
            </div>
          ))}
          <div className="mt-4 text-sm text-gray-500"></div>
          <div className="mt-4 text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            width={800}
            height={450}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed text-gray-600">
            {blog.description}
          </p>
        </div>

        {/* Tools and Technology */}
        <div className="prose prose-lg max-w-none">
          <Markdown content={blog.content} />
        </div>

        <CommentsSection
          type="blogs"
          slug={blog.slug}
        />
      </div>
    </main>
  );
};

export default BlogDetailPageBlogDetailSection;
