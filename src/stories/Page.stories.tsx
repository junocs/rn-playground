import type { Meta } from '@storybook/react-native-web-vite'

import { expect, userEvent, within } from 'storybook/test'

import { Page } from './Page'

export default {
  component: Page,
  title: 'Example/Page',
} as Meta<typeof Page>

export const LoggedIn = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const loginButton = canvas.getByRole('button', { name: /log in/i })
    await expect(loginButton).toBeInTheDocument()
    await userEvent.click(loginButton)
    // FIXME: await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /log out/i })
    await expect(logoutButton).toBeInTheDocument()
  },
}

export const LoggedOut = {}
