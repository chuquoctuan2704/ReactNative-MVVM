import Debug from 'debug'
import { useContext, useMemo, useState } from 'react'
import { AppError } from '~/common/network/error'
import { PreferencesContext } from '~/providers/preferences-provider'
import { SystemActivityIndicatorContext } from '~/providers/system-activity-indicator-provider'
import { SystemToastContext } from '~/providers/system-toast-provider'
import { RegisterLocalDatasource } from '../data/datasource/register-local-data-source'
import { RegisterRemoteDataSource } from '../data/datasource/register-remote-data-source'
import { RegisterRepositoryImpl } from '../data/repositories/register-repository'
import { RegisterUsecase } from '../domain/usecase/register-usecase'

const debug = Debug('Register-view-model')

export function RegisterViewModel() {
  const [isShowPass, setIsShowPass] = useState(true)
  const [isShowPassConfirm, setIsShowPassConfirm] = useState(true)
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordValid, setPasswordValid] = useState(false)
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordMessageConfirm, setPasswordConfirmMessage] = useState('')
  const [passwordValidConfirm, setPasswordConfirmValid] = useState(false)
  const { setShowSystemActivityIndicator } = useContext(SystemActivityIndicatorContext)
  const { showSystemToast } = useContext(SystemToastContext)
  const { setPreferences } = useContext(PreferencesContext)

  const registerUsecase = useMemo(
    () =>
      new RegisterUsecase(new RegisterRepositoryImpl(new RegisterRemoteDataSource(), new RegisterLocalDatasource())),
    []
  )

  function registerAction() {
    if (emailValid && passwordValid) {
      setShowSystemActivityIndicator(true)
      registerUsecase
        .register({ email: email, password: password })
        .then((result) => {
          setShowSystemActivityIndicator(false)
          setPreferences({ selectedId: result.data?.token! })
        })
        .catch((error: AppError) => {
          debug('------', error.message)
          setShowSystemActivityIndicator(false)
          showSystemToast(error.toString() ?? 'Error')
        })
    } else {
      showSystemToast('Please enter email, password is valid')
    }
  }

  function checkValidateEmail(value: string) {
    setEmail(value)
    registerUsecase.checkValidateEmail(value).then(
      (result) => {
        setEmailMessage(result.message)
        setEmailValid(result.isValid)
      },
      (reject) => debug(reject)
    )
  }

  function checkValidatePassword(value: string) {
    setPassword(value)
    registerUsecase.checkValidatePassword(value).then(
      (result) => {
        setPasswordMessage(result.message)
        setPasswordValid(result.isValid)
      },
      (reject) => debug(reject)
    )
  }

  function checkValidatePasswordConfirm(value: string) {
    setPasswordConfirm(value)
    if (password !== passwordConfirm) {
      setPasswordConfirmMessage('loi')
      setPasswordConfirmValid(false)
    } else {
      setPasswordConfirmMessage('')
      setPasswordConfirmValid(true)
    }
  }

  return {
    email,
    emailMessage,
    emailValid,
    password,
    passwordMessage,
    passwordValid,
    passwordConfirm,
    passwordMessageConfirm,
    passwordValidConfirm,
    isShowPass,
    isShowPassConfirm,
    setIsShowPass,
    setIsShowPassConfirm,
    registerAction,
    checkValidateEmail,
    checkValidatePassword,
    checkValidatePasswordConfirm
  }
}
