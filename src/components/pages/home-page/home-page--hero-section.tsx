'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import SocialLink from '../../commons/social-link';

const SocialLinks = [
  {
    href: 'https://github.com/mg-wunna',
    label: 'Visit Github profile',
    children: 'Github',
  },
  {
    href: 'https://www.linkedin.com/in/mg-wunna',
    label: 'Visit LinkedIn profile',
    children: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/mg.wunna.mandalay',
    label: 'Visit Facebook profile',
    children: 'Facebook',
  },
];

const HomePageHeroSection = () => {
  const yearsOfExperience = useMemo(() => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }, []);

  return (
    <section className="relative mb-16 w-full overflow-hidden bg-white py-16 md:mb-32 md:py-48">
      {/* Decorative SVG waves */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute left-0 top-0 h-48 w-full text-orange-50"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 h-48 w-full rotate-180 text-orange-50"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <svg
          className="absolute left-0 top-1/4 h-32 w-32 text-orange-100/50"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="currentColor"
          />
        </svg>
        <svg
          className="absolute right-0 top-3/4 h-40 w-40 text-orange-100/50"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          {/* Main content */}
          <div className="space-y-6 text-center">
            <div className="relative inline-block">
              <span className="relative z-10 text-base font-medium text-orange-600 md:text-lg">
                Hey there! 👋
              </span>
              <div className="animate-spin-slow absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-orange-200 to-orange-400 opacity-30 blur"></div>
            </div>

            <h1 className="relative mx-auto max-w-3xl bg-gradient-to-br from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-7xl">
              I&apos;m Wunna
              <div className="animate-float absolute -right-4 top-0 h-16 w-16 rounded-full bg-orange-400/20 blur-xl"></div>
            </h1>

            <div className="relative">
              <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl">
                Creative Full Stack Developer & UI/UX Enthusiast
              </h2>
              <p className="mt-2 text-base text-gray-600 md:text-lg">
                {yearsOfExperience}+ Years Crafting Digital Experiences
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-orange-500 px-6 py-3 text-white transition-all hover:bg-orange-600 sm:w-auto sm:px-8"
              >
                <span className="relative">Let&apos;s Work Together</span>
                <span className="relative transition-transform group-hover:translate-x-1">
                  →
                </span>
                <div className="absolute -right-2 top-0 h-full w-12 translate-x-12 rotate-12 bg-white opacity-20 transition-transform group-hover:translate-x-0"></div>
              </Link>

              <Link
                href="/projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-orange-200 px-6 py-3 text-orange-600 transition-all hover:border-orange-300 hover:bg-orange-50 sm:w-auto sm:px-8"
              >
                View My Work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Feature grid */}
          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <h3 className="mb-2 font-semibold text-gray-900">
                Modern Tech Stack
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Leveraging React, Next.js, and Node.js to build scalable and
                performant applications
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl sm:p-6">
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-orange-100 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <h3 className="mb-2 font-semibold text-gray-900">
                User-Centric Design
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Creating intuitive and delightful experiences that users love to
                interact with
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center gap-4 sm:mt-12">
            {SocialLinks.map((link) => (
              <SocialLink
                key={link.href}
                href={link.href}
                label={link.label}
              >
                {link.children}
              </SocialLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHeroSection;
