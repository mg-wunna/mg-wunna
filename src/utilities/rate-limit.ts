type Hit = { timestamps: number[] }

const buckets = new Map<string, Hit>()

export interface RateLimitOptions {
  windowMs: number
  max: number
}

export interface RateLimitResult {
  allowed: boolean
  remaining: number
  retryAfterSeconds: number
}

export function rateLimit(
  key: string,
  { windowMs, max }: RateLimitOptions,
): RateLimitResult {
  const now = Date.now()
  const cutoff = now - windowMs

  const bucket = buckets.get(key) ?? { timestamps: [] }
  bucket.timestamps = bucket.timestamps.filter((t) => t > cutoff)

  if (bucket.timestamps.length >= max) {
    const oldest = bucket.timestamps[0]
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((oldest + windowMs - now) / 1000),
    )
    buckets.set(key, bucket)
    return { allowed: false, remaining: 0, retryAfterSeconds }
  }

  bucket.timestamps.push(now)
  buckets.set(key, bucket)
  return {
    allowed: true,
    remaining: max - bucket.timestamps.length,
    retryAfterSeconds: 0,
  }
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]!.trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}
