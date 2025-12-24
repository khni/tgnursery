import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { ThemeColor } from '@/avuny/components/types'
import { DefaultHeadline } from '@/avuny/components/typography/headlines/DefaultHeadline'

const meta: Meta<typeof DefaultHeadline> = {
  title: 'Typography/DefaultHeadline',
  component: DefaultHeadline,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'DefaultHeadline text',
    },
    color: {
      control: 'select',
      options: [
        'foreground',
        'primary',
        'secondary',
        'muted',
        'accent',
        'destructive',
      ] satisfies ThemeColor[],
      description: 'Theme color',
    },
  },
  args: {
    text: 'Build fast. Ship faster.',
    color: 'foreground',
  },
}

export default meta

type Story = StoryObj<typeof DefaultHeadline>

export const Default: Story = {}

export const Primary: Story = {
  args: {
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
}

export const Muted: Story = {
  args: {
    color: 'muted',
  },
}

export const LongText: Story = {
  args: {
    text: 'This is a longer DefaultHeadline to test wrapping and responsiveness across screen sizes',
  },
}
