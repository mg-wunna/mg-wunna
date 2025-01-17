'use client';

import Link from 'next/link';

// ✔ create not found page
const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 px-4 text-center">
      <div className="absolute -left-20 top-20 h-64 w-64 animate-pulse rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-64 w-64 animate-pulse rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative z-10">
        <h1 className="relative text-[10rem] font-black leading-none text-gray-800 md:text-[15rem]">
          404
          <span className="absolute -inset-1 animate-pulse bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <p className="text-3xl font-bold text-white md:text-5xl">
              Oops! Page Not Found
            </p>
            <p className="text-sm text-orange-200/80 md:text-base">
              Looks like this page took a wrong turn in the digital universe
            </p>
          </div>
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 md:text-base"
            tabIndex={0}
            aria-label="Return to homepage"
          >
            <span>Take Me Home</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900/80 to-transparent" />
    </div>
  );
};

export default NotFoundPage;
