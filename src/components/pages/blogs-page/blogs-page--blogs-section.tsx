'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Blog } from '../../../types/blog-type';
import { Category } from '../../../types/category-type';
import Card from '../../commons/card';
import CategoriesFilter from '../../commons/categories-filter';

let previousLoadedBlogs = 0;

const BlogsPageBlogsSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isMoreBlogsExist, setIsMoreBlogsExist] = useState(false);
  const [isMoreBlogsLoading, setIsMoreBlogsLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/apis/blogs/category');
      const data = await response.json();

      setCategories([
        {
          _id: 'all',
          name: 'All',
          type: 'blog',
          createdAt: '',
          updatedAt: '',
        } as Category,
        ...data.data,
      ]);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      previousLoadedBlogs = 0;
      setBlogs([]);
      setIsMoreBlogsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch(
        selectedCategory
          ? `/apis/blogs?category=${selectedCategory?.name}`
          : '/apis/blogs'
      );
      const data = await response.json();
      setBlogs(data.data);
      setIsMoreBlogsExist(data.meta.isMoreBlogsExist);
      setIsMoreBlogsLoading(false);
    };
    fetchBlogs();
  }, [selectedCategory]);

  const fetchMoreBlogs = async () => {
    previousLoadedBlogs = blogs.length;
    setIsMoreBlogsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(
      `/apis/blogs?category=${selectedCategory?.name}&offset=${previousLoadedBlogs}`
    );
    const data = await response.json();
    setBlogs([...blogs, ...data.data]);
    setIsMoreBlogsExist(
      previousLoadedBlogs > 30 ? false : data.meta.isMoreBlogsExist
    );
    setIsMoreBlogsLoading(false);
  };

  return (
    <div className="container mx-auto mb-32 mt-20 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Featured Blogs
          <div className="absolute -right-6 -top-6 h-12 w-12 rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
          <div className="absolute -bottom-6 -left-6 h-12 w-12 -rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Explore a collection of my articles and insights on web development
          and design
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-orange-500/5 via-orange-500 to-orange-500/5"></div>
      </div>

      <div className="mb-8 flex flex-col gap-6">
        {/* Search Box */}
        <div className="relative mx-auto w-full max-w-2xl rounded-2xl border border-orange-500/50">
          <div className="group relative">
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full rounded-2xl border-none bg-gradient-to-br from-white to-orange-50 px-6 py-4 text-base shadow-lg shadow-orange-500/5 transition duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-orange-500/20 group-hover:shadow-xl group-hover:shadow-orange-500/10"
              aria-label="Search blogs"
            />
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/25 transition-transform duration-300 group-hover:scale-95">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center">
          <CategoriesFilter
            categories={categories}
            selectedCategory={selectedCategory || categories[0]}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </div>

      {blogs.length === 0 && !isMoreBlogsLoading && (
        <div className="relative mx-auto max-w-2xl overflow-hidden p-12 pb-20 text-center">
          <div className="relative">
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
              Looking Empty Here
            </h3>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              We searched high and low but couldn&apos;t find any matching
              blogs. Try different keywords or browse all posts.
            </p>

            <button
              onClick={() => {
                setSelectedCategory(categories[0]);
              }}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-orange-500 px-8 py-4 font-medium text-white transition-all hover:bg-orange-600"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="transition-all group-hover:me-4">
                Reset Search
              </span>
            </button>
          </div>
        </div>
      )}

      <motion.div
        layout
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 12,
        }}
        style={{ transformPerspective: '1000px' }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay:
                      i < previousLoadedBlogs
                        ? 0
                        : (i - previousLoadedBlogs) * 0.1,
                  },
                }),
              }}
              initial="hidden"
              animate="show"
              exit="hidden"
              custom={index}
            >
              <Card
                title={blog.title}
                description={blog.description}
                category={blog.category}
                imageUrl={blog.image}
                href={`/blogs/${blog.slug}`}
                type="blog"
                date={new Date(blog.createdAt)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {isMoreBlogsLoading && (
        <motion.div
          layout
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 90 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 12,
          }}
          style={{ transformPerspective: '1000px' }}
          className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                    },
                  }),
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                custom={index}
                className="flex h-[400px] animate-pulse flex-col overflow-hidden rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-50 shadow-lg"
              >
                <div className="relative h-56 w-full bg-gray-200" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 h-4 w-24 rounded bg-gray-200" />
                  <div className="mb-3 h-6 w-3/4 rounded bg-gray-200" />
                  <div className="h-16 w-full rounded bg-gray-200" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {isMoreBlogsExist && !isMoreBlogsLoading && (
        <div className="mt-12 text-center">
          <button
            className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-base"
            onClick={() => fetchMoreBlogs()}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsPageBlogsSection;
