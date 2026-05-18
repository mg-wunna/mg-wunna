'use client'

import { CheckCircle2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import clsx from 'clsx'

import { Button } from '@/components/button.component'
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
  projectType: '',
  budget: '',
  description: '',
  goals: [],
  timeline: '',
  _hp: '',
}

const labelClass = 'block text-sm font-medium text-zinc-800 dark:text-zinc-200'
const inputBase =
  'mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 shadow-sm transition placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 disabled:cursor-not-allowed disabled:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand dark:disabled:bg-zinc-900/50'
const errorClass = 'mt-2 text-sm text-brand'
const fieldsetClass =
  'rounded-2xl border border-zinc-200 p-6 sm:p-8 dark:border-zinc-800'
const legendClass =
  'px-2 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400'

function validate(form: FormState): FieldErrors {
  const result = leadSchema.safeParse({
    ...form,
    company: form.company || undefined,
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

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-subtle text-brand dark:bg-zinc-900">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Thanks — your message is in.
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          I will get back to you within 24 hours. In the meantime, feel free to
          reply to the confirmation email or reach me on Telegram or WhatsApp.
        </p>
        <Button
          type="button"
          variant="ghost"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-8"
      aria-busy={submitting}
    >
      {/* Honeypot — hidden from humans, irresistible to bots */}
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

      <fieldset className={fieldsetClass}>
        <legend className={legendClass}>About you</legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="lead-name" className={labelClass}>
              Name
              <span aria-hidden="true" className="ml-0.5 text-brand">
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
              <span aria-hidden="true" className="ml-0.5 text-brand">
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
          <div className="sm:col-span-2">
            <label htmlFor="lead-company" className={labelClass}>
              Company{' '}
              <span className="font-normal text-zinc-400 dark:text-zinc-500">
                (optional)
              </span>
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
      </fieldset>

      <fieldset className={fieldsetClass}>
        <legend className={legendClass}>The project</legend>
        <div className="space-y-6">
          <div>
            <span className={labelClass}>
              Project type
              <span aria-hidden="true" className="ml-0.5 text-brand">
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
                    className={clsx(
                      'rounded-full border px-4 py-1.5 text-sm font-medium transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950',
                      isActive
                        ? 'border-brand bg-brand text-brand-fg'
                        : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-300 dark:hover:border-zinc-600',
                    )}
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
              <span aria-hidden="true" className="ml-0.5 text-brand">
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
      </fieldset>

      <fieldset className={fieldsetClass}>
        <legend className={legendClass}>Budget & timeline</legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <span className={labelClass}>
              Budget range
              <span aria-hidden="true" className="ml-0.5 text-brand">
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
                    className={clsx(
                      'rounded-full border px-4 py-1.5 text-sm font-medium transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950',
                      isActive
                        ? 'border-brand bg-brand text-brand-fg'
                        : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-300 dark:hover:border-zinc-600',
                    )}
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
              <span aria-hidden="true" className="ml-0.5 text-brand">
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
                    className={clsx(
                      'rounded-full border px-4 py-1.5 text-sm font-medium transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950',
                      isActive
                        ? 'border-brand bg-brand text-brand-fg'
                        : 'border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-300 dark:hover:border-zinc-600',
                    )}
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
      </fieldset>

      <fieldset className={fieldsetClass}>
        <legend className={legendClass}>Goals</legend>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Pick anything that applies — helps me understand what success looks
          like.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {GOAL_OPTIONS.map((option) => {
            const isChecked = form.goals.includes(option.value)
            return (
              <label
                key={option.value}
                className={clsx(
                  'flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium transition focus-within:ring-2 focus-within:ring-brand',
                  isChecked
                    ? 'border-brand bg-brand-subtle text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100'
                    : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-zinc-800 dark:bg-transparent dark:text-zinc-300 dark:hover:border-zinc-700',
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
                    'flex h-5 w-5 flex-none items-center justify-center rounded-md border transition',
                    isChecked
                      ? 'border-brand bg-brand text-brand-fg'
                      : 'border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900',
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
      </fieldset>

      {submitError ? (
        <p role="alert" className="text-sm text-brand">
          {submitError}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="brand" size="lg" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send message'}
        </Button>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          I usually respond within 24 hours.
        </p>
      </div>
    </form>
  )
}
