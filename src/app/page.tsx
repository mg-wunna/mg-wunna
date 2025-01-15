import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mg Wunna | Portfolio',
  description: "Mg Wunna's Portfolio Website",
};

// ☐ create home page
export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Home Page</h1>
    </div>
  );
}
