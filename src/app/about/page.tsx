import type { Metadata } from 'next';
import About from '../../components/about';
import Footer from '../../components/footer';

export const metadata: Metadata = {
  title: 'Mg Wunna | About',
  description: "Mg Wunna's About",
};

// ☐ create about page
export default function AboutPage() {
  return (
    <>
      <About />
      <Footer />
    </>
  );
}
