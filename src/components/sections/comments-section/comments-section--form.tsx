'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Comment } from '../../../types/comment-type';
import { commentValidator } from '../../../validators/comment-validator';

type CommentsAndReviewsProps = {
  type: 'blogs' | 'projects';
  slug: string;
  addComment: (comment: Comment) => void;
};

const CommentsSectionForm = ({
  type,
  slug,
  addComment,
}: CommentsAndReviewsProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    comment: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);

  const handleClearErrors = () => setErrors({});

  const handleValidateForm = (
    currentData?: Pick<Comment, 'name' | 'email' | 'rating' | 'comment'>
  ) => {
    const result = commentValidator(currentData || formData);
    if (result.success) {
      handleClearErrors();
      return result.data;
    } else setErrors(result.errors);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (shouldValidate) handleValidateForm({ ...formData, [name]: value });
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (value: number) => {
    if (shouldValidate) handleValidateForm({ ...formData, rating: value });
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const postComment = async (
    data: Pick<Comment, 'name' | 'email' | 'rating' | 'comment'>,
    retry: number = 3
  ) => {
    const response = await fetch(`/apis/comments/${type}/${slug}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === 500 && retry > 0) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(postComment(data, retry - 1)), 500);
      });
    } else return result;
  };

  const handleSubmitReview = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShouldValidate(true);
    handleClearErrors();
    const data = handleValidateForm();
    if (data) {
      const response = await postComment(data);
      if (response.status === 201) {
        setFormData({ name: '', email: '', rating: 0, comment: '' });
        handleClearErrors();
        setShouldValidate(false);
        addComment(response.data);
      } else if (response.status === 400) setErrors(response.errors);
      else alert(response.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="border-t border-gray-200 pt-8">
      <h2 className="mb-6 text-xl font-medium text-gray-900 sm:text-2xl">
        Share Your Thoughts
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-1 sm:gap-2.5">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleRatingClick(value)}
              className={twMerge(
                'h-8 w-8 rounded-md transition-colors sm:h-10 sm:w-10',
                formData.rating >= value
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200',
                errors.rating && 'ring-4 ring-red-500/20'
              )}
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
        {errors.rating && (
          <p className="text-sm text-red-500">{errors.rating}</p>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={twMerge(
                'w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none sm:p-4 sm:text-base',
                errors.name && 'border-red-500 ring-4 ring-red-500/20'
              )}
              onFocus={shouldValidate ? undefined : handleClearErrors}
              onBlur={shouldValidate ? () => handleValidateForm() : undefined}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={twMerge(
                'w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none sm:p-4 sm:text-base',
                errors.email && 'border-red-500 ring-4 ring-red-500/20'
              )}
              onFocus={shouldValidate ? undefined : handleClearErrors}
              onBlur={shouldValidate ? () => handleValidateForm() : undefined}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Share your thoughts about this project..."
            className={twMerge(
              'w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none sm:p-4 sm:text-base',
              errors.comment && 'border-red-500 ring-4 ring-red-500/20'
            )}
            rows={4}
            onFocus={shouldValidate ? undefined : handleClearErrors}
            onBlur={shouldValidate ? () => handleValidateForm() : undefined}
          />
          {errors.comment && (
            <p className="text-sm text-red-500">{errors.comment}</p>
          )}
        </div>

        <button
          onClick={handleSubmitReview}
          disabled={isLoading}
          className={twMerge(
            'w-full rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-600 disabled:opacity-50 sm:px-6 sm:py-3 sm:text-base',
            'focus:outline-none focus:ring-4 focus:ring-orange-500/20'
          )}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Submitting...</span>
            </div>
          ) : (
            'Submit Review'
          )}
        </button>
      </div>
    </div>
  );
};

export default CommentsSectionForm;
