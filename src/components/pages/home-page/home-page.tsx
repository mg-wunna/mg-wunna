import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import HomePageBlogsSection from './home-page--blogs-section';
import HomePageHeroSection from './home-page--hero-section';
import HomePageProjectsSection from './home-page--projects-section';

// ✔ create home page
const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <HomePageHeroSection />
      <HomePageProjectsSection />
      <HomePageBlogsSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
