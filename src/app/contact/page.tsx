import type { Metadata } from 'next';
import Footer from '../../components/footer';

export const metadata: Metadata = {
  title: 'Mg Wunna | Contact',
  description: "Mg Wunna's Contact",
};

// ☐ create contact page
export default function Contact() {
  return (
    <>
      <Footer />
    </>
  );
}
