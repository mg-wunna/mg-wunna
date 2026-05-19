import { type Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Container,
  Gauge,
  Globe2,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Wand2,
  Wrench,
  Zap,
} from 'lucide-react'

import { CtaSection } from '@/components/cta-section.component'
import {
  BANDWIDTH_OVERAGE_PER_GB_USD,
  BUILD_FEE_INCLUDES,
  BUILD_SCOPE_FACTORS,
  HOSTING_PLANS,
  MAINTENANCE_INCLUDES,
  PRICING_FAQ,
  SERVER_TIERS,
} from '@/constants/pricing'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'How my pricing works — a custom one-time build fee, three hosting plans for any scale, and clear costs for what comes next.',
}

function SectionHeader({
  number,
  title,
  intro,
}: {
  number: string
  title: string
  intro?: string
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-baseline gap-md md:gap-lg">
        <span className="font-display text-headline-md font-medium leading-none text-secondary md:text-headline-lg">
          {number}
        </span>
        <h2 className="text-balance font-display text-headline-sm font-medium leading-none text-on-surface md:text-headline-md">
          {title}
        </h2>
      </div>
      {intro ? (
        <p className="mt-md text-body-lg text-secondary">{intro}</p>
      ) : null}
    </div>
  )
}

function IncludesList({
  items,
  columns = 1,
}: {
  items: string[]
  columns?: 1 | 2
}) {
  return (
    <ul
      className={
        columns === 2 ? 'grid grid-cols-1 gap-3 sm:grid-cols-2' : 'space-y-3'
      }
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-body-md text-on-surface"
        >
          <Check
            className="mt-1 h-4 w-4 flex-none text-primary"
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PricingPage() {
  const smallPlan = HOSTING_PLANS.find((p) => p.id === 'small')!
  const mediumPlan = HOSTING_PLANS.find((p) => p.id === 'medium')!
  const largePlan = HOSTING_PLANS.find((p) => p.id === 'large')!
  const largeSizes = new Set(largePlan.serverTierIds ?? [])
  const largeServerTiers = SERVER_TIERS.filter((t) => largeSizes.has(t.size))

  return (
    <>
      {/* HERO */}
      <section className="preload-anim preload-delay-200 bg-background pb-lg pt-lg sm:pb-xl sm:pt-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-md max-w-4xl text-balance font-display text-headline-md font-medium text-on-surface sm:text-headline-lg lg:text-headline-display">
            Transparent pricing, built for businesses that grow.
          </h1>
          <p className="mt-md max-w-2xl text-body-lg text-secondary">
            Three costs to think about — a one-time build fee, ongoing hosting,
            and care after launch. The build and after-launch numbers are scoped
            per project; the hosting numbers below are real and published.
          </p>
        </div>
      </section>

      {/* 01 BUILD FEES */}
      <section className="border-t border-border bg-background py-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <SectionHeader
            number="01"
            title="Build fees · one-time"
            intro="Every project is custom. The fee depends on scope — I do not publish a generic price tag because no two businesses have the same goals."
          />

          <div className="mt-lg grid grid-cols-1 gap-gutter lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-body-md text-secondary">
                You get a written scope and a fixed fee before any work starts.
                No surprises mid-project. No hourly meter running. I would
                rather quote slightly higher and deliver well than under-quote
                and cut corners.
              </p>

              <div className="mt-md rounded-md border border-border bg-muted-surface p-md md:p-lg">
                <div className="flex items-center gap-2 text-secondary">
                  <Wand2
                    className="h-4 w-4"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <p className="eyebrow">What affects the scope</p>
                </div>
                <ul className="mt-md space-y-2">
                  {BUILD_SCOPE_FACTORS.map((factor) => (
                    <li
                      key={factor}
                      className="flex items-start gap-3 text-body-md text-on-surface"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1 w-1 flex-none rounded-full bg-on-surface"
                      />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn-primary mt-md inline-flex">
                Get a quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-md border border-border bg-surface p-md md:p-lg">
                <p className="eyebrow">What is included in every build</p>
                <div className="mt-md">
                  <IncludesList items={BUILD_FEE_INCLUDES} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 HOSTING */}
      <section className="border-t border-border bg-background py-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <SectionHeader
            number="02"
            title="Hosting · ongoing"
            intro="Hosting is not where I disappear after launch — it is how I keep your site fast, secure and answerable to you. Three plans, each with its own logic."
          />

          {/* SMALL BUSINESS */}
          <article
            id="hosting-small"
            className="mt-xl rounded-lg border border-border bg-surface p-md md:p-lg"
          >
            <header className="grid grid-cols-1 gap-md lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow">Small Business</p>
                <h3 className="mt-2 text-balance font-display text-headline-sm font-medium text-on-surface md:text-headline-md">
                  {smallPlan.tagline}
                </h3>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <div className="inline-flex items-baseline gap-2">
                  <span className="font-display text-headline-md font-medium text-on-surface md:text-headline-lg">
                    {smallPlan.priceLabel}
                  </span>
                  <span className="text-body-md text-secondary">
                    {smallPlan.priceSuffix}
                  </span>
                </div>
              </div>
            </header>

            <p className="mt-md max-w-3xl text-body-lg text-secondary">
              {smallPlan.pitch}
            </p>

            <div className="mt-md grid grid-cols-1 gap-gutter lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="rounded-md border border-border bg-muted-surface p-md">
                  <div className="flex items-center gap-2 text-secondary">
                    <Globe2
                      className="h-4 w-4"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <p className="eyebrow">Why choose this</p>
                  </div>
                  <p className="mt-2 text-body-md text-on-surface">
                    {smallPlan.whyChoose}
                  </p>
                </div>
                <p className="mt-md text-body-sm text-secondary">
                  Paid yearly. No monthly server fee, no maintenance fee — the
                  site is static, there is nothing running for you to keep
                  alive.
                </p>
              </div>
              <div className="lg:col-span-7">
                <p className="eyebrow">What is included</p>
                <div className="mt-md">
                  <IncludesList items={smallPlan.includes} />
                </div>
              </div>
            </div>
          </article>

          {/* MEDIUM BUSINESS */}
          <article
            id="hosting-medium"
            className="relative mt-lg rounded-lg border border-on-surface bg-surface p-md md:p-lg"
          >
            <span className="absolute -top-3 left-md inline-flex items-center gap-1 rounded-full border border-on-surface bg-on-surface px-3 py-1 text-label-sm font-medium text-surface">
              <Sparkles
                className="h-3 w-3"
                strokeWidth={2}
                aria-hidden="true"
              />
              Most chosen
            </span>

            <header className="grid grid-cols-1 gap-md lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow">Medium Business</p>
                <h3 className="mt-2 text-balance font-display text-headline-sm font-medium text-on-surface md:text-headline-md">
                  {mediumPlan.tagline}
                </h3>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <div className="inline-flex items-baseline gap-2">
                  <span className="font-display text-headline-md font-medium text-on-surface md:text-headline-lg">
                    {mediumPlan.priceLabel}
                  </span>
                  <span className="text-body-md text-secondary">
                    {mediumPlan.priceSuffix}
                  </span>
                </div>
              </div>
            </header>

            <p className="mt-md max-w-3xl text-body-lg text-secondary">
              {mediumPlan.pitch}
            </p>

            <div className="mt-md rounded-md border border-border bg-muted-surface p-md">
              <div className="flex items-center gap-2 text-secondary">
                <Server
                  className="h-4 w-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="eyebrow">Why choose this</p>
              </div>
              <p className="mt-2 text-body-md text-on-surface">
                {mediumPlan.whyChoose}
              </p>
            </div>

            <div className="mt-md grid grid-cols-1 gap-gutter lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2">
                  <Gauge
                    className="h-4 w-4 text-secondary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <p className="eyebrow">Pick your server size</p>
                </div>
                <p className="mt-2 text-body-md text-secondary">
                  One server you choose — same code and database whether you
                  start at XS or XL. Move up a size in minutes when traffic
                  grows.
                </p>

                <div className="mt-md overflow-x-auto">
                  <table className="w-full min-w-[520px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 pr-4 text-label-sm font-medium uppercase tracking-[0.04em] text-secondary">
                          Size
                        </th>
                        <th className="py-3 pr-4 text-label-sm font-medium uppercase tracking-[0.04em] text-secondary">
                          Price
                        </th>
                        <th className="py-3 pr-4 text-label-sm font-medium uppercase tracking-[0.04em] text-secondary">
                          Handles
                        </th>
                        <th className="py-3 text-right text-label-sm font-medium uppercase tracking-[0.04em] text-secondary">
                          Included traffic
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {SERVER_TIERS.map((tier) => (
                        <tr
                          key={tier.size}
                          className="border-b border-border last:border-b-0"
                        >
                          <td className="py-3 pr-4">
                            <span className="font-display text-subheadline font-medium text-on-surface">
                              {tier.label}
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-body-md tabular-nums text-on-surface">
                            ${tier.monthlyUsd}
                            <span className="text-secondary"> / mo</span>
                          </td>
                          <td className="py-3 pr-4 text-body-md text-on-surface">
                            {tier.capacity}
                            <span className="block text-body-sm text-secondary">
                              {tier.bestFor}
                            </span>
                          </td>
                          <td className="py-3 text-right text-body-md tabular-nums text-on-surface">
                            {tier.includedBandwidthGb} GB
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-md grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-md border border-border bg-tertiary p-md">
                    <div className="flex items-center gap-2 text-secondary">
                      <Network
                        className="h-4 w-4"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <p className="eyebrow">Traffic overage</p>
                    </div>
                    <p className="mt-2 text-body-md text-on-surface">
                      <span className="font-medium">
                        ${BANDWIDTH_OVERAGE_PER_GB_USD}
                      </span>
                      <span className="text-secondary"> per GB outbound</span>
                    </p>
                    <p className="mt-1 text-body-sm text-secondary">
                      Only if you blow past the included traffic. Most sites
                      never get close.
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-tertiary p-md">
                    <div className="flex items-center gap-2 text-secondary">
                      <Zap
                        className="h-4 w-4"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <p className="eyebrow">Upgrades</p>
                    </div>
                    <p className="mt-2 text-body-md text-on-surface">
                      No penalty, any time
                    </p>
                    <p className="mt-1 text-body-sm text-secondary">
                      Pro-rated automatically. Same code, same database, just a
                      bigger box.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="eyebrow">What is included</p>
                <div className="mt-md">
                  <IncludesList items={mediumPlan.includes} />
                </div>
              </div>
            </div>
          </article>

          {/* LARGE BUSINESS */}
          <article
            id="hosting-large"
            className="mt-lg rounded-lg border border-border bg-surface p-md md:p-lg"
          >
            <header className="grid grid-cols-1 gap-md lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="eyebrow">Large Business</p>
                <h3 className="mt-2 text-balance font-display text-headline-sm font-medium text-on-surface md:text-headline-md">
                  {largePlan.tagline}
                </h3>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <div className="inline-flex items-baseline gap-2">
                  <span className="font-display text-headline-md font-medium text-on-surface md:text-headline-lg">
                    {largePlan.priceLabel}
                  </span>
                  <span className="text-body-md text-secondary">
                    {largePlan.priceSuffix}
                  </span>
                </div>
              </div>
            </header>

            <p className="mt-md max-w-3xl text-body-lg text-secondary">
              {largePlan.pitch}
            </p>

            <div className="mt-md rounded-md border border-border bg-muted-surface p-md">
              <div className="flex items-center gap-2 text-secondary">
                <ShieldCheck
                  className="h-4 w-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="eyebrow">Why choose this</p>
              </div>
              <p className="mt-2 text-body-md text-on-surface">
                {largePlan.whyChoose}
              </p>
            </div>

            <div className="mt-md grid grid-cols-1 gap-gutter lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2">
                  <Server
                    className="h-4 w-4 text-secondary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <p className="eyebrow">How the cluster works</p>
                </div>
                <p className="mt-2 max-w-2xl text-body-md text-secondary">
                  No more single servers. Your site runs across a cluster that{' '}
                  <span className="font-medium text-on-surface">
                    grows when traffic grows and shrinks when it quiets
                  </span>
                  . You pay only for what runs — but at least three servers stay
                  online at all times for high availability.
                </p>

                <div className="mt-md rounded-md border border-border bg-tertiary p-md">
                  <p className="text-body-md text-on-surface">
                    Floor:{' '}
                    <span className="font-medium">
                      3 × M-size servers = ${largePlan.minServers! * 40}/mo
                    </span>
                  </p>
                  <p className="mt-1 text-body-sm text-secondary">
                    Large does not start with XS or S sizes — the workloads that
                    need a cluster need real horsepower per node. Cluster
                    auto-scales upward to L and XL during spikes.
                  </p>
                </div>

                <div className="mt-md">
                  <p className="eyebrow">Available server sizes on Large</p>
                  <ul className="mt-md flex flex-wrap gap-2">
                    {largeServerTiers.map((tier) => (
                      <li key={tier.size}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-tertiary px-3 py-1.5 text-label-md text-on-surface">
                          <span className="font-display font-medium">
                            {tier.label}
                          </span>
                          <span className="tabular-nums text-secondary">
                            ${tier.monthlyUsd}/mo each
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-md rounded-md border border-border bg-tertiary p-md">
                  <div className="flex items-center gap-2 text-secondary">
                    <Container
                      className="h-4 w-4"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <p className="eyebrow">Or self-host</p>
                  </div>
                  <p className="mt-2 text-body-md text-on-surface">
                    If you have a platform team or strict data-residency rules,
                    you can run the site yourself.
                  </p>
                  <p className="mt-1 text-body-sm text-secondary">
                    Licensed Docker image, ready for your own Kubernetes or VPS
                    fleet. License terms agreed up front.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <p className="eyebrow">What is included</p>
                <div className="mt-md">
                  <IncludesList items={largePlan.includes} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 03 AFTER LAUNCH */}
      <section className="border-t border-border bg-background py-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <SectionHeader
            number="03"
            title="After launch · maintenance & new features"
            intro="What happens once the site is live — and how I price the work that comes after."
          />

          <div className="mt-lg grid grid-cols-1 gap-gutter lg:grid-cols-2">
            <article className="rounded-lg border border-border bg-surface p-md md:p-lg">
              <div className="flex items-center gap-2 text-secondary">
                <Wrench
                  className="h-4 w-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="eyebrow">Maintenance · ongoing</p>
              </div>
              <h3 className="mt-3 font-display text-subheadline font-medium text-on-surface md:text-headline-sm">
                Keep-it-running care.
              </h3>
              <p className="mt-3 max-w-prose text-body-md text-secondary">
                For Medium and Large sites — anything with a server, database or
                login screen. The fee is agreed during scoping and bundled into
                your monthly so there is one number to pay, not three. Small
                (static) sites do not need this.
              </p>

              <p className="eyebrow mt-md">What it covers</p>
              <ul className="mt-3 space-y-3">
                {MAINTENANCE_INCLUDES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-body-md text-on-surface"
                  >
                    <Check
                      className="mt-1 h-4 w-4 flex-none text-primary"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-border bg-surface p-md md:p-lg">
              <div className="flex items-center gap-2 text-secondary">
                <Sparkles
                  className="h-4 w-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="eyebrow">New features · per scope</p>
              </div>
              <h3 className="mt-3 font-display text-subheadline font-medium text-on-surface md:text-headline-sm">
                Anything new gets its own scope.
              </h3>
              <p className="mt-3 max-w-prose text-body-md text-secondary">
                Once your site is live, anything that changes what it does — a
                new page, a payment integration, a member area — is scoped and
                quoted separately. Same way as the initial build: I write the
                scope, give you a fixed fee, you sign off, work starts.
              </p>

              <div className="mt-md rounded-md border border-border bg-muted-surface p-md">
                <p className="text-body-md text-on-surface">
                  No surprise invoices.
                </p>
                <p className="mt-1 text-body-sm text-secondary">
                  Nothing gets built that you have not seen a price for. If a
                  feature is bigger than expected, we re-scope before work
                  continues — never after.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 04 FAQ */}
      <section className="border-t border-border bg-background py-xl">
        <div className="mx-auto max-w-8xl px-margin">
          <SectionHeader number="04" title="Things people ask" />

          <dl className="mt-lg divide-y divide-border border-y border-border">
            {PRICING_FAQ.map((item) => (
              <div
                key={item.question}
                className="grid grid-cols-1 gap-md py-md lg:grid-cols-12 lg:py-lg"
              >
                <dt className="lg:col-span-5">
                  <p className="text-balance font-display text-subheadline font-medium text-on-surface">
                    {item.question}
                  </p>
                </dt>
                <dd className="text-body-md text-secondary lg:col-span-7">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
