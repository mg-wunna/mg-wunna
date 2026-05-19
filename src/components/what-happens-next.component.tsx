interface Step {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'You hit send.',
    description: 'I get a notification the moment your message lands.',
  },
  {
    number: '02',
    title: 'I read it, properly.',
    description:
      'Within 24 hours you get a thoughtful first reply — not a copy-paste.',
  },
  {
    number: '03',
    title: 'We jump on a 30-min call.',
    description:
      'If it feels like a fit, we book a quick call to align on scope and next steps.',
  },
]

export function WhatHappensNext() {
  return (
    <div>
      <p className="eyebrow">What happens next</p>
      <ol className="mt-md space-y-md">
        {STEPS.map((step) => (
          <li key={step.number} className="flex gap-md">
            <span className="flex-none font-display text-subheadline font-medium tabular-nums text-secondary">
              {step.number}
            </span>
            <div>
              <p className="text-body-md font-medium text-on-surface">
                {step.title}
              </p>
              <p className="mt-1 text-body-sm text-secondary">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
