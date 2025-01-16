'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

type HeaderItemProps = {
  title: string;
};

// ✔ create header item component
const HeaderItem = ({ title }: HeaderItemProps) => {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (title === 'Home') return pathname === '/';
    return pathname.startsWith(`/${title.toLowerCase()}`);
  }, [pathname, title]);

  const href = title === 'Home' ? '/' : `/${title.toLowerCase()}`;

  return (
    <Link
      href={href}
      className="group relative"
      aria-label={`Navigate to ${title} page`}
    >
      <div
        className={twMerge(
          'relative px-4 py-2 text-base font-medium transition-all duration-300',
          'md:hover:scale-110',
          'before:absolute before:-inset-1 before:block before:rounded-lg before:bg-orange-500 before:opacity-0 before:transition-all before:duration-300 before:md:-skew-y-3',
          'group-hover:before:opacity-10',
          isActive
            ? 'text-orange-500 before:opacity-10 md:scale-110'
            : 'text-gray-500',
          'after:absolute after:-bottom-1.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-orange-500 after:opacity-0 after:transition-all after:duration-300',
          'md:group-hover:after:h-2 md:group-hover:after:w-2 md:group-hover:after:opacity-100',
          isActive && 'md:after:h-2 md:after:w-2 md:after:opacity-100',
          'text-sm md:text-base'
        )}
      >
        <span className="relative inline-block">
          {title}
          <span
            className={twMerge(
              'absolute -right-4 top-0 text-orange-500 opacity-0 transition-all duration-300',
              'md:group-hover:-right-6 md:group-hover:opacity-100',
              isActive && 'md:-right-6 md:opacity-100',
              'hidden md:inline-block'
            )}
          >
            ✨
          </span>
        </span>
      </div>
    </Link>
  );
};

export default HeaderItem;
