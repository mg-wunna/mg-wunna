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
      className="group relative block overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      tabIndex={0}
      aria-label={`View project: ${title}`}
    >
      <article>
        {/* Image Container */}
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

          {/* Category Badge */}
          <div className="absolute left-4 top-4">
            {Math.floor((new Date().getTime() - date.getTime()) / 1000) <
            intervals.week ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white shadow-lg ring-2 ring-orange-500/20 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
                </span>
                {formattedDate}
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 backdrop-blur-sm">
                {formattedDate}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-3 p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
              {category}
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition-transform duration-300 group-hover:rotate-45">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-500">
              {title}
            </h2>
            <p className="mt-2 line-clamp-2 text-sm text-gray-600">
              {description}
            </p>
          </div>

          <div className="pt-4">
            <div className="h-px w-full bg-gradient-to-r from-orange-500/5 via-orange-500/20 to-orange-500/5" />
            <div className="flex items-center justify-between pt-4">
              <span className="text-sm font-medium text-orange-500">
                {type === 'project' ? 'View Project' : 'View Blog'}
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-orange-500/50 group-hover:animate-ping" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Card;
