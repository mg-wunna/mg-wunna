'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Inter, sans-serif',
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px',
          color: '#0a0a0a',
          background: '#fafafa',
        }}
      >
        <div style={{ maxWidth: 560 }}>
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              fontSize: 12,
              color: '#737373',
              margin: 0,
            }}
          >
            Something broke
          </p>
          <h1
            style={{
              fontSize: 38,
              lineHeight: 1.1,
              margin: '16px 0 0 0',
              fontWeight: 500,
            }}
          >
            The site failed to load.
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.5,
              color: '#525252',
              marginTop: 16,
            }}
          >
            A critical error happened. Please try again, or contact me directly
            if it persists.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 32,
              padding: '10px 20px',
              borderRadius: 8,
              border: 'none',
              background: '#0a0a0a',
              color: '#fafafa',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
