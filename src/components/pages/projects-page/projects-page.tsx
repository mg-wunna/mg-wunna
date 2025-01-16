import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ScrollToTopSection from '../../sections/scroll-to-top-section/scroll-to-top-section';
import ProjectsPageProjectsSection from './projects-page--projects-section';

// ✔ create projects page
const ProjectsPage = () => {
  return (
    <>
      <HeaderSection />
      <ProjectsPageProjectsSection />
      <FooterSection />
      <ScrollToTopSection />
    </>
  );
};

export default ProjectsPage;
