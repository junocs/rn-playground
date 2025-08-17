import { useState } from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'

import { Header } from './Header'

export function Page() {
  const [user, setUser] = useState<{ name: string } | undefined>()

  return (
    <View>
      <Header
        onCreateAccount={() => {
          setUser({ name: 'Jane Doe' })
        }}
        onLogin={() => {
          setUser({ name: 'Jane Doe' })
        }}
        onLogout={() => {
          setUser(undefined)
        }}
        user={user}
      />

      <View style={styles.section}>
        <Text role="heading" style={styles.h2}>
          Pages in Storybook
        </Text>
        <Text style={styles.p}>
          We recommend building UIs with a{' '}
          <Text
            onPress={() => {
              Linking.openURL('https://componentdriven.org')
            }}
            role="link"
            style={[styles.a, { fontWeight: 'bold' }]}
          >
            <Text>component-driven</Text>
          </Text>{' '}
          process starting with atomic components and ending with pages.
        </Text>
        <Text style={styles.p}>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </Text>
        <View>
          <Text>
            Use a higher-level connected component. Storybook helps you compose
            such data from the "args" of child component stories
          </Text>
          <Text>
            Assemble data in the page component from your services. You can mock
            these services out using Storybook.
          </Text>
        </View>
        <Text style={styles.p}>
          Get a guided tutorial on component-driven development at{' '}
          <Text
            onPress={() => {
              Linking.openURL('https://storybook.js.org/tutorials/')
            }}
            role="link"
            style={styles.a}
          >
            Storybook tutorials
          </Text>
          . Read more in the{' '}
          <Text
            onPress={() => {
              Linking.openURL('https://storybook.js.org/docs')
            }}
            role="link"
            style={styles.a}
          >
            docs
          </Text>
          .
        </Text>
        <View style={styles.tipWrapper}>
          <View style={styles.tip}>
            <Text style={styles.tipText}>Tip </Text>
          </View>
          <Text>Adjust the width of the canvas with the </Text>
          <Text>Viewports addon in the toolbar</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  a: {
    color: '#1ea7fd',
  },

  h2: {
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 1,
    marginBottom: 4,
  },

  li: {
    marginBottom: 8,
  },

  p: {
    marginHorizontal: 0,
    marginVertical: 16,
  },

  section: {
    color: '#333',
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 14,
    lineHeight: 24,
    marginHorizontal: 'auto',
    maxWidth: 600,
    paddingHorizontal: 20,
    paddingVertical: 48,
  },

  tip: {
    alignSelf: 'flex-start',
    backgroundColor: '#e7fdd8',
    borderRadius: 16,
    marginBottom: 4,
    marginRight: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  tipText: {
    color: '#66bf3c',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 12,
  },
  tipWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 40,
    marginTop: 40,
  },

  tipWrapperSvg: {
    height: 12,
    marginRight: 4,
    marginTop: 3,
    width: 12,
  },

  ul: {
    marginVertical: 16,
    paddingLeft: 30,
  },
})
