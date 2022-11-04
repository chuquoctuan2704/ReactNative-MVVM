import AsyncStorage from '@react-native-async-storage/async-storage'
import Debug from 'debug'

const debug = Debug('luniverse:preferences-service')

const KEY = 'lunity-preferences-use-vault'

export type Preferences = {
  selectedId: string
}

export const defaultPreferences: Preferences = {
  selectedId: '',
}

function addAdditionalDefaultPreferences(preferences: Preferences): Preferences {
  return { ...defaultPreferences, ...preferences }
}

export async function getPreferences(): Promise<Preferences> {
  const stringed = await AsyncStorage.getItem(KEY)
  if (stringed) {
    debug(`get preferences result: ${stringed}`)
    const loaded = JSON.parse(stringed) as Preferences
    return addAdditionalDefaultPreferences(loaded)
  } else {
    debug(`get preferences result: ${JSON.stringify(defaultPreferences, undefined, 2)}`)
    return defaultPreferences
  }
}

export async function setPreferences(preferences: Preferences): Promise<void> {
  debug(`attempt to set preferences: ${JSON.stringify(preferences, undefined, 2)}`)
  const stringed = JSON.stringify(preferences)
  await AsyncStorage.setItem(KEY, stringed)
}
