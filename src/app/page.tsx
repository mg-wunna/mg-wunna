import type { Metadata } from 'next';
import Blogs from '../components/blogs';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Projects from '../components/projects';

export const metadata: Metadata = {
  title: 'Mg Wunna | Portfolio',
  description: "Mg Wunna's Portfolio Website",
};

// ☐ create home page
export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}
