import fs from 'fs';
import { Metadata } from 'next';
import path from 'path';
import BlogDetailPage from '../../../components/pages/blog-detail-page/blog-detail-page';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const blog = fs.readFileSync(
    path.join(process.cwd(), 'public', 'blogs', slug, 'meta.json'),
    'utf8'
  );

  if (!blog) {
    return {
      title: 'Blog Not Found | Mg Wunna',
      description: 'The requested blog post could not be found',
    };
  }

  const blogData = JSON.parse(blog);

  return {
    title: `Mg Wunna — ${blogData.title}`,
    description: blogData.description,
    keywords: blogData.keywords.split(' ').join(', '),
    openGraph: {
      type: 'website',
      title: `Mg Wunna — ${blogData.title}`,
      description: blogData.description,
      url: `https://mg-wunna.vercel.app/blogs/${slug}`,
      siteName: `Mg Wunna — ${blogData.title}`,
      locale: 'en_US',
      images: [
        {
          url: `https://mg-wunna.vercel.app/blogs/${slug}/cover.png`,
          width: 1200,
          height: 630,
          alt: `${blogData.title} Blog Cover Image`,
          type: 'image/jpeg',
        },
      ],
    },
  };
}

export default BlogDetailPage;
