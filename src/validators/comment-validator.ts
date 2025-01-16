import { z } from 'zod';
import { DISPOSABLE_EMAIL_DOMAINS } from '../constants/disposable-email-domains';
import { UValidator } from '../types/type';
import validator from '../utilities/validator';

const commentSchema = z.object({
  name: z
    .string()
    .min(1, "You don't want to tell me your name? 🥺")
    .max(100, "Whoa! That's quite a long name you got there! 😅")
    .trim()
    .refine(
      (val) => /^[a-zA-Z\s'-]+$/.test(val),
      'Letters, spaces, hyphens and apostrophes only please! 🤔'
    ),
  email: z
    .string()
    .min(1, 'How about sharing your email with me? 📧')
    .email(
      'Oops! That email looks a bit wonky - try something like cool.person@email.com 🤪'
    )
    .trim()
    .toLowerCase()
    .refine(
      (val) => !DISPOSABLE_EMAIL_DOMAINS.includes(val.split('@')[1]),
      'Please use a real email address! 🎯'
    )
    .refine(
      (val) => val.split('@')[0].length >= 3,
      'Email username should be at least 3 characters! ✉️'
    ),
  rating: z
    .number()
    .min(1, 'Please give at least 1 star! ⭐')
    .max(5, 'Maximum rating is 5 stars! ⭐⭐⭐⭐⭐')
    .int('Rating must be a whole number! 🔢'),
  comment: z
    .string()
    .min(
      10,
      "C'mon, tell me a bit more! At least 10 characters would be nice 💭"
    )
    .max(
      1000,
      "Wow, you're writing a novel! Maybe keep it under 1000 characters? 📚"
    )
    .trim()
    .refine(
      (val) => val.split(' ').length >= 2,
      "One word? Let's make it at least two! 🤓"
    ),
});

export const commentValidator = (
  data: z.infer<typeof commentSchema>
): UValidator<
  z.infer<typeof commentSchema>,
  Record<keyof z.infer<typeof commentSchema>, string>
> => {
  return validator(commentSchema, data);
};
