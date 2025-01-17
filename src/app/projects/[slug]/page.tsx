import ProjectDetailPage from '../../../components/pages/project-detail-page/project-detail-page';
import config from '../../../config';
import NotFoundPage from '../../not-found';

// ☐ add project detail page metadata

const isProjectsEnabled = config.projects_featured === 'enabled';

export default isProjectsEnabled ? ProjectDetailPage : NotFoundPage;
