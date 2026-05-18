import { Briefcase, Code2, MapPin } from 'lucide-react'

import { Container } from '@/components/container.component'

const items = [
  { icon: Briefcase, text: 'Full-stack product engineer' },
  { icon: MapPin, text: 'Based in Bangkok' },
  { icon: Code2, text: 'Building production systems' },
]

export function TrustStrip() {
  return (
    <Container className="mt-12 sm:mt-16">
      <div className="border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <ul className="flex flex-col flex-wrap items-start gap-x-10 gap-y-3 text-sm text-zinc-500 sm:flex-row sm:items-center dark:text-zinc-400">
          {items.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon
                className="h-4 w-4 flex-none text-zinc-400 dark:text-zinc-500"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
