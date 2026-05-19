import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().trim().min(1, 'Please share your name').max(100),
  email: z.string().trim().toLowerCase().email('Enter a valid email'),
  company: z
    .string()
    .trim()
    .max(120, 'Keep this under 120 characters')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9 ()\-.]{5,25}$/, 'Enter a valid phone number')
    .optional()
    .or(z.literal('')),
  projectType: z.enum(
    ['business-website', 'website-redesign', 'saas-mvp', 'dashboard', 'other'],
    { errorMap: () => ({ message: 'Pick a project type' }) },
  ),
  budget: z.enum(['<500', '500-2k', '2k-5k', '5k+'], {
    errorMap: () => ({ message: 'Pick a budget range' }),
  }),
  description: z
    .string()
    .trim()
    .min(10, 'Tell me a little more about what you want to build')
    .max(2000, 'Keep this under 2000 characters'),
  goals: z
    .array(
      z.enum([
        'more-customers',
        'brand-image',
        'automation',
        'launch-startup',
        'other',
      ]),
    )
    .default([]),
  timeline: z.enum(['asap', '1-2-weeks', '1-month', 'flexible'], {
    errorMap: () => ({ message: 'Pick a timeline' }),
  }),
  // Honeypot — bots will fill this; humans never see it.
  _hp: z.string().max(0).optional(),
})

export type LeadSchema = typeof leadSchema
