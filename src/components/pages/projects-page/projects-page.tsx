import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ProjectsPageProjectsSection from './projects-page--projects-section';

// ✔ create projects page
const ProjectsPage = () => {
  return (
    <>
      <HeaderSection />
      <ProjectsPageProjectsSection />
      <FooterSection />
    </>
  );
};

export default ProjectsPage;
