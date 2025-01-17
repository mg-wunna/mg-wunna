import type { Metadata } from 'next';
import NotFoundPage from '../../components/pages/not-found-page/not-found-page';
import ProjectsPage from '../../components/pages/projects-page/projects-page';
import config from '../../config';
import { metadata as notFoundMetadata } from '../not-found';

const isProjectsEnabled = config.projects_featured === 'enabled';

export const metadata: Metadata = isProjectsEnabled
  ? {
      title: 'Mg Wunna | Projects',
      description: "Mg Wunna's Projects",
    }
  : notFoundMetadata;

export default isProjectsEnabled ? ProjectsPage : NotFoundPage;
