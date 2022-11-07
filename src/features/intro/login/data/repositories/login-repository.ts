import { Result } from '../../../../../common/network/result'
import { LoginModel } from '../../domain/entities/login-model'
import { LoginRemoteDatasource } from '../datasources/login-remote-data-source'
import { LoginResponse } from '../dto/login-response'

export interface LoginRepository {
  login(user: LoginModel): Promise<Result<LoginResponse> | null>
}

export class LoginRepositoryImpl implements LoginRepository {
  constructor(private loginDatasource: LoginRemoteDatasource) {}
  async login(user: LoginModel): Promise<Result<LoginResponse> | null> {
    return Promise.resolve(await this.loginDatasource.login(user))
  }
}
