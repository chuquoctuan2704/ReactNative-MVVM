import { useTranslation } from 'react-i18next'
import { useEffect, useMemo, useState } from 'react'
import VersionCheck from 'react-native-version-check'
import { useAsyncError } from '../common/hooks/use-async-error'

export function useVersionCheck(): {
  showUpdateDialog: boolean
  setShowUpdateDialog: (show: boolean) => void
  storeUrl: string
  setStoreUrl: (url: string) => void
  versionChecked: boolean
} {
  const throwError = useAsyncError()

  const [versionChecked, setVersionChecked] = useState(false)
  const [showUpdateDialog, setShowUpdateDialog] = useState(false)
  const [storeUrl, setStoreUrl] = useState('')

  const { t } = useTranslation()
  const versionCheckFailureMessage = useMemo(() => t('splash.version-check-failure-message'), [t])

  useEffect(() => {
    if (versionChecked) {
      return
    }

    VersionCheck.needUpdate()
      .then((response) => {
        if (response && response.isNeeded) {
          setStoreUrl(response.storeUrl)
          setShowUpdateDialog(true)
        }
        setVersionChecked(true)
      })
      .catch(() => {
        setVersionChecked(true)
        throwError(new Error(versionCheckFailureMessage))
      })
  }, [throwError, versionCheckFailureMessage, versionChecked])

  return { showUpdateDialog, setShowUpdateDialog, storeUrl, setStoreUrl, versionChecked }
}
