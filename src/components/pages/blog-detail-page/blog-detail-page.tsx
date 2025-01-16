import FooterSection from '../../sections/footer-section/footer-section';
import HeaderSection from '../../sections/header-section/header-section';
import ScrollToTopSection from '../../sections/scroll-to-top-section/scroll-to-top-section';
import BlogDetailPageBlogDetailSection from './blog-detail-page--blog-detail-section';

// ✔ create blog detail page
const BlogDetailPage = () => {
  return (
    <>
      <HeaderSection />
      <BlogDetailPageBlogDetailSection />
      <FooterSection />
      <ScrollToTopSection />
    </>
  );
};

export default BlogDetailPage;
