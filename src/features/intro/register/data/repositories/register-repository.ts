import { Result } from '~/common/network/result'
import { ValidateEmailResponse, ValidatePasswordResponse } from '~/features/intro/login/domain/entities/login-response'
import { RegisterModel } from '../dto/register-model'
import { RegisterLocalDatasource } from '../datasource/register-local-data-source'
import { RegisterRemoteDataSource } from '../datasource/register-remote-data-source'
import { RegisterResponse } from '../../domain/entities/register-reponse'

export interface RegisterRepository {
  register(user: RegisterModel): Promise<Result<RegisterResponse> | null>
  checkValidateEmail(email: string): Promise<ValidateEmailResponse>
  checkValidatePassword(password: string): Promise<ValidatePasswordResponse>
}

export class RegisterRepositoryImpl implements RegisterRepository {
  constructor(
    private registerRemoteDatasource: RegisterRemoteDataSource,
    private registerLocalDatasource: RegisterLocalDatasource
  ) {}

  async register(user: RegisterModel): Promise<Result<RegisterResponse> | null> {
    return Promise.resolve(await this.registerRemoteDatasource.register(user))
  }

  checkValidateEmail(email: string): Promise<ValidateEmailResponse> {
    return Promise.resolve(this.registerLocalDatasource.checkValidateEmail(email))
  }

  checkValidatePassword(password: string): Promise<ValidatePasswordResponse> {
    return Promise.resolve(this.registerLocalDatasource.checkValidatePassword(password))
  }
}
