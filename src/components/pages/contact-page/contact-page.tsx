import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ContactPageContactSection from './contact-page--contact-section';

// ✔ create contact page
const ContactPage = () => {
  return (
    <>
      <HeaderSection />
      <ContactPageContactSection />
      <FooterSection />
    </>
  );
};

export default ContactPage;
