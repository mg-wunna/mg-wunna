import Image from 'next/image';
import Link from 'next/link';

type WorkHistoryItemProps = {
  title: string;
  company: string;
  link: string;
  period: string;
  description?: string;
  isParallel?: boolean;
  isFirst?: boolean;
  logo?: string;
  isPresent?: boolean;
};

const workHistoryData = [
  {
    title: 'Back-End Lead Developer',
    logo: '/logos/returning-ai-logo.png',
    company: 'Returning AI',
    link: 'https://returning.ai/',
    period: '2024 - Present',
    description:
      'Lead developer for enterprise-scale web applications, mentoring junior developers and implementing best practices.',
    isParallel: true,
    isPresent: true,
  },
  {
    title: 'Freelance Application Developer',
    logo: '/logos/mg-wunna-logo.png',
    company: 'Self-Employed',
    link: '',
    period: '2023 - Present',
    description:
      'Developed and maintained multiple mobile applications using React Native, Node.js and MongoDB. Implemented responsive mobile UI/UX, user authentication flows, and integrated third-party APIs for enhanced functionality.',
    isParallel: true,
    isPresent: true,
  },
  {
    title: 'Project Manager',
    company: 'Anaget',
    logo: '/logos/anaget-logo.png',
    link: 'https://anaget.com',
    period: '2023 - 2024',
    description:
      'Led development of a Japanese language learning platform with features like kanji recognition, vocabulary drills, and progress tracking using React, Node.js with custom server architecture.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Anaget',
    logo: '/logos/anaget-logo.png',
    link: 'https://anaget.com',
    period: '2021 - 2023',
    description:
      'Developed full-stack features for a Japanese language learning platform using React, Node.js with custom server infrastructure, including kanji recognition, vocabulary drills, and progress tracking systems.',
  },
  {
    title: 'Freelance Full Stack Developer',
    logo: '/logos/alpha-digital-marketing-logo.jpg',
    company: 'Alpha Digital Marketing',
    link: 'http://www.alphamarketingmm.com/',
    period: '2020 - 2022',
    description:
      'Developed and maintained multiple client websites using React, Node.js and MongoDB. Implemented responsive designs, user authentication, and integrated third-party APIs for enhanced functionality.',
    isParallel: true,
  },
  {
    title: 'Freelance Messenger Bot Developer',
    logo: '/logos/nal-digital-marketing-logo.png',
    company: 'NAL Digital Marketing',
    link: 'https://www.nalmm.com/',
    period: '2020 - 2021',
    description:
      'Developed and maintained Facebook Messenger chatbots for multiple clients using Node.js and Facebook Messenger Platform APIs. Implemented interactive flows, natural language processing, and integrated third-party services for automated customer support and engagement.',
    isParallel: true,
  },
];

const WorkHistoryItem = ({
  title,
  company,
  link,
  period,
  description,
  isParallel,
  logo,
  isPresent,
}: WorkHistoryItemProps) => (
  <div
    className={`relative flex flex-col items-start gap-6 pb-12 md:flex-row ${
      isParallel ? 'ml-0 md:ml-12' : ''
    }`}
  >
    {!isParallel && (
      <>
        <div className="absolute left-[7px] top-[50%] hidden h-[calc(100%+48px)] w-[2px] -translate-y-1/2 bg-orange-200 md:block" />
        <div className="absolute left-[7px] top-[50%] hidden h-[2px] w-[2px] -translate-y-1/2 bg-orange-200 md:block" />
      </>
    )}
    {isParallel && (
      <>
        <div className="absolute -left-[41px] top-[50%] hidden h-[calc(100%+48px+48px)] w-[2px] -translate-y-1/2 bg-orange-200 md:block" />
        <div className="absolute -left-[41px] top-[50%] hidden h-[2px] w-[2px] -translate-y-1/2 bg-orange-200 md:block" />
      </>
    )}
    <div className="relative hidden self-center md:block">
      {isParallel ? (
        <>
          <div className="absolute -left-[40px] top-1/2 h-[2px] w-[40px] -translate-y-1/2 bg-orange-300" />
          <div className="h-4 w-4 rounded-full bg-orange-600 ring-4 ring-orange-100" />
        </>
      ) : (
        <div className="h-4 w-4 rounded-full bg-orange-600 ring-4 ring-orange-100" />
      )}
    </div>
    <div className="w-full flex-1">
      <Link
        href={link}
        className={`block rounded-lg p-4 shadow-sm transition-all hover:shadow-md sm:p-6 ${
          isPresent ? 'bg-gradient-to-br from-orange-50 to-white' : 'bg-white'
        }`}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={0}
        aria-label={`${title} at ${company}`}
      >
        <div className="flex items-center gap-4">
          {logo && (
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={logo}
                alt={`${company} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
          )}
          <div>
            <h3
              className={`text-base font-medium sm:text-lg ${
                isPresent ? 'text-gray-700' : 'text-gray-900'
              }`}
            >
              {title}
            </h3>
            <div
              className={`mt-1 text-sm sm:text-base ${
                isPresent ? 'text-orange-500' : 'text-orange-600'
              }`}
            >
              {company}
            </div>
            <div className="text-xs text-gray-500 sm:text-sm">{period}</div>
          </div>
        </div>
        {description && (
          <p
            className={`mt-3 text-sm sm:text-base ${
              isPresent ? 'text-gray-600' : 'text-gray-700'
            }`}
          >
            {description}
          </p>
        )}
      </Link>
    </div>
  </div>
);

const AboutPageWorkHistorySection = () => {
  return (
    <section className="px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col items-center">
        <h2 className="relative mb-4 inline-block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Work History
          <div className="absolute -right-6 -top-6 h-12 w-12 rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
          <div className="absolute -bottom-6 -left-6 h-12 w-12 -rotate-12 rounded-lg bg-orange-500/50 blur-xl" />
        </h2>
        <p className="max-w-2xl text-base text-gray-600 sm:text-lg">
          Explore my work history
        </p>
        <div className="z-50 mt-4 h-1 w-20 rounded bg-gradient-to-r from-orange-500/5 via-orange-500 to-orange-500/5"></div>
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
            logo={item.logo}
            isPresent={item.isPresent}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutPageWorkHistorySection;
