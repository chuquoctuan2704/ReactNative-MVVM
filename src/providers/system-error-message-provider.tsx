import React, { useState, createContext, ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

export type SystemErrorMessageState = {
  systemErrorMessage: string
  setSystemErrorMessage: (message: string) => void
}

export const SystemErrorMessageContext = createContext<SystemErrorMessageState>({
  systemErrorMessage: '',
  setSystemErrorMessage: () => {},
})

export function SystemErrorMessageProvider({ children }: { children: React.ReactNode }): ReactElement {
  const { t } = useTranslation()
  const [systemErrorMessage, setSystemErrorMessage] = useState<string>(t('app.name'))

  return (
    <SystemErrorMessageContext.Provider
      value={{
        systemErrorMessage,
        setSystemErrorMessage,
      }}>
      {children}
    </SystemErrorMessageContext.Provider>
  )
}
