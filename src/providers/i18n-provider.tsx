import React, { ReactElement, ReactNode, useEffect, useState } from 'react'
import Debug from 'debug'
import { globalConfig } from '../common/services/config-service'
import { useAsyncError } from '../common/hooks/use-async-error'
import { initI18n } from '../common/services/i18n-service'

const debug = Debug('luniverse:i18n-provider')

export function I18nProvider({ children }: { children: ReactNode }): ReactElement {
  const [i18nInitialized, setI18nInitialized] = useState(false)
  const throwError = useAsyncError()

  useEffect(() => {
    debug('initialize i18n provider')
    const debugMode = globalConfig.env === 'dev'

    initI18n(debugMode)
      .then(() => {
        debug('successfully initialized i18n provider')
        setI18nInitialized(true)
      })
      .catch((error: Error) => {
        throwError(new Error(`Failed to initialize i18n cause: ${error.message}`))
      })
  }, [setI18nInitialized, throwError])

  if (!i18nInitialized) {
    return <></>
  }

  return <>{children}</>
}
