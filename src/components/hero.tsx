'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import SocialLink from './social-link';

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

const Hero = () => {
  const yearsOfExperience = useMemo(() => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }, []);

  return (
    <section className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl"></div>

      <div className="relative">
        {/* Hero Header */}
        <div className="mb-12 text-center">
          <h1 className="group relative mb-6 inline-flex flex-col items-center text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="mb-4">Hey, I&apos;m Wunna</span>
            <Link
              href="/contact"
              className="relative inline-flex cursor-pointer select-none items-center gap-2 rounded-full bg-orange-500/10 px-6 py-2 text-lg font-medium tracking-wider text-orange-500 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-500/20 hover:shadow-lg"
            >
              Available for hire
              <span className="animate-bounce">✨</span>
            </Link>
          </h1>

          <div className="relative mx-auto max-w-3xl select-none overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/5 via-orange-500/10 to-transparent p-8 backdrop-blur-sm">
            <div className="absolute -right-8 -top-8 h-32 w-32 rotate-12 bg-orange-500/10 blur-3xl"></div>
            <h2 className="bg-gradient-to-r from-slate-800 via-orange-500 to-slate-800 bg-clip-text text-3xl font-bold text-transparent">
              Creative Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="mt-3 text-xl font-medium text-slate-700">
              {yearsOfExperience}+ Years Crafting Digital Experiences
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          <div className="group select-none rounded-2xl bg-gradient-to-br from-white via-orange-500/5 to-transparent p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <p className="relative text-base leading-relaxed text-slate-600 transition-all duration-300 group-hover:translate-x-2">
              Mastering modern web development with React, Next.js, and Node.js.
              Turning complex problems into elegant solutions.
              <span className="absolute -right-2 -top-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                ✨
              </span>
            </p>
          </div>

          <div className="group select-none rounded-2xl bg-gradient-to-br from-white via-orange-500/5 to-transparent p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <p className="relative text-base leading-relaxed text-slate-600 transition-all duration-300 group-hover:translate-x-2">
              From pixel-perfect frontends to robust backends, creating seamless
              digital experiences users love.
              <span className="absolute -right-2 -top-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                ✨
              </span>
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-12">
          <div className="group relative select-none overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10 p-6 text-center transition-all duration-300 hover:shadow-lg">
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <p className="relative text-lg font-medium text-orange-500">
              Let&apos;s collaborate to bring your vision to life with clean
              code, innovative solutions, and delightful user experiences
              <span className="ml-2 inline-block animate-pulse transition-transform duration-300 group-hover:rotate-12">
                ✨
              </span>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6">
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
    </section>
  );
};

export default Hero;
