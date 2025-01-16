import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import AboutPageAboutSection from './about-page--about-section';

// ✔ create about page
const AboutPage = () => {
  return (
    <>
      <HeaderSection />
      <AboutPageAboutSection />
      <FooterSection />
    </>
  );
};

export default AboutPage;
