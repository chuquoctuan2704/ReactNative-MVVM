import { useCallback, useState } from 'react'
// TODO: 에러 메시지 상세화 적용 후 uncomment
// import { SystemErrorMessageContext } from '~/providers/system-error-message-provider'

export function useAsyncError(): (error: Error) => void {
  // TODO: 에러 메시지 상세화 적용 후 uncomment
  // const { setSystemErrorMessage } = useContext(SystemErrorMessageContext)
  const [, setError] = useState()
  return useCallback((error) => {
    setError(() => {
      // TODO: 에러 메시지 상세화 적용 후 uncomment
      // setSystemErrorMessage(error.message)
      throw error
    })
  }, [])
}
