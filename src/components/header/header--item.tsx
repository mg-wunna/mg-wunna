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
    return pathname === `/${title.toLowerCase()}`;
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
          'hover:scale-110',
          'before:absolute before:-inset-1 before:block before:-skew-y-3 before:rounded-lg before:bg-primary before:opacity-0 before:transition-all before:duration-300',
          'group-hover:before:opacity-10',
          isActive
            ? 'scale-110 text-primary before:opacity-10'
            : 'text-secondary',
          'after:absolute after:-bottom-1.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-primary after:opacity-0 after:transition-all after:duration-300',
          'group-hover:after:h-2 group-hover:after:w-2 group-hover:after:opacity-100',
          isActive && 'after:h-2 after:w-2 after:opacity-100'
        )}
      >
        <span className="relative inline-block">
          {title}
          <span
            className={twMerge(
              'absolute -right-4 top-0 text-primary opacity-0 transition-all duration-300',
              'group-hover:-right-6 group-hover:opacity-100',
              isActive && '-right-6 opacity-100'
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
