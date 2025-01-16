import Link from 'next/link';
import React from 'react';

type BreadcrumbProps = {
  links: {
    label: string;
    href: string;
  }[];
};

const Breadcrumb = ({ links }: BreadcrumbProps) => {
  return (
    <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          <Link
            href={link.href}
            className="transition-colors hover:text-orange-500"
          >
            {link.label}
          </Link>
          {index < links.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
