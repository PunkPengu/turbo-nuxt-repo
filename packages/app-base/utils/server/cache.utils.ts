import { createRouter, toRouteMatcher } from 'radix3'

import type { CacheConfig, RouteConfig } from '../../types/server/cache.types'

const setCacheControlValue = (cacheConfig: CacheConfig) => {
  let value = `${cacheConfig.scope}, max-age=${cacheConfig.maxAge}`
  if (cacheConfig.staleWhileRevalidate) {
    value += `, stale-while-revalidate=${cacheConfig.staleWhileRevalidate}`
  }
  return value
}

export const getRouteMatcher = (routeConfig: RouteConfig) => {
  const router = createRouter()
  Object.entries(routeConfig).forEach(([route, cacheConfig]) => {
    router.insert(route, { cacheControlValue: setCacheControlValue(cacheConfig) })
  })

  const routeRulesMatcher = toRouteMatcher(router)

  const matchRoute = (path: string): { cacheControlValue: string } | undefined => {
    const matchAll = routeRulesMatcher.matchAll(path).reverse()
    if (matchAll.length > 0) {
      return ({
        cacheControlValue: matchAll[0].cacheControlValue,
      })
    }
    return undefined
  }

  return { matchRoute }
}
