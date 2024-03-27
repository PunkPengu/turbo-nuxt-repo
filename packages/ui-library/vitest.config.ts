import Vue from '@vitejs/plugin-vue'
import { defineProject } from 'vitest/config'

import { alias } from '../../alias'

export default defineProject({
  plugins: [Vue()],
  resolve: {
    alias,
  },
})
