import Debug from 'debug'
import { useContext, useState } from 'react'
import { SystemActivityIndicatorContext } from '../../../../providers/system-activity-indicator-provider'
import { LoginLocalDatasource } from '../data/datasources/login-local-data-source'
import { LoginRemoteDatasource } from '../data/datasources/login-remote-data-source'
import { LoginRepositoryImpl } from '../data/repositories/login-repository'
import { LoginUsecase } from '../domain/usecases/login-usecase'

const debug = Debug('login-View-model')

export default function LoginViewModel() {
  const [isShowPass, setIsShowPass] = useState(true)
  const { setShowSystemActivityIndicator, setSystemActivityMessage } = useContext(SystemActivityIndicatorContext)
  const loginUsecase = new LoginUsecase(
    new LoginRepositoryImpl(new LoginRemoteDatasource(), new LoginLocalDatasource()),
  )

  function getLogin() {
    setShowSystemActivityIndicator(true)
    loginUsecase.login({ email: 'tuancq@gail.com', password: '123123' }).then(
      (result) => {
        debug(result, '========')
        setShowSystemActivityIndicator(false)
      },
      (reject) => debug(reject),
    )
  }

  function checkEmail(value: string) {
    loginUsecase.checkValidateEmail(value).then(
      (result) => {
        if (result.isValid) {
          debug(result, 'email done')
        } else {
          debug(result, 'email false')
        }
      },
      (reject) => debug(reject),
    )
  }

  function checkPassword(value: string) {
    loginUsecase.checkValidatePassword(value).then(
      (result) => {
        if (result.isValid) {
          debug('pass done')
        } else {
          debug('pass false')
        }
      },
      (reject) => debug(reject),
    )
  }

  return {
    isShowPass,
    setIsShowPass,
    getLogin,
    checkEmail,
    checkPassword,
  }
}
