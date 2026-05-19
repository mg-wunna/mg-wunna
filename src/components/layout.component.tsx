import { Footer } from '@/components/footer.component'
import { Header } from '@/components/header.component'
import { Preloader } from '@/components/preloader.component'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-background text-on-surface">
      <Preloader />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-label-md focus:text-surface"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
