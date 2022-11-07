import { LoginResponse } from '../dto/login-response'
import { ApiService } from '../../../../../common/services/api-service'
import { Response } from 'ts-retrofit'
import { LoginModel } from '../../domain/entities/login-model'
import { Result } from '../../../../../common/network/result'

export class LoginRemoteDatasource {
  login = async (user: LoginModel): Promise<Result<LoginResponse>> => {
    const reponse: Response<Result<LoginResponse>> = await ApiService.login(user)
    return reponse.data
  }
}
