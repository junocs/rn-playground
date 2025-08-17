import { StyleSheet, Text, View } from 'react-native'

import { Button } from './Button'

export type HeaderProps = {
  readonly onCreateAccount: () => void
  readonly onLogin: () => void
  readonly onLogout: () => void
  readonly user?: { name: string }
}

export function Header({
  onCreateAccount,
  onLogin,
  onLogout,
  user,
}: HeaderProps) {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.logoContainer}>
          <Text style={styles.h1}>Acme</Text>
        </View>
        <View style={styles.buttonContainer}>
          {user ? (
            <>
              <Text>Welcome, </Text>
              <Text style={styles.userName}>{user.name}!</Text>

              <Button
                label="Log out"
                onPress={onLogout}
                size="small"
                style={styles.button}
              />
            </>
          ) : (
            <>
              <Button
                label="Log in"
                onPress={onLogin}
                size="small"
                style={styles.button}
              />
              <Button
                label="Sign up"
                onPress={onCreateAccount}
                primary
                size="small"
                style={styles.button}
              />
            </>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  h1: {
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 6,
    marginLeft: 10,
    marginTop: 6,
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userName: {
    fontWeight: '700',
  },
  wrapper: {
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
})
