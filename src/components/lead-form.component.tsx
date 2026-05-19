'use client'

import { CheckCircle2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import clsx from 'clsx'

import { RESPONSE_TIME } from '@/constants/contact-channels'
import {
  BUDGET_OPTIONS,
  GOAL_OPTIONS,
  PROJECT_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  type Goal,
} from '@/types/lead.type'
import { leadSchema } from '@/utilities/lead-schema'

type FieldErrors = Record<string, string | undefined>

interface FormState {
  name: string
  email: string
  company: string
  phone: string
  projectType: string
  budget: string
  description: string
  goals: Goal[]
  timeline: string
  _hp: string
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  budget: '',
  description: '',
  goals: [],
  timeline: '',
  _hp: '',
}

const labelClass = 'block text-label-md font-medium text-on-surface'
const inputBase =
  'mt-2 block w-full rounded-md border border-border bg-surface px-4 py-2.5 text-body-md text-on-surface transition-colors placeholder:text-secondary focus:border-on-surface focus:outline-none focus:ring-2 focus:ring-overlay disabled:cursor-not-allowed disabled:bg-muted-surface'
const errorClass = 'mt-2 text-body-sm text-error'

function FormSection({
  number,
  title,
  subtitle,
  children,
}: {
  number: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-border pt-lg first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-md">
        <span className="font-display text-headline-sm font-medium text-secondary md:text-headline-md">
          {number}
        </span>
        <div>
          <h3 className="font-display text-subheadline font-medium text-on-surface">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-1 text-body-sm text-secondary">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-md">{children}</div>
    </section>
  )
}

function validate(form: FormState): FieldErrors {
  const result = leadSchema.safeParse({
    ...form,
    company: form.company || undefined,
    phone: form.phone || undefined,
  })
  if (result.success) return {}
  const errors: FieldErrors = {}
  for (const issue of result.error.issues) {
    const key = issue.path[0]
    if (typeof key === 'string' && !errors[key]) {
      errors[key] = issue.message
    }
  }
  return errors
}

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  function handleBlur(key: keyof FormState) {
    setTouched((prev) => ({ ...prev, [key]: true }))
    setErrors(validate(form))
  }

  function toggleGoal(goal: Goal) {
    setForm((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validation = validate(form)
    setErrors(validation)
    setTouched({
      name: true,
      email: true,
      company: true,
      projectType: true,
      budget: true,
      description: true,
      timeline: true,
    })
    if (Object.keys(validation).length > 0) {
      const firstKey = Object.keys(validation)[0]
      document
        .getElementById(`lead-${firstKey}`)
        ?.focus({ preventScroll: false })
      return
    }

    setSubmitting(true)
    setSubmitError(null)
    try {
      const response = await fetch('/apis/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          company: form.company || undefined,
          phone: form.phone || undefined,
        }),
      })
      if (!response.ok) {
        throw new Error('Request failed')
      }
      setSubmitted(true)
      setForm(initialState)
    } catch {
      setSubmitError(
        'Something went wrong sending your message. Please try again, or email me directly.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  function pillClass(isActive: boolean) {
    return clsx(
      'inline-flex h-9 items-center rounded-full border px-4 text-label-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-overlay',
      isActive
        ? 'border-on-surface bg-on-surface text-surface'
        : 'border-border bg-tertiary text-on-surface hover:border-on-surface',
    )
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-start gap-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-surface">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="font-display text-headline-sm font-medium text-on-surface">
          Thanks — your message is in.
        </h2>
        <p className="text-body-md text-secondary">
          I will get back to you within 24 hours. In the meantime, feel free to
          reply to the confirmation email or reach me on Telegram.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn-tertiary"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-xl"
      aria-busy={submitting}
    >
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        value={form._hp}
        onChange={(event) => update('_hp', event.target.value)}
        aria-hidden="true"
        className="sr-only"
      />

      <FormSection
        number="01"
        title="About you"
        subtitle="So I know who I'm talking to."
      >
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="lead-name" className={labelClass}>
              Name
              <span aria-hidden="true" className="ml-0.5 text-error">
                *
              </span>
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'lead-name-error' : undefined}
              value={form.name}
              onChange={(event) => update('name', event.target.value)}
              onBlur={() => handleBlur('name')}
              className={inputBase}
              placeholder="Your full name"
            />
            {errors.name ? (
              <p id="lead-name-error" role="alert" className={errorClass}>
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="lead-email" className={labelClass}>
              Email
              <span aria-hidden="true" className="ml-0.5 text-error">
                *
              </span>
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'lead-email-error' : undefined}
              value={form.email}
              onChange={(event) => update('email', event.target.value)}
              onBlur={() => handleBlur('email')}
              className={inputBase}
              placeholder="you@company.com"
            />
            {errors.email ? (
              <p id="lead-email-error" role="alert" className={errorClass}>
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="lead-phone" className={labelClass}>
              Phone{' '}
              <span className="font-normal text-secondary">(optional)</span>
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'lead-phone-error' : undefined}
              value={form.phone}
              onChange={(event) => update('phone', event.target.value)}
              onBlur={() => handleBlur('phone')}
              className={inputBase}
              placeholder="+1 555 123 4567"
            />
            {errors.phone ? (
              <p id="lead-phone-error" role="alert" className={errorClass}>
                {errors.phone}
              </p>
            ) : null}
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="lead-company" className={labelClass}>
              Company{' '}
              <span className="font-normal text-secondary">(optional)</span>
            </label>
            <input
              id="lead-company"
              name="company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={(event) => update('company', event.target.value)}
              onBlur={() => handleBlur('company')}
              className={inputBase}
              placeholder="Where you work"
            />
          </div>
        </div>
      </FormSection>

      <FormSection
        number="02"
        title="The project"
        subtitle="A clear picture beats a long brief."
      >
        <div className="space-y-md">
          <div>
            <span className={labelClass}>
              Project type
              <span aria-hidden="true" className="ml-0.5 text-error">
                *
              </span>
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {PROJECT_TYPE_OPTIONS.map((option) => {
                const isActive = form.projectType === option.value
                return (
                  <button
                    type="button"
                    key={option.value}
                    aria-pressed={isActive}
                    onClick={() => {
                      update('projectType', option.value)
                      setTouched((t) => ({ ...t, projectType: true }))
                    }}
                    className={pillClass(isActive)}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
            {errors.projectType ? (
              <p role="alert" className={errorClass}>
                {errors.projectType}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="lead-description" className={labelClass}>
              Project description
              <span aria-hidden="true" className="ml-0.5 text-error">
                *
              </span>
            </label>
            <textarea
              id="lead-description"
              name="description"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.description)}
              aria-describedby={
                errors.description ? 'lead-description-error' : undefined
              }
              rows={5}
              value={form.description}
              onChange={(event) => update('description', event.target.value)}
              onBlur={() => handleBlur('description')}
              className={`${inputBase} resize-y`}
              placeholder="What do you want to build? Who is it for? What does success look like?"
            />
            {errors.description ? (
              <p
                id="lead-description-error"
                role="alert"
                className={errorClass}
              >
                {errors.description}
              </p>
            ) : null}
          </div>
        </div>
      </FormSection>

      <FormSection
        number="03"
        title="Budget & timeline"
        subtitle="Honest numbers help me give you an honest answer."
      >
        <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
          <div>
            <span className={labelClass}>
              Budget range
              <span aria-hidden="true" className="ml-0.5 text-error">
                *
              </span>
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {BUDGET_OPTIONS.map((option) => {
                const isActive = form.budget === option.value
                return (
                  <button
                    type="button"
                    key={option.value}
                    aria-pressed={isActive}
                    onClick={() => {
                      update('budget', option.value)
                      setTouched((t) => ({ ...t, budget: true }))
                    }}
                    className={pillClass(isActive)}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
            {errors.budget ? (
              <p role="alert" className={errorClass}>
                {errors.budget}
              </p>
            ) : null}
          </div>

          <div>
            <span className={labelClass}>
              Timeline
              <span aria-hidden="true" className="ml-0.5 text-error">
                *
              </span>
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {TIMELINE_OPTIONS.map((option) => {
                const isActive = form.timeline === option.value
                return (
                  <button
                    type="button"
                    key={option.value}
                    aria-pressed={isActive}
                    onClick={() => {
                      update('timeline', option.value)
                      setTouched((t) => ({ ...t, timeline: true }))
                    }}
                    className={pillClass(isActive)}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
            {errors.timeline ? (
              <p role="alert" className={errorClass}>
                {errors.timeline}
              </p>
            ) : null}
          </div>
        </div>
      </FormSection>

      <FormSection
        number="04"
        title="Goals"
        subtitle="Pick anything that applies — helps me understand what success looks like."
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {GOAL_OPTIONS.map((option) => {
            const isChecked = form.goals.includes(option.value)
            return (
              <label
                key={option.value}
                className={clsx(
                  'flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-body-md transition-colors focus-within:ring-2 focus-within:ring-overlay',
                  isChecked
                    ? 'border-on-surface bg-tertiary text-on-surface'
                    : 'border-border bg-surface text-on-surface hover:border-on-surface',
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={() => toggleGoal(option.value)}
                />
                <span
                  aria-hidden="true"
                  className={clsx(
                    'flex h-5 w-5 flex-none items-center justify-center rounded-sm border transition-colors',
                    isChecked
                      ? 'border-on-surface bg-on-surface text-surface'
                      : 'border-border bg-surface',
                  )}
                >
                  {isChecked ? (
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3.5 8.5L7 12l5.5-7" />
                    </svg>
                  ) : null}
                </span>
                {option.label}
              </label>
            )
          })}
        </div>
      </FormSection>

      {submitError ? (
        <p role="alert" className="text-body-sm text-error">
          {submitError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-md">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send message'}
        </button>
        <p className="text-body-sm text-secondary">{RESPONSE_TIME}</p>
      </div>
    </form>
  )
}
