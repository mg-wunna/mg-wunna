import type { Metadata } from 'next';
import NotFoundPage from '../../components/pages/not-found-page/not-found-page';
import ProjectsPage from '../../components/pages/projects-page/projects-page';
import config from '../../config';
import { metadata as notFoundMetadata } from '../not-found';

const isProjectsEnabled = config.projects_featured === 'enabled';

export const metadata: Metadata = isProjectsEnabled
  ? {
      title: 'Mg Wunna — Projects',
      description:
        'Explore my portfolio of innovative web projects showcasing full-stack development expertise. From responsive web apps to scalable backend solutions using modern technologies.',
    }
  : notFoundMetadata;

export default isProjectsEnabled ? ProjectsPage : NotFoundPage;
