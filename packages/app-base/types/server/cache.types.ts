export interface CacheConfig {
  maxAge: number,
  scope: 'private' | 'public',
  staleWhileRevalidate?: number,
}

export type RouteConfig = Record<string, CacheConfig>
