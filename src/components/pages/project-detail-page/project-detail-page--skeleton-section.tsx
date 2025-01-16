const ProjectDetailSkeletonSection = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6">
        {/* Breadcrumb skeleton */}
        <div className="mb-8 flex items-center gap-2">
          <div className="h-4 w-12 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
          <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Title and tag skeleton */}
        <div className="mb-8 space-y-4">
          <div className="h-8 w-2/3 animate-pulse rounded-lg bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="h-6 w-24 animate-pulse rounded-full bg-gray-200" />
            <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        {/* Main image skeleton */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-xl">
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        </div>

        {/* Action buttons skeleton */}
        <div className="mb-12 flex gap-4">
          <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200" />
          <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Content skeleton */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="h-6 w-48 animate-pulse rounded bg-gray-200" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            </div>
          </div>

          {/* Additional content sections */}
          <div className="space-y-4">
            <div className="h-6 w-44 animate-pulse rounded bg-gray-200" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="h-32 animate-pulse rounded-lg bg-gray-200" />
              <div className="h-32 animate-pulse rounded-lg bg-gray-200" />
              <div className="h-32 animate-pulse rounded-lg bg-gray-200" />
              <div className="h-32 animate-pulse rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSkeletonSection;
