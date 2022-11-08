import Debug from 'debug'
import { useContext, useState } from 'react'
import { SystemActivityIndicatorContext } from '../../../../providers/system-activity-indicator-provider'
import { LoginLocalDatasource } from '../data/datasources/login-local-data-source'
import { LoginRemoteDatasource } from '../data/datasources/login-remote-data-source'
import { LoginRepositoryImpl } from '../data/repositories/login-repository'
import { LoginUsecase } from '../domain/usecases/login-usecase'
import { SystemToastContext } from '../../../../providers/system-toast-provider'
import { PreferencesContext } from '../../../../providers/preferences-provider'

const debug = Debug('login-View-model')

export default function LoginViewModel() {
  const [isShowPass, setIsShowPass] = useState(true)
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordValid, setPasswordValid] = useState(false)
  const { setShowSystemActivityIndicator, setSystemActivityMessage } = useContext(SystemActivityIndicatorContext)
  const { showSystemToast } = useContext(SystemToastContext)
  const { setPreferences } = useContext(PreferencesContext)
  const loginUsecase = new LoginUsecase(
    new LoginRepositoryImpl(new LoginRemoteDatasource(), new LoginLocalDatasource()),
  )

  function getLogin() {
    if (emailValid && passwordValid) {
      setShowSystemActivityIndicator(true)
      loginUsecase.login({ email: 'tuancq@gail.com', password: '123123' }).then(
        (result) => {
          debug(result, '========')
          setShowSystemActivityIndicator(false)
          setPreferences({ selectedId: result.data?.token ?? '123' })
        },
        (reject) => debug(reject),
      )
    } else {
      showSystemToast('Login false')
    }
  }

  function checkEmail(value: string) {
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
  }

  function checkPassword(value: string) {
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
  }

  return {
    email,
    emailMessage,
    emailValid,
    password,
    passwordMessage,
    passwordValid,
    isShowPass,
    setIsShowPass,
    getLogin,
    checkEmail,
    checkPassword,
  }
}
