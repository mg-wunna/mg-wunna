'use client';

import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const ContactPageContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden md:min-h-min">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="fixed -left-4 top-0 h-64 w-64 rounded-full bg-orange-100/50 blur-3xl" />
        <div className="fixed -right-4 bottom-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

        {/* Content */}
        <div className="relative">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
            <Link
              href="/"
              className="transition-colors hover:text-orange-500"
            >
              Home
            </Link>
            <span>/</span>
            <span>Contact</span>
          </div>

          <div className="grid gap-12">
            {/* Left Column - Contact Info */}
            <div className="flex flex-col gap-10 lg:flex-row">
              <div className="lg:w-1/2">
                <h1 className="mb-4 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  Let&apos;s Create Something Amazing Together
                </h1>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  Have a project in mind? I&apos;d love to help bring your ideas
                  to life. Drop me a message, and let&apos;s start building
                  something extraordinary.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href="mailto:mgwunna.mw@icloud.com"
                  className="group flex flex-1 items-center gap-4 rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-orange-100 text-xl text-orange-500 transition-transform duration-300 group-hover:rotate-12">
                    📧
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600 sm:text-base">
                      mgwunna.mw@icloud.com
                    </p>
                  </div>
                </Link>

                <Link
                  href="tel:+959777177317"
                  className="group flex flex-1 items-center gap-4 rounded-xl bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100 text-xl text-blue-500 transition-transform duration-300 group-hover:rotate-12">
                    📱
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-sm text-gray-600 sm:text-base">
                      +95 9 777 177 317
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-xl sm:p-8">
              {/* Decorative background elements */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rotate-12 rounded-full bg-orange-100/50 transition-transform duration-300 group-hover:rotate-45" />
              <div className="absolute -bottom-16 -left-16 h-32 w-32 rotate-12 rounded-full bg-blue-100/50 transition-transform duration-300 group-hover:rotate-45" />

              <form
                onSubmit={handleSubmit}
                className="relative space-y-4 sm:space-y-6"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={twMerge(
                      'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-3',
                      'transition duration-200 ease-in-out',
                      'placeholder:text-gray-400',
                      'hover:border-orange-200',
                      'focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20'
                    )}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={twMerge(
                      'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-3',
                      'transition duration-200 ease-in-out',
                      'placeholder:text-gray-400',
                      'hover:border-orange-200',
                      'focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20'
                    )}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    rows={5}
                    className={twMerge(
                      'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-3',
                      'transition duration-200 ease-in-out',
                      'placeholder:text-gray-400',
                      'hover:border-orange-200',
                      'focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20',
                      'resize-none'
                    )}
                    placeholder="Tell me about your project ideas and requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={twMerge(
                    'group relative w-full rounded-lg bg-white px-6 py-3 sm:px-8 sm:py-4',
                    'text-sm font-semibold text-gray-700 sm:text-base',
                    'transition-all duration-500',
                    'border-2 border-orange-500',
                    'before:absolute before:inset-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500',
                    'hover:text-white hover:before:w-full',
                    'active:scale-[0.98]',
                    'focus:outline-none focus:ring-4 focus:ring-orange-500/20',
                    'overflow-hidden'
                  )}
                  disabled={isLoading}
                  aria-label="Send message"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="relative z-10 flex items-center gap-2">
                      {isLoading ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin sm:h-5 sm:w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 group-hover:bg-white/20 sm:h-6 sm:w-6">
                            <svg
                              className="h-3 w-3 text-orange-500 transition-all duration-500 group-hover:text-white sm:h-4 sm:w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M12 5l7 7-7 7"
                              />
                            </svg>
                          </span>
                        </>
                      )}
                    </span>
                  </div>
                  <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="h-1 w-1 animate-ping rounded-full bg-white"></div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageContactSection;
