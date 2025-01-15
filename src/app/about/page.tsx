import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mg Wunna | About',
  description: "Mg Wunna's About",
};

// ☐ create about page
export default function About() {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <h1 className="text-4xl font-bold">About Page</h1>
    </div>
  );
}
