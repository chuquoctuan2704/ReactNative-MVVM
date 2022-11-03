import i18n, { TFunction } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { NativeModules, Platform } from 'react-native'
import en from '../../assets/i18n/en.json'
import ko from '../../assets/i18n/ko.json'

export function getDeviceLanguage(): string {
  let locale = 'en'

  // NOTE: NativeModules any cannot be avoidable
  if (Platform.OS === 'android') {
    locale = NativeModules.I18nManager?.localeIdentifier as string
  } else if (Platform.OS === 'ios') {
    locale = (NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0]) as string
  }

  // NOTE: use only first two character as language
  return locale.slice(0, 2)
}

const resources = {
  ko: { translation: ko },
  en: { translation: en },
}

export function initI18n(debug: boolean): Promise<TFunction> {
  return i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    lng: getDeviceLanguage(),
    resources,
    debug,
    compatibilityJSON: 'v3',
  })
}
