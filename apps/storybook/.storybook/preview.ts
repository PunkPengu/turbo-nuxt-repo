import { action } from '@storybook/addon-actions'
import { setup } from '@storybook/vue3'
import '@unocss/reset/tailwind.css'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import 'virtual:uno.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    options: {
      showPanel: true,
    },
  },
}

setup((app) => {
  app.use(FloatingVue, {
    themes: {
      'icon-tooltip': {
        $extend: 'tooltip',
      },
    },
  })

  app.component('NuxtLink', {
    methods: {
      log () {
        action('link target')(this.to)
      },
    },
    props: {
      to: {
        type: String,
      },
    },
    template: '<a :href="to" @click.prevent="log()"><slot /></a>',
  })
})

export default preview
