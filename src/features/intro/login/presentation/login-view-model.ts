import Debug from 'debug'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { SystemActivityIndicatorContext } from '../../../../providers/system-activity-indicator-provider'
import { LoginRemoteDatasource } from '../data/datasources/login-remote-data-source'
import { LoginRepositoryImpl } from '../data/repositories/login-repository'
import { LoginUsecase } from '../domain/usecases/login-usecase'
import { SystemToastContext } from '../../../../providers/system-toast-provider'
import { PreferencesContext } from '../../../../providers/preferences-provider'
import { AppError } from '~/common/network/error'
import { getEmail, getPassword } from '~/common/services/async-storage-service'
import { LoginLocalDatasource } from '../data/datasources/login-local-data-source'

const debug = Debug('login-View-model')

export default function LoginViewModel() {
  const [isShowPass, setIsShowPass] = useState(true)
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordValid, setPasswordValid] = useState(false)
  const { setShowSystemActivityIndicator } = useContext(SystemActivityIndicatorContext)
  const { showSystemToast } = useContext(SystemToastContext)
  const { setPreferences } = useContext(PreferencesContext)
  const loginUsecase = useMemo(
    () => new LoginUsecase(new LoginRepositoryImpl(new LoginRemoteDatasource(), new LoginLocalDatasource())),
    [],
  )

  function loginAction() {
    if (emailValid && passwordValid) {
      setShowSystemActivityIndicator(true)
      loginUsecase
        .login({ email: email, password: password })
        .then((result) => {
          setShowSystemActivityIndicator(false)
          setPreferences({ selectedId: result.data?.token! })
        })
        .catch((error: AppError) => {
          setShowSystemActivityIndicator(false)
          showSystemToast(error.toString() ?? 'Error')
        })
    } else {
      showSystemToast('Please enter email, password is valid')
    }
  }

  const checkEmail = useCallback(
    (value: string) => {
      setEmail(value)
      loginUsecase.checkValidateEmail(value).then(
        (result) => {
          if (result.isValid) {
            setEmailMessage(result.message)
            setEmailValid(result.isValid)
          } else {
            setEmailMessage(result.message)
            setEmailValid(result.isValid)
          }
        },
        (reject) => debug(reject),
      )
    },
    [loginUsecase],
  )

  const checkPassword = useCallback(
    (value: string) => {
      setPassword(value)
      loginUsecase.checkValidatePassword(value).then(
        (result) => {
          if (result.isValid) {
            setPasswordMessage(result.message)
            setPasswordValid(result.isValid)
          } else {
            setPasswordMessage(result.message)
            setPasswordValid(result.isValid)
          }
        },
        (reject) => debug(reject),
      )
    },
    [loginUsecase],
  )

  useEffect(() => {
    getEmail().then((value) => {
      checkEmail(value)
    })
    getPassword().then((value) => {
      checkPassword(value)
    })
  }, [checkEmail, checkPassword])

  return {
    email,
    emailMessage,
    emailValid,
    password,
    passwordMessage,
    passwordValid,
    isShowPass,
    setIsShowPass,
    loginAction,
    checkEmail,
    checkPassword,
  }
}
