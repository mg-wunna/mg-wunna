import { CalendarClock } from 'lucide-react'

export function CallRequest() {
  return (
    <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/50">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand shadow-sm dark:bg-zinc-900">
        <CalendarClock
          className="h-5 w-5"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
        Prefer a quick call?
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Drop your project details in the form and mention a few times that work
        for you. I will follow up with a confirmation. Self-serve scheduling is
        coming soon.
      </p>
    </div>
  )
}
