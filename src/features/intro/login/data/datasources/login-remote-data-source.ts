import { LoginResponse } from '../../domain/entities/login-response'
import { ApiService } from '../../../../../common/services/api-service'
import { Response } from 'ts-retrofit'
import { LoginModel } from '../dto/login-model'
import { Result } from '../../../../../common/network/result'

export class LoginRemoteDatasource {
  login = async (user: LoginModel): Promise<Result<LoginResponse>> => {
    const response: Response<Result<LoginResponse>> = await ApiService.login(user)
    return response.data
  }
}
