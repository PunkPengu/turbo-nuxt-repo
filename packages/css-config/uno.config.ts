import { defineConfig } from 'unocss'

import { extendUnocssOptions } from './src'

// for IDE support
export default defineConfig({
  ...extendUnocssOptions(),
})
