import type { Metadata } from 'next';
import Contact from '../../components/contact';
import Footer from '../../components/footer';

export const metadata: Metadata = {
  title: 'Mg Wunna | Contact',
  description: "Mg Wunna's Contact",
};

// ☐ create contact page
export default function ContactPage() {
  return (
    <>
      <Contact />
      <Footer />
    </>
  );
}
