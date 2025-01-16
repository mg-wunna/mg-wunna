'use client';

import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type SocialLinkProps = {
  href: string;
  label: string;
  children: string;
};

// ✔ create social link component
const SocialLink = ({ href, label, children }: SocialLinkProps) => (
  <Link
    href={href}
    className={twMerge(
      'group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-orange-500',
      'before:absolute before:-inset-1 before:block before:-skew-y-3 before:rounded-lg before:bg-orange-500/10 before:opacity-100',
      'after:absolute after:-bottom-1.5 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:rounded-full after:bg-orange-500 after:opacity-100',
      'focus:outline-none focus:ring-2 focus:ring-orange-500/50',
      'active:scale-95',
      'transition-all duration-300',
      'hover:scale-110',
      'hover:before:bg-orange-500/20'
    )}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    tabIndex={0}
  >
    <span className="relative">{children}</span>
  </Link>
);

export default SocialLink;
