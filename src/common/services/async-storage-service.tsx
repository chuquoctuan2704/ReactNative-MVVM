import AsyncStorage from '@react-native-async-storage/async-storage'
import Debug from 'debug'

const debug = Debug('Async-storage-service')

const EMAIL = 'email'
const PASSWORD = 'password'

export async function setEmail(email: string): Promise<void> {
  debug(email, 'saved email')
  await AsyncStorage.setItem(EMAIL, email)
}

export async function getEmail(): Promise<string> {
  return (await AsyncStorage.getItem(EMAIL)) ?? ''
}

export async function setPassword(password: string): Promise<void> {
  await AsyncStorage.setItem(PASSWORD, password)
}

export async function getPassword(): Promise<string> {
  return (await AsyncStorage.getItem(PASSWORD)) ?? ''
}
