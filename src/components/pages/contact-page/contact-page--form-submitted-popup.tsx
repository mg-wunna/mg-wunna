'use client';

import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type FormSubmittedPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

// ✔ create contact page form submitted popup
const ContactPageFormSubmittedPopup = ({
  isOpen,
  onClose,
}: FormSubmittedPopupProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [onClose, isOpen]);

  return (
    <div
      className={twMerge(
        'fixed inset-0 z-50 flex items-center justify-center px-4',
        'animate-[fadeIn_0.3s_ease-in-out]',
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
    >
      <div
        className={twMerge(
          'absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      />

      <div
        className={twMerge(
          'relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300',
          'animate-[slideUp_0.3s_ease-in-out]',
          isOpen
            ? 'pointer-events-auto scale-100'
            : 'pointer-events-none scale-0'
        )}
      >
        <div className="mb-4 flex justify-center">
          <div
            className={twMerge(
              'relative flex h-16 w-16 items-center justify-center rounded-full bg-orange-100',
              'animate-[scaleIn_0.5s_ease-in-out_infinite]'
            )}
          >
            <svg
              className="h-8 w-8 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div
              className={twMerge(
                'absolute -inset-1 rounded-full border-4 border-orange-500/30',
                'animate-[ping_1s_ease-in-out_infinite]'
              )}
            />
          </div>
        </div>

        <h3 className="mb-2 text-center text-xl font-semibold text-gray-900">
          Message Sent Successfully!
        </h3>
        <p className="text-center text-gray-600">
          Thank you for reaching out. I&apos;ll get back to you as soon as
          possible!
        </p>

        <button
          onClick={onClose}
          className={twMerge(
            'mt-6 w-full rounded-lg bg-orange-500 px-4 py-2 text-white',
            'transition-all duration-200',
            'hover:bg-orange-600',
            'focus:outline-none focus:ring-4 focus:ring-orange-500/20',
            'active:scale-[0.98]'
          )}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactPageFormSubmittedPopup;
