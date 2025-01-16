'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeaderItem from './header-section--item';

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 shadow-sm backdrop-blur-3xl'
            : 'bg-transparent'
        }`}
      >
        <header className="container mx-auto px-4 sm:px-6">
          <nav className="relative px-4">
            <div className="flex h-20 items-center justify-between md:h-28">
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-orange-500 ring-offset-2 md:h-10 md:w-10">
                  <Image
                    src="/logo.png"
                    alt="Mg Wunna's logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-base font-bold text-transparent md:text-lg">
                    Mg Wunna
                  </h1>
                  <p className="text-xs text-gray-500/70">
                    Fullstack Developer
                  </p>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 md:hidden"
                onClick={handleToggleMenu}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Desktop menu */}
              <div className="hidden items-center gap-4 md:flex lg:gap-8">
                <HeaderItem title="Home" />
                <HeaderItem title="Projects" />
                <HeaderItem title="Blogs" />
                <HeaderItem title="About" />
                <HeaderItem title="Contact" />
              </div>
            </div>

            {/* Mobile menu with improved transition */}
            <div
              className={`absolute left-0 right-0 top-full transform transition-all duration-300 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-4 opacity-0'
              } bg-white px-4 py-2 shadow-lg md:hidden`}
            >
              <div className="flex flex-col gap-2 pb-4">
                <HeaderItem title="Home" />
                <HeaderItem title="Projects" />
                <HeaderItem title="Blogs" />
                <HeaderItem title="About" />
                <HeaderItem title="Contact" />
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div className="h-20 md:h-28" />
    </>
  );
};

export default HeaderSection;
