import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mg Wunna | Contact',
  description: "Mg Wunna's Contact",
};

// ☐ create contact page
export default function Contact() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Contact Page</h1>
    </div>
  );
}
