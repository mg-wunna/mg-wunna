import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mg Wunna | Blogs',
  description: "Mg Wunna's Blogs",
};

// ☐ create blogs page
export default function Blogs() {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center">
      <h1 className="text-4xl font-bold">Blogs Page</h1>
    </div>
  );
}
