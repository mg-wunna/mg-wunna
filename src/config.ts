type Feature = 'enabled' | 'disabled';

const config = {
  projects_featured: 'disabled' as Feature,
} as const;

export default config;
