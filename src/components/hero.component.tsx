import { Button } from '@/components/button.component'
import { Container } from '@/components/container.component'

export function Hero() {
  return (
    <Container className="mt-16 sm:mt-24 lg:mt-28">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
          Premium websites designed to help businesses grow online.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl dark:text-zinc-400">
          I design and build modern, high-converting websites for businesses,
          startups, and creators.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="/work" variant="primary" size="lg">
            View Work
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
    </Container>
  )
}
