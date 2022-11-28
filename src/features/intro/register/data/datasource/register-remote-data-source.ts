import { Response } from 'ts-retrofit'
import { Result } from '~/common/network/result'
import { ApiService } from '~/common/services/api-service'
import { RegisterModel } from '../dto/register-model'
import { RegisterResponse } from '../../domain/entities/register-reponse'

export class RegisterRemoteDataSource {
  register = async (user: RegisterModel): Promise<Result<RegisterResponse>> => {
    const response: Response<Result<RegisterResponse>> = await ApiService.register(user)
    return response.data
  }
}
