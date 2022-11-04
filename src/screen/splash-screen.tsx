import { NavigationContainer } from '@react-navigation/native'
import Debug from 'debug'
import React, { ReactElement, ReactNodeArray, useContext, useEffect, useState } from 'react'
import { setNavigatorReference } from '../common/services/navigation-service'
import { PreferencesContext } from '../providers/preferences-provider'
import { SplashView } from '../screen/splash-view'
import { ScreenIntroList } from './intro/screen-intro-list'
import { ScreenListMain } from './main/screen-main-list'
import { useVersionCheck } from './use-version-check'
const debug = Debug('splash')

const MINIMUM_SPLASH_DURATION_MS = 1000

export function SplashScreen({ children }: { children: ReactNodeArray }): ReactElement {
  const [showSplash, setShowSplash] = useState(true)
  const { preferences } = useContext(PreferencesContext)

  const { versionChecked, showUpdateDialog } = useVersionCheck()

  useEffect(() => {
    setTimeout(() => setShowSplash(false), MINIMUM_SPLASH_DURATION_MS)
  }, [])

  let component = <SplashView />

  debug(`showUpdateDialog: ${String(showUpdateDialog)}`)
  debug('preferences: ', preferences)
  if (!showSplash) {
    if (preferences.selectedId === '') {
      debug('preferences: ', false)
      component = (
        <NavigationContainer ref={(reference) => setNavigatorReference(reference)}>
          <ScreenIntroList />
        </NavigationContainer>
      )
    } else {
      debug('preferences: ', true)
      component = (
        <NavigationContainer ref={(reference) => setNavigatorReference(reference)}>
          <ScreenListMain />
        </NavigationContainer>
      )
    }
  }

  return component
}
