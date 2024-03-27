import type { Preset, UserConfig } from '@unocss/core'
import type { UnocssNuxtOptions } from '@unocss/nuxt'
import type { Theme } from '@unocss/preset-mini'
import type { PresetWindOptions } from '@unocss/preset-wind'
import { presetIcons, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'

import { theme } from './theme'

interface CustomOptions {
  /**
   * Custom options for PresetWind
   */
  customPresetWindOptions?: PresetWindOptions,
}

interface CustomNuxtConfig extends UnocssNuxtOptions, CustomOptions {}

export const defaultCssConfig = (): Preset<Theme> => {
  return {
    name: 'css-config',
    preflights: [
      {
        getCSS: () => `
          html,
          body,
          #__nuxt {
            height: 100%;
            margin: 0;
            padding: 0;
          }
        `,
        layer: 'basestyles',
      },
    ],
    rules: [],
    safelist: ['hidden'],
    shortcuts: [],
    theme,
  }
}

export const extendUnocssOptions = ({ customPresetWindOptions, ...options }: CustomNuxtConfig = {}): UserConfig => {
  return {
    ...options,
    configDeps: ['./src/index.ts'],
    content: {
      pipeline: {
        include: ['**.ts', '**.vue', '**.mdx'],
      },
    },
    presets: [
      presetWind({
        ...(customPresetWindOptions || {}),
      }),
      defaultCssConfig(),
      ...(options.presets || []),
      presetIcons({}),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup(), ...(options.transformers || [])],
  }
}
