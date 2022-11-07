import Debug from 'debug'
import { useContext, useState } from 'react'
import { SystemActivityIndicatorContext } from '../../../../providers/system-activity-indicator-provider'
import { LoginRemoteDatasource } from '../data/datasources/login-remote-data-source'
import { LoginRepositoryImpl } from '../data/repositories/login-repository'
import { LoginUsecase } from '../domain/usecases/login-usecase'

const debug = Debug('login-View-model')

export default function LoginViewModel() {
  const [isShowPass, setIsShowPass] = useState(false)
  const { setShowSystemActivityIndicator, setSystemActivityMessage } = useContext(SystemActivityIndicatorContext)
  const loginUsecase = new LoginUsecase(new LoginRepositoryImpl(new LoginRemoteDatasource()))

  function getLogin() {
    // setShowSystemActivityIndicator(true)
    loginUsecase.invoke({ email: 'tuancq@gail.com', password: '123123' }).then(
      (result) => {
        debug(result, '========')
      },
      (reject) => debug(reject, '-------1'),
    )
  }

  return {
    isShowPass,
    setIsShowPass,
    getLogin,
  }
}
