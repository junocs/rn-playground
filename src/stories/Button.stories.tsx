import type { Meta, StoryObj } from '@storybook/react-native-web-vite'

import { View } from 'react-native'
import { fn } from 'storybook/test'

import { Button } from './Button'

const meta = {
  component: Button,
  decorators: [
    Story => (
      <View style={{ alignItems: 'flex-start', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
  title: 'Example/Button',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onPress: fn() },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
}
