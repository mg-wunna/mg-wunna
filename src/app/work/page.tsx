import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/simple-layout.component'
import { WorkGrid } from '@/components/work-grid.component'
import { getAllProjects } from '@/utilities/projects'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected business websites, redesigns, web systems, and startup MVPs built to help businesses grow online.',
}

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <SimpleLayout
      title="Selected work."
      intro="A few of the projects I have designed and shipped. Each one was built to help a business or founder reach the next stage of growth."
    >
      <WorkGrid projects={projects} />
    </SimpleLayout>
  )
}
