import { NavigationContainer } from '@react-navigation/native'
import Debug from 'debug'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { setNavigatorReference } from '../common/services/navigation-service'
import { PreferencesContext } from '../providers/preferences-provider'
import { SplashScreen } from './splash-screen'
import { ScreenIntroList } from './intro/screen-intro-list'
import { ScreenMainList } from './main/screen-main-list'
// import { useVersionCheck } from './use-version-check'
const debug = Debug('splash')

const MINIMUM_SPLASH_DURATION_MS = 1000

export function ScreenControl(): ReactElement {
  const [showSplash, setShowSplash] = useState(true)
  const { preferences } = useContext(PreferencesContext)

  // const { versionChecked, showUpdateDialog } = useVersionCheck()

  useEffect(() => {
    setTimeout(() => setShowSplash(false), MINIMUM_SPLASH_DURATION_MS)
  }, [])

  let component = <SplashScreen />

  // debug(`showUpdateDialog: ${String(showUpdateDialog)}`)
  debug('preferences: ', preferences)
  if (!showSplash) {
    if (preferences.selectedId === '') {
      debug('preferences: ', preferences.selectedId)
      component = (
        <NavigationContainer ref={(reference) => setNavigatorReference(reference)}>
          <ScreenIntroList />
        </NavigationContainer>
      )
    } else {
      debug('preferences: ', preferences.selectedId)
      component = (
        <NavigationContainer ref={(reference) => setNavigatorReference(reference)}>
          <ScreenMainList />
        </NavigationContainer>
      )
    }
  }

  return component
}
