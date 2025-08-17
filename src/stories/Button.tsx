import type { StyleProp, ViewStyle } from 'react-native'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export type ButtonProps = {
  /** Is this the principal call to action on the page? */
  readonly primary?: boolean
  /** What background color to use */
  readonly backgroundColor?: string
  /** How large should the button be? */
  readonly size?: 'large' | 'medium' | 'small'
  /** Button contents */
  readonly label: string
  /** Optional click handler */
  readonly onPress?: () => void
  readonly style?: StyleProp<ViewStyle>
}

/** Primary UI component for user interaction */
export function Button({
  backgroundColor,
  label,
  onPress,
  primary = false,
  size = 'medium',
  style,
}: ButtonProps) {
  const modeStyle = primary ? styles.primary : styles.secondary
  const textModeStyle = primary ? styles.primaryText : styles.secondaryText

  const sizeStyle = styles[size]
  const textSizeStyle = textSizeStyles[size]

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.6}
      onPress={onPress}
    >
      <View
        style={[
          styles.button,
          modeStyle,
          sizeStyle,
          style,
          !!backgroundColor && { backgroundColor },
          { borderColor: 'black' },
        ]}
      >
        <Text style={[textModeStyle, textSizeStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 48,
    borderWidth: 0,
  },
  buttonText: {
    fontWeight: '700',
    lineHeight: 1,
  },
  large: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  largeText: {
    fontSize: 16,
  },
  medium: {
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  mediumText: {
    fontSize: 14,
  },
  primary: {
    backgroundColor: '#1ea7fd',
  },
  primaryText: {
    color: 'white',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
  },
  secondaryText: {
    color: '#333',
  },
  small: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  smallText: {
    fontSize: 12,
  },
})

const textSizeStyles = {
  large: styles.largeText,
  medium: styles.mediumText,
  small: styles.smallText,
}
