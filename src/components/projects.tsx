import Card from './card';

// ☐ create projects component
const Projects = () => {
  return (
    <div className="container mx-auto mb-32 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Featured Projects
          <div className="absolute -right-6 -top-6 h-12 w-12 rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
          <div className="absolute -bottom-6 -left-6 h-12 w-12 -rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Explore a collection of my recent work showcasing web development and
          design expertise
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-gradient-to-r from-orange-500/5 via-orange-500 to-orange-500/5"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card
            key={index}
            title="Dodecia - Digital agency web design"
            description="Dodeca is a company (digital agency) that focuses on designing, web development and branding for startups. This is my one-page exploration of digital companies."
            category="Design and Development"
            imageUrl="/images/projects/project-1.png"
            href="/projects/dodecia"
            type="project"
            date={new Date()}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
