import './index.css';

import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import Header from '../components/header/header';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Mg Wunna | Portfolio',
  description: "Mg Wunna's Portfolio Website",
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
        className={twMerge(beVietnamPro.className, 'bg-white text-secondary')}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
