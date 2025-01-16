import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ScrollToTopSection from '../../sections/scroll-to-top-section/scroll-to-top-section';
import BlogsPageBlogsSection from './blogs-page--blogs-section';

// ✔ create blogs page
const BlogsPage = () => {
  return (
    <>
      <HeaderSection />
      <BlogsPageBlogsSection />
      <FooterSection />
      <ScrollToTopSection />
    </>
  );
};

export default BlogsPage;
