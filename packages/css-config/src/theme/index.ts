import type { Theme } from '@unocss/preset-mini'
import { theme as windTheme } from '@unocss/preset-wind'
import { mergeDeep } from 'unocss'

import { colors } from './colors'
import { spacing } from './spacing'

export const theme: Theme = mergeDeep(windTheme, {
  colors,
  spacing,
})
