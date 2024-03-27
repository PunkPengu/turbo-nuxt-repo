import { dirname, join } from 'node:path'

import unocss from 'unocss/vite'

import { alias } from '../../../alias'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath (value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {},
  },
  staticDirs: [
    '../../web/public/assets/',
  ],
  stories: [
    '../../../packages/ui-library/src/components/**/*.@(stories.@(js|jsx|ts|tsx))',
  ],
  viteFinal (config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    }
    config.plugins = config.plugins ?? []
    config.plugins.push(
      unocss(),
    )

    return config
  },
}
export default config
