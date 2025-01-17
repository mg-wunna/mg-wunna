'use server';

import Link from 'next/link';

// ✔ create home page contact section
const HomePageContactSection = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="fixed -left-4 top-0 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
      <div className="fixed -right-4 bottom-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

      {/* Content */}
      <div className="relative">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left side - Text content */}
          <div className="lg:max-w-xl">
            <h1 className="mb-4 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              Let&apos;s Create Something Amazing Together
            </h1>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              Have a project in mind? I&apos;d love to help bring your ideas to
              life. Drop me a message, and let&apos;s start building something
              extraordinary.
            </p>
          </div>

          {/* Right side - Contact Cards */}
          <div className="flex flex-col gap-4 lg:min-w-[320px]">
            <Link
              href="mailto:mgwunna.mw@icloud.com"
              className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-xl text-orange-500 transition-transform duration-300 group-hover:rotate-12">
                📧
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="truncate text-sm text-gray-600 sm:text-base">
                  mgwunna.mw@icloud.com
                </p>
              </div>
            </Link>

            <Link
              href="tel:+959777177317"
              className="group flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xl text-blue-500 transition-transform duration-300 group-hover:rotate-12">
                📱
              </div>
              <div className="min-w-0">
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="truncate text-sm text-gray-600 sm:text-base">
                  +95 9 777 177 317
                </p>
              </div>
            </Link>
          </div>
        </div>
        <Link
          href="/contact"
          className="mt-10 block w-full rounded-lg bg-orange-500 px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-base"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default HomePageContactSection;
