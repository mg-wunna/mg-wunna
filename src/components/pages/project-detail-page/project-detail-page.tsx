import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ScrollToTopSection from '../../sections/scroll-to-top-section/scroll-to-top-section';
import ProjectDetailPageDetailSection from './project-detail-page-detail-section';

// ✔ create project detail page
const ProjectDetailPage = () => {
  return (
    <>
      <HeaderSection />
      <ProjectDetailPageDetailSection />
      <FooterSection />
      <ScrollToTopSection />
    </>
  );
};

export default ProjectDetailPage;
