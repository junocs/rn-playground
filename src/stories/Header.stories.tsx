import type { Meta, StoryObj } from '@storybook/react-native-web-vite'

import { Header } from './Header'

const meta = {
  component: Header,
  title: 'Example/Header',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    onCreateAccount: () => {},
    onLogin: () => {},
    onLogout: () => {},
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: Story = {
  args: {
    onCreateAccount: () => {},
    onLogin: () => {},
    onLogout: () => {},
  },
}
