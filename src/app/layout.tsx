import './index.css';

import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Mg Wunna — Fullstack Developer',
  description:
    'Creative Full Stack Developer & UI/UX Enthusiast 5+ Years Crafting Digital Experiences. Leveraging React, Next.js, and Node.js to build scalable and performant applications',
  keywords:
    'Mg Wunna, Fullstack Developer, Portfolio, React, Next.js, Node.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, UI/UX, Design, Web Development, Web Design, Web Application, Web Development, Web Design, Web Application, Web Development, Web Design, Web Application',
  openGraph: {
    type: 'website',
    title: 'Mg Wunna — Fullstack Developer',
    description:
      'Creative Full Stack Developer & UI/UX Enthusiast 5+ Years Crafting Digital Experiences. Leveraging React, Next.js, and Node.js to build scalable and performant applications',
    url: 'https://mg-wunna.vercel.app/',
    locale: 'en_US',
    images: [
      {
        url: 'https://mg-wunna.vercel.app/meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Mg Wunna Portfolio Website Preview',
        type: 'image/jpeg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </head>
      <body
        className={twMerge(
          beVietnamPro.className,
          'scroll-smooth bg-white text-gray-500'
        )}
      >
        {children}
      </body>
    </html>
  );
}
