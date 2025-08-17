import type { StorybookConfig } from '@storybook/react-native'

const main: StorybookConfig = {
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
  ],
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
}

export default main
