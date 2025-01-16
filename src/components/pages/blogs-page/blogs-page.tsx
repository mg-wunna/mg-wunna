import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import BlogsPageBlogsSection from './blogs-page--blogs-section';

// ✔ create blogs page
const BlogsPage = () => {
  return (
    <>
      <HeaderSection />
      <BlogsPageBlogsSection />
      <FooterSection />
    </>
  );
};

export default BlogsPage;
