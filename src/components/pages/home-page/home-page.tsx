import config from '../../../config';
import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ScrollToTopSection from '../../sections/scroll-to-top-section/scroll-to-top-section';
import HomePageBlogsSection from './home-page--blogs-section';
import HomePageContactSection from './home-page--contact-section';
import HomePageHeroSection from './home-page--hero-section';
import HomePageProjectsSection from './home-page--projects-section';

// ✔ create home page
const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <HomePageHeroSection />
      {config.projects_featured === 'enabled' && <HomePageProjectsSection />}
      <HomePageBlogsSection />
      <HomePageContactSection />
      <FooterSection />
      <ScrollToTopSection />
    </>
  );
};

export default HomePage;
