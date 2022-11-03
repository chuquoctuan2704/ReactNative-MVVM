import React, { ReactElement, useCallback } from 'react'
import RNExitApp from 'react-native-exit-app'
import { useTranslation } from 'react-i18next'
import { Modal } from '../components/modal'

export function ExitModal(props: { show: boolean; setShow: (show: boolean) => void; message: string }): ReactElement {
  const { t } = useTranslation()
  const { show, setShow, message } = props
  const okButtonLabel = t('system-message.exit-modal.ok-button-label')
  const cancelButtonLabel = t('system-message.exit-modal.cancel-button-label')
  const handleOkButtonPressed = useCallback(() => RNExitApp.exitApp(), [])
  const handleCancelButtonPressed = useCallback(() => setShow(false), [setShow])

  return (
    <Modal
      show={show}
      message={message}
      cancellable
      onOk={handleOkButtonPressed}
      labelOk={okButtonLabel}
      onCancel={handleCancelButtonPressed}
      labelCancel={cancelButtonLabel}
    />
  )
}
