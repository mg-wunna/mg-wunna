import './index.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const rubik = Rubik({ subsets: ['latin'] });

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
      <body className={twMerge(rubik.className)}>{children}</body>
    </html>
  );
}
