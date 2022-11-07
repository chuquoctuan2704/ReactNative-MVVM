import React, { useState, createContext, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { SystemActivityIndicator } from '../common/components/system-activity-indicator'

export type SystemActivityIndicatorState = {
  showSystemActivityIndicator: boolean
  setShowSystemActivityIndicator: (show: boolean) => void
  setSystemActivityMessage: (message: string) => void
}

export const SystemActivityIndicatorContext = createContext<SystemActivityIndicatorState>({
  showSystemActivityIndicator: false,
  setSystemActivityMessage: () => {},
  setShowSystemActivityIndicator: () => {},
})

export function SystemActivityIndicatorProvider({ children }: { children: React.ReactNode }): ReactElement {
  const { t } = useTranslation()
  const [showSystemActivityIndicator, setShowSystemActivityIndicator] = useState<boolean>(false)
  const [systemActivityMessage, setSystemActivityMessage] = useState<string>('Loading...')

  return (
    <SystemActivityIndicatorContext.Provider
      value={{
        showSystemActivityIndicator,
        setSystemActivityMessage,
        setShowSystemActivityIndicator,
      }}>
      <SystemActivityIndicator show={showSystemActivityIndicator} message={systemActivityMessage} />
      {children}
    </SystemActivityIndicatorContext.Provider>
  )
}
