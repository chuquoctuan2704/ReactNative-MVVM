import Debug from 'debug'
import React, { ReactElement, ReactNodeArray, useEffect, useState } from 'react'
import { SplashView } from '../screen/splash-view'
import { useVersionCheck } from './use-version-check'
const debug = Debug('luniverse:splash')

const MINIMUM_SPLASH_DURATION_MS = 5000

// TODO: expo-splash-screen 이나 react-native-make 를 사용하는 방안을 고려해보자
export function SplashScreen({ children }: { children: ReactNodeArray }): ReactElement {
  const [showSplash, setShowSplash] = useState(true)

  const { versionChecked, showUpdateDialog } = useVersionCheck()

  useEffect(() => {
    setTimeout(() => setShowSplash(false), MINIMUM_SPLASH_DURATION_MS)
  }, [])

  let component = <SplashView />

  debug(`showUpdateDialog: ${String(showUpdateDialog)}`)
  if (!showSplash && versionChecked) {
    component = <>{children}</>
  }

  return component
}
