'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Blog } from '../../../types/blog-type';
import Markdown from '../../commons/markdown/markdown';
import CommentsAndReviews from '../../sections/comments-and-reviews-section/comments-and-reviews-section';
import BlogDetailSkeletonSection from './blog-detail-page--skeleton-section';

const BlogDetailPageBlogDetailSection = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const slug = useMemo(() => {
    const pathSegments = window.location.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  }, []);

  useEffect(() => {
    if (blog) return;
    fetch(`/apis/blogs/${slug}`)
      .then((response) => response.json())
      .then((data) => setBlog(data.data))
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
          <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
            {blog.category}
          </div>
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

        <CommentsAndReviews _id={blog._id} />
      </div>
    </main>
  );
};

export default BlogDetailPageBlogDetailSection;
