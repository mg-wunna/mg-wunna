export interface Review {
  quote: string
  author: string
  role: string
}

// TODO: Replace with real client testimonials.
export const REVIEWS: Review[] = [
  {
    quote:
      'Wunna shipped a website that finally matched the ambition of the product. Calm communication, sharp design instincts, on time.',
    author: 'Hnin S.',
    role: 'Founder, G3G Studio',
  },
  {
    quote:
      'He treated the build like it was his own product. We went from a static brochure to a real lead engine in under a month.',
    author: 'Alex P.',
    role: 'Co-founder, Returning AI',
  },
  {
    quote:
      'Premium polish without the agency overhead. Every detail was considered, and the handoff was effortless.',
    author: 'Min Z.',
    role: 'Operations Lead, MSME by G3G',
  },
]
