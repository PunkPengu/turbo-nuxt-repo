import type { Meta, StoryObj } from '@storybook/vue3'

import BaseButton from './BaseButton.vue'

const meta = {
  component: BaseButton,
  render: args => ({
    components: { BaseButton },
    setup: () => ({ args }),
    template: `
      <div class="w-[300px]">
        <BaseButton v-bind="args">Click me</BaseButton>
      </div>
    `,
  }),
  title: 'Atom/Button',
} satisfies Meta<typeof BaseButton>

export default meta
type Story = StoryObj<typeof meta>

export const primaryButton = {
  args: {},
} satisfies Story
