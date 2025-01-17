import { Metadata } from 'next';
import BlogDetailPage from '../../../components/pages/blog-detail-page/blog-detail-page';
import BlogModel from '../../../models/blog-model';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const blog = await BlogModel.findOne({ slug });

  if (!blog) {
    return {
      title: 'Blog Not Found | Mg Wunna',
      description: 'The requested blog post could not be found',
    };
  }

  return {
    title: `Mg Wunna — ${blog.title}`,
    description: blog.description,
    keywords: blog.keywords.split(' ').join(', '),
    openGraph: {
      type: 'website',
      title: `Mg Wunna — ${blog.title}`,
      description: blog.description,
      url: `https://mg-wunna.vercel.app/blogs/${slug}`,
      siteName: `Mg Wunna — ${blog.title}`,
      locale: 'en_US',
      images: [
        {
          url: `https://mg-wunna.vercel.app/blogs/${slug}/cover.png`,
          width: 1200,
          height: 630,
          alt: `${blog.title} Blog Cover Image`,
          type: 'image/jpeg',
        },
      ],
    },
  };
}

export default BlogDetailPage;
