import { Result } from '../../../../../common/network/result'
import { LoginModel } from '../../domain/entities/login-model'
import { LoginRemoteDatasource } from '../datasources/login-remote-data-source'
import { LoginResponse, ValidateEmailResponse, ValidatePasswordResponse } from '../dto/login-response'
import { LoginLocalDatasource } from './../datasources/login-local-data-source'

export interface LoginRepository {
  login(user: LoginModel): Promise<Result<LoginResponse> | null>
  checkValidateEmail(email: string): Promise<ValidateEmailResponse>
  checkValidatePassword(password: string): Promise<ValidatePasswordResponse>
}

export class LoginRepositoryImpl implements LoginRepository {
  constructor(
    private loginRemoteDatasource: LoginRemoteDatasource,
    private loginLocalDatasource: LoginLocalDatasource,
  ) {}

  async login(user: LoginModel): Promise<Result<LoginResponse> | null> {
    return Promise.resolve(await this.loginRemoteDatasource.login(user))
  }

  checkValidateEmail(email: string): Promise<ValidateEmailResponse> {
    return Promise.resolve(this.loginLocalDatasource.checkValidateEmail(email))
  }

  checkValidatePassword(password: string): Promise<ValidatePasswordResponse> {
    return Promise.resolve(this.loginLocalDatasource.checkValidatePassword(password))
  }
}
