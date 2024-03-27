// https://nuxt.com/docs/api/configuration/nuxt-config

import { alias } from '../../alias'

export default defineNuxtConfig({
  alias,
  components: [{ extensions: ['.vue'], path: '@ui-library/components', pathPrefix: false, prefix: 'Ui' }],
  modules: [
    '@nuxt/devtools',
    '@unocss/nuxt',
  ],
})
