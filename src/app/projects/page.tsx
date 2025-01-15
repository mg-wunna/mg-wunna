import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mg Wunna | Projects',
  description: "Mg Wunna's Projects",
};

// ☐ create projects page
export default function Projects() {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <h1 className="text-4xl font-bold">Projects Page</h1>
    </div>
  );
}
