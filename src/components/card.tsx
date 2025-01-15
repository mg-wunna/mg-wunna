import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

type CardProps = {
  type: 'project' | 'blog';
  title: string;
  description: string;
  category: string;
  date: Date;
  imageUrl: string;
  href: string;
};

const intervals = {
  year: 31536000,
  month: 2592000,
  week: 604800,
  day: 86400,
  hour: 3600,
  minute: 60,
};

const Card = ({
  type,
  title,
  description,
  category,
  date,
  imageUrl,
  href,
}: CardProps) => {
  const formattedDate = useMemo(() => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
      const interval = Math.floor(seconds / secondsInUnit);
      if (interval >= 1) {
        return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
      }
    }

    return 'Just now';
  }, [date]);

  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-tr from-white via-white to-orange-50 shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      tabIndex={0}
    >
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600 backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 text-xs text-gray-500">{formattedDate}</div>

        <h2 className="relative mb-3 text-xl font-bold text-gray-900">
          {title.split(' ').reduce((acc: React.ReactElement[], word, i) => {
            // Type guard to ensure el.props exists and has children
            const getChildLength = (el: React.ReactElement) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              if (el.props && typeof el.props.children === 'string') {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                return el.props.children.length;
              }
              return 0;
            };

            const currentLength = acc.reduce(
              (sum, el) => sum + getChildLength(el) + 1,
              0
            );
            const isNewLine = currentLength + word.length > 30;

            if (isNewLine) {
              acc.push(
                <span
                  key={i}
                  className="relative mb-0.5 mr-1 inline-block"
                >
                  {word}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              );
            } else {
              const lastSpan = acc[acc.length - 1];
              if (
                lastSpan &&
                lastSpan.props &&
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                typeof lastSpan.props.children === 'string'
              ) {
                acc[acc.length - 1] = (
                  <span
                    key={`${i}-${lastSpan.key}`}
                    className="relative mb-0.5 mr-1 inline-block"
                  >
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-expect-error */}
                    {`${lastSpan.props.children} ${word}`}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                );
              } else {
                acc.push(
                  <span
                    key={i}
                    className="relative mb-0.5 mr-1 inline-block"
                  >
                    {word}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                );
              }
            }
            return acc;
          }, [])}
        </h2>

        <p className="mb-6 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-orange-500">
            <span>{type === 'project' ? 'View Project' : 'Read Article'}</span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          <div className="h-8 w-8 rounded-full bg-orange-500/10 p-2">
            <svg
              className="h-full w-full text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  type === 'project'
                    ? 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    : 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                }
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
