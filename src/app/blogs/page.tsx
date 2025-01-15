import type { Metadata } from 'next';
import Blogs from '../../components/blogs/blogs';
import Footer from '../../components/footer';

export const metadata: Metadata = {
  title: 'Mg Wunna | Blogs',
  description: "Mg Wunna's Blogs",
};

// ☐ create blogs page
export default function BlogsPage() {
  return (
    <>
      <Blogs />
      <Footer />
    </>
  );
}
