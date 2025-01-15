'use client';

import { useState } from 'react';

type Review = {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  date: Date;
};

const CommentsAndReviews = () => {
  const [rating, setRating] = useState<number>(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [visibleReviews, setVisibleReviews] = useState<number>(2);
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      rating: 5,
      comment: 'Amazing project! The UI is very intuitive and clean.',
      date: new Date('2024-01-15'),
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      rating: 4,
      comment: 'Great work on the animations and responsiveness.',
      date: new Date('2024-01-10'),
    },
    {
      id: '3',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      rating: 3,
      comment:
        'The design is modern and clean, but the animations could be smoother.',
      date: new Date('2024-01-12'),
    },
    {
      id: '4',
      name: 'Bob Brown',
      email: 'bob@example.com',
      rating: 2,
      comment: 'The project could use more animations.',
      date: new Date('2024-01-14'),
    },
    {
      id: '5',
      name: 'Charlie Davis',
      email: 'charlie@example.com',
      rating: 1,
      comment: 'The project is not responsive.',
      date: new Date('2024-01-16'),
    },
  ]);

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleSubmitReview = () => {
    if (rating === 0 || !name || !email) return;

    const newReview: Review = {
      id: (reviews.length + 1).toString(),
      name,
      email,
      rating,
      comment,
      date: new Date(),
    };

    setReviews([newReview, ...reviews]);
    setRating(0);
    setName('');
    setEmail('');
    setComment('');
  };

  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 2);
  };

  return (
    <div className="mt-10 space-y-12 border-t border-gray-200 pt-8">
      {/* Rate this project */}
      <div>
        <h2 className="mb-6 text-2xl font-medium text-gray-900">
          Share Your Thoughts
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleRatingClick(value)}
                className={`h-10 w-10 rounded-md transition-colors ${
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
                  className="mx-auto h-5 w-5"
                >
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none"
            />
          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about this project..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none"
            rows={4}
          />

          <button
            onClick={handleSubmitReview}
            disabled={rating === 0 || !name || !email}
            className="w-full rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600 disabled:opacity-50"
          >
            Submit Review
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-medium text-gray-900">Reviews</h2>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-600">
            {reviews.length}
          </span>
        </div>

        <div className="space-y-4">
          {reviews.slice(0, visibleReviews).map((review) => (
            <div
              key={review.id}
              className="rounded-lg border border-gray-100 bg-gray-50 p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-200 text-sm font-medium text-orange-700">
                    {review.name[0]}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{review.name}</h3>
                    <p className="text-sm text-orange-500">
                      {review.date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleRatingClick(value)}
                      className={`h-6 w-6 rounded transition-colors ${
                        review.rating >= value
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      aria-label={`Rate ${value} stars`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mx-auto h-3 w-3"
                      >
                        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>

        {visibleReviews < reviews.length && (
          <div className="mt-6 text-center">
            <button
              onClick={handleLoadMore}
              className="rounded-lg border border-gray-200 bg-white px-6 py-2 text-sm font-medium text-orange-600 transition-colors hover:bg-gray-50"
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
