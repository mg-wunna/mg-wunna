import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ProjectDetailPageDetailSection from './project-detail-page-detail-section';

// ✔ create project detail page
const ProjectDetailPage = () => {
  return (
    <>
      <HeaderSection />
      <ProjectDetailPageDetailSection />
      <FooterSection />
    </>
  );
};

export default ProjectDetailPage;
