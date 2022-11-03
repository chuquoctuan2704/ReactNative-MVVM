import React, { useState, createContext, ReactElement, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ExitModal } from '../common/components/exit-modal'

export type ExitModalState = {
  showExitModal: boolean
  setShowExitModal: (show: boolean) => void
  setExitModalMessage: (message: string) => void
  restoreDefaultMessage: () => void
}

export const ExitModalContext = createContext<ExitModalState>({
  showExitModal: false,
  setShowExitModal: () => {},
  setExitModalMessage: () => {},
  restoreDefaultMessage: () => {},
})

export function ExitModalProvider({ children }: { children: React.ReactNode }): ReactElement {
  const { t } = useTranslation()
  const defaultMessage = t('system-message.exit-modal.message')
  const [showExitModal, setShowExitModal] = useState(false)
  const [exitModalMessage, setExitModalMessage] = useState(defaultMessage)
  const restoreDefaultMessage = useCallback(() => setExitModalMessage(defaultMessage), [defaultMessage])

  return (
    <ExitModalContext.Provider value={{ showExitModal, setShowExitModal, setExitModalMessage, restoreDefaultMessage }}>
      <ExitModal show={showExitModal} setShow={setShowExitModal} message={exitModalMessage} />
      {children}
    </ExitModalContext.Provider>
  )
}
