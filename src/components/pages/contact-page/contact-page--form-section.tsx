'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Contact } from '../../../types/contact-type';
import { contactValidator } from '../../../validators/contact-validator';
import ContactPageFormSubmittedPopup from './contact-page--form-submitted-popup';

// ☐ create contact page form section
const ContactPageFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✔ create handle clear errors function
  const handleClearErrors = () => setErrors({});

  // ✔ create handle validate form function
  const handleValidateForm = (
    currentData?: Pick<Contact, 'name' | 'email' | 'message'>
  ) => {
    const result = contactValidator(currentData || formData);
    if (result.success) {
      handleClearErrors();
      return result.data;
    } else setErrors(result.errors);
  };

  // ✔ create handle change function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (shouldValidate) handleValidateForm({ ...formData, [name]: value });
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✔ create post contact function
  const postContact = async (
    data: Pick<Contact, 'name' | 'email' | 'message'>,
    retry: number = 3
  ) => {
    const response = await fetch('/apis/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === 500 && retry > 0) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(postContact(data, retry - 1)), 500);
      });
    } else return result;
  };

  // ✔ create handle submit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShouldValidate(true);
    handleClearErrors();
    const data = handleValidateForm();
    if (data) {
      const response = await postContact(data);
      console.log('response :>> ', response);
      if (response.status === 201) {
        setFormData({ name: '', email: '', message: '' });
        handleClearErrors();
        setShouldValidate(false);
        setIsSubmitted(true);
      } else if (response.status === 400) setErrors(response.errors);
      else alert(response.error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-xl sm:p-8">
        {/* Decorative background elements */}
        <div className="absolute -right-16 -top-16 h-32 w-32 rotate-12 rounded-full bg-orange-100/50 transition-transform duration-300 group-hover:rotate-45" />
        <div className="absolute -bottom-16 -left-16 h-32 w-32 rotate-12 rounded-full bg-blue-100/50 transition-transform duration-300 group-hover:rotate-45" />

        <form
          onSubmit={handleSubmit}
          className="relative space-y-4 sm:space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={twMerge(
                'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-3',
                'transition duration-200 ease-in-out',
                'placeholder:text-gray-400',
                'hover:border-orange-200',
                'focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20',
                errors.name &&
                  'border-red-500 text-red-500 ring-4 ring-red-500/20'
              )}
              placeholder="John Doe"
              onFocus={shouldValidate ? undefined : handleClearErrors}
              onBlur={shouldValidate ? () => handleValidateForm() : undefined}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={twMerge(
                'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-3',
                'transition duration-200 ease-in-out',
                'placeholder:text-gray-400',
                'hover:border-orange-200',
                'focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20',
                errors.email &&
                  'border-red-500 text-red-500 ring-4 ring-orange-500/20'
              )}
              placeholder="john@example.com"
              onFocus={shouldValidate ? undefined : handleClearErrors}
              onBlur={shouldValidate ? () => handleValidateForm() : undefined}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="project"
              className="block text-sm font-medium text-gray-700"
            >
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={twMerge(
                'w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 sm:px-4 sm:py-3',
                'transition duration-200 ease-in-out',
                'placeholder:text-gray-400',
                'hover:border-orange-200',
                'focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-500/20',
                'resize-none',
                errors.message &&
                  'border-red-500 text-red-500 ring-4 ring-orange-500/20'
              )}
              placeholder="Tell me about your project ideas and requirements..."
              onFocus={shouldValidate ? undefined : handleClearErrors}
              onBlur={shouldValidate ? () => handleValidateForm() : undefined}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={twMerge(
              'group relative w-full rounded-lg bg-white px-6 py-3 sm:px-8 sm:py-4',
              'text-sm font-semibold text-gray-700 sm:text-base',
              'transition-all duration-500',
              'border-2 border-orange-500',
              'before:absolute before:inset-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500',
              'hover:text-white hover:before:w-full',
              'active:scale-[0.98]',
              'focus:outline-none focus:ring-4 focus:ring-orange-500/20',
              'overflow-hidden',
              isLoading && 'cursor-not-allowed text-white before:w-full'
            )}
            disabled={isLoading}
            aria-label="Send message"
          >
            <div className="relative flex items-center justify-center gap-3">
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin sm:h-5 sm:w-5"
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
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 group-hover:bg-white/20 sm:h-6 sm:w-6">
                      <svg
                        className="h-3 w-3 text-orange-500 transition-all duration-500 group-hover:text-white sm:h-4 sm:w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </>
                )}
              </span>
            </div>
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="h-1 w-1 animate-ping rounded-full bg-white"></div>
            </div>
          </button>
        </form>
      </div>
      <ContactPageFormSubmittedPopup
        isOpen={isSubmitted}
        onClose={() => setIsSubmitted(false)}
      />
    </>
  );
};

export default ContactPageFormSection;
