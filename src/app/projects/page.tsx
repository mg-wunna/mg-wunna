import type { Metadata } from 'next';
import Footer from '../../components/footer';
import Projects from '../../components/projects/projects';

export const metadata: Metadata = {
  title: 'Mg Wunna | Projects',
  description: "Mg Wunna's Projects",
};

// ☐ create projects page
export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <Footer />
    </>
  );
}
