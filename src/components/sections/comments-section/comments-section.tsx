'use client';

import { useEffect, useState } from 'react';
import { Comment } from '../../../types/comment-type';
import CommentsSectionForm from './comments-section--form';

type CommentsAndReviewsProps = {
  type: 'blogs' | 'projects';
  slug: string;
};

const CommentsSection = ({ type, slug }: CommentsAndReviewsProps) => {
  const [meta, setMeta] = useState<{
    total: number;
    page: number;
    limit: number;
    isLoading: boolean;
  }>({
    total: 0,
    page: 0,
    limit: 0,
    isLoading: true,
  });
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setMeta((prev) => ({ ...prev, isLoading: true }));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      fetch(`/apis/comments/${type}/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.data);
          setMeta(data.meta);
          setMeta((prev) => ({ ...prev, isLoading: false }));
        })
        .catch((error) => console.error('Error fetching comments:', error));
    })();
  }, [type, slug]);

  const handleLoadMore = async () => {
    setMeta((prev) => ({ ...prev, isLoading: true }));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fetch(`/apis/comments/${type}/${slug}?page=${meta.page + 1}`)
      .then((response) => response.json())
      .then((data) => {
        setComments([...comments, ...data.data]);
        setMeta(data.meta);
        setMeta((prev) => ({ ...prev, isLoading: false }));
      })
      .catch((error) => console.error('Error fetching comments:', error));
  };

  return (
    <div className="mt-10 space-y-12">
      <CommentsSectionForm
        type={type}
        slug={slug}
        addComment={(comment) => setComments((prev) => [comment, ...prev])}
      />

      {/* Comments */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
            Comments
          </h2>
          <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs text-orange-600 sm:px-3 sm:py-1 sm:text-sm">
            {meta.total}
          </span>
        </div>

        {meta.page === 1 && comments.length === 0 && (
          <div className="my-20 text-center text-sm text-gray-500">
            No comments yet. Be the first to comment!
          </div>
        )}

        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="rounded-lg border border-gray-100 bg-gray-50 p-4 sm:p-6"
            >
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-200 text-xs font-medium text-orange-700 sm:h-10 sm:w-10 sm:text-sm">
                    {comment.name[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 sm:text-base">
                      {comment.name}
                    </h3>
                    <p className="text-xs text-orange-500 sm:text-sm">
                      {new Date(comment.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <div
                      key={value}
                      className={`flex h-5 w-5 items-center justify-center rounded sm:h-6 sm:w-6 ${
                        comment.rating >= value
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mx-auto h-3 w-3 sm:h-4 sm:w-4"
                      >
                        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700 sm:text-base">
                {comment.comment}
              </p>
            </div>
          ))}

          {meta.isLoading && (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-100 bg-gray-50 p-4 sm:p-6"
                >
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200 sm:h-10 sm:w-10" />
                      <div className="space-y-2">
                        <div className="h-4 w-24 animate-pulse rounded bg-gray-200 sm:h-5 sm:w-32" />
                        <div className="h-3 w-20 animate-pulse rounded bg-gray-200 sm:h-4 sm:w-24" />
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div
                          key={value}
                          className="h-5 w-5 animate-pulse rounded bg-gray-200 sm:h-6 sm:w-6"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {comments.length < meta.total && (
          <div className="mt-6 text-center">
            <button
              onClick={handleLoadMore}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-orange-600 transition-colors hover:bg-gray-50 sm:px-6 sm:text-sm"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
