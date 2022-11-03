import { useContext, useEffect } from 'react'
import { BackHandler } from 'react-native'
import { ExitModalContext } from '~/providers/exit-modal-provider'

export function useBackButtonExit(): void {
  const { showExitModal, setShowExitModal } = useContext(ExitModalContext)

  useEffect(() => {
    const handler = () => {
      if (!showExitModal) {
        setShowExitModal(true)
      }
      return true
    }
    BackHandler.addEventListener('hardwareBackPress', handler)
    return () => BackHandler.removeEventListener('hardwareBackPress', handler)
  }, [setShowExitModal, showExitModal])
}
