import { type Metadata } from 'next'

import { Card } from '@/components/card.component'
import { SimpleLayout } from '@/components/simple-layout.component'
import { type ArticleWithSlug, getAllArticles } from '@/utilities/articles'
import { formatDate } from '@/utilities/format-date'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Join me on a journey through the ever-evolving tech landscape as I share insights, experiences, and deep dives into modern software development, team leadership, and building impactful digital products. Each article represents a milestone in my continuous learning adventure.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Exploring the Digital Frontier: Code, Innovation & Leadership"
      intro="Join me on a journey through the ever-evolving tech landscape as I share insights, experiences, and deep dives into modern software development, team leadership, and building impactful digital products. Each article represents a milestone in my continuous learning adventure."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
