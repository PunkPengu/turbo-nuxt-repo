import { defineEventHandler } from 'h3'

import type { CacheConfig } from '../../types/server/cache.types'
import { getRouteMatcher } from '../../utils/server/cache.utils'

const routeConfig: Record<string, CacheConfig> = {
}

const routeMatcher = getRouteMatcher(routeConfig)

export default defineEventHandler((event) => {
  const path = event.path.split('?')[0]
  const matchRoute = routeMatcher.matchRoute(path)
  if (matchRoute) {
    event.node.res.setHeader('cache-control', matchRoute.cacheControlValue)
  }
})
