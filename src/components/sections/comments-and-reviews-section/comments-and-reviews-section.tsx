'use client';

import { useEffect, useState } from 'react';
import { Comment } from '../../../types/comment-type';

type CommentsAndReviewsProps = {
  _id: string;
};

const CommentsAndReviews = ({ _id }: CommentsAndReviewsProps) => {
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
    (async () => {
      setMeta((prev) => ({ ...prev, isLoading: true }));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      fetch(`/apis/comments/${_id}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.data);
          setMeta(data.meta);
          setMeta((prev) => ({ ...prev, isLoading: false }));
        })
        .catch((error) => console.error('Error fetching comments:', error));
    })();
  }, [_id]);

  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleSubmitReview = () => {
    alert('Submit comment');
  };

  const handleLoadMore = async () => {
    setMeta((prev) => ({ ...prev, isLoading: true }));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fetch(`/apis/comments/${_id}?page=${meta.page + 1}`)
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
      {/* Rate this project */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="mb-6 text-xl font-medium text-gray-900 sm:text-2xl">
          Share Your Thoughts
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-1 sm:gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleRatingClick(value)}
                className={`h-8 w-8 rounded-md transition-colors sm:h-10 sm:w-10 ${
                  rating >= value
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label={`Rate ${value} stars`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mx-auto h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none sm:p-4 sm:text-base"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none sm:p-4 sm:text-base"
            />
          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about this project..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none sm:p-4 sm:text-base"
            rows={4}
          />

          <button
            onClick={handleSubmitReview}
            disabled={rating === 0 || !name || !email}
            className="w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 disabled:opacity-50 sm:px-6 sm:py-3 sm:text-base"
          >
            Submit Review
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-medium text-gray-900 sm:text-2xl">
            Comments
          </h2>
          <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs text-orange-600 sm:px-3 sm:py-1 sm:text-sm">
            {meta.total}
          </span>
        </div>

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

export default CommentsAndReviews;
