import Link from 'next/link';

type WorkHistoryItemProps = {
  title: string;
  company: string;
  link: string;
  period: string;
  description?: string;
  isParallel?: boolean;
  isFirst?: boolean;
};

const workHistoryData = [
  {
    title: 'Back-End Lead Developer',
    company: 'Returning AI',
    link: 'https://returning.ai/',
    period: '2024 - Present',
    description:
      'Lead developer for enterprise-scale web applications, mentoring junior developers and implementing best practices.',
    isParallel: true,
  },
  {
    title: 'Freelance Application Developer',
    company: 'Self-Employed',
    link: '',
    period: '2023 - Present',
    description:
      'Developed and maintained multiple mobile applications using React Native, Node.js and MongoDB. Implemented responsive mobile UI/UX, user authentication flows, and integrated third-party APIs for enhanced functionality.',
    isParallel: true,
  },
  {
    title: 'Project Manager',
    company: 'Anaget',
    link: 'https://anaget.com',
    period: '2023 - 2024',
    description:
      'Led development of a Japanese language learning platform with features like kanji recognition, vocabulary drills, and progress tracking using React, Node.js with custom server architecture.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Anaget',
    link: 'https://anaget.com',
    period: '2021 - 2023',
    description:
      'Developed full-stack features for a Japanese language learning platform using React, Node.js with custom server infrastructure, including kanji recognition, vocabulary drills, and progress tracking systems.',
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Alpha Digital Marketing',
    link: 'http://www.alphamarketingmm.com/',
    period: '2020 - 2021',
    description:
      'Developed and maintained multiple client websites using React, Node.js and MongoDB. Implemented responsive designs, user authentication, and integrated third-party APIs for enhanced functionality.',
  },
];

const WorkHistoryItem = ({
  title,
  company,
  link,
  period,
  description,
  isParallel,
}: WorkHistoryItemProps) => (
  <div
    className={`relative flex items-start gap-6 pb-12 ${isParallel ? 'ml-12' : ''}`}
  >
    {!isParallel && (
      <>
        <div className="absolute left-[7px] top-[50%] h-[calc(100%+48px)] w-[2px] -translate-y-1/2 bg-orange-200" />
        {/* Add a horizontal connector for non-parallel items */}
        <div className="absolute left-[7px] top-[50%] h-[2px] w-[2px] -translate-y-1/2 bg-orange-200" />
      </>
    )}
    {isParallel && (
      <>
        <div className="absolute -left-[41px] top-[50%] h-[calc(100%+48px+48px)] w-[2px] -translate-y-1/2 bg-orange-200" />
        {/* Add a horizontal connector for first parallel item */}
        <div className="absolute -left-[41px] top-[50%] h-[2px] w-[2px] -translate-y-1/2 bg-orange-200" />
      </>
    )}
    <div className="relative self-center">
      {isParallel ? (
        <>
          <div className="absolute -left-[40px] top-1/2 h-[2px] w-[40px] -translate-y-1/2 bg-orange-300" />
          <div className="h-4 w-4 rounded-full bg-orange-600 ring-4 ring-orange-100" />
        </>
      ) : (
        <div className="h-4 w-4 rounded-full bg-orange-600 ring-4 ring-orange-100" />
      )}
    </div>
    <div className="flex-1">
      <Link
        href={link}
        className="block rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        aria-label={`${title} at ${company}`}
      >
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="mt-1 text-orange-600">{company}</div>
        <div className="text-sm text-gray-500">{period}</div>
        {description && <p className="mt-3 text-gray-700">{description}</p>}
      </Link>
    </div>
  </div>
);

const AboutPageWorkHistorySection = () => {
  return (
    <section className="pt-20">
      <div className="mb-12">
        <h2 className="relative mb-4 inline-block -translate-x-[30px] text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Work History
          <div className="absolute -right-6 -top-6 h-12 w-12 rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
          <div className="absolute -bottom-6 -left-6 h-12 w-12 -rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
        </h2>
        <p className="max-w-2xl -translate-x-[30px] text-lg text-gray-600">
          Explore my work history
        </p>
        <div className="z-50 mt-4 h-1 w-20 -translate-x-[calc(50%-8px)] rounded bg-gradient-to-r from-orange-500/5 via-orange-500 to-orange-500/5"></div>
      </div>
      <div className="relative">
        {workHistoryData.map((item, index) => (
          <WorkHistoryItem
            key={index}
            title={item.title}
            company={item.company}
            link={item.link}
            period={item.period}
            description={item.description}
            isParallel={item.isParallel}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutPageWorkHistorySection;
