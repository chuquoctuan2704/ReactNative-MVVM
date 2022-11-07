import { Result } from '../../../../../common/network/result'
import { AppError } from '../../../../../common/network/error'
import { LoginResponse } from '../../data/dto/login-response'
import { LoginRepository } from '../../data/repositories/login-repository'
import { LoginModel } from '../entities/login-model'

export class LoginUsecase {
  constructor(private loginRepository: LoginRepository) {}
  async invoke(user: LoginModel): Promise<Result<LoginResponse>> {
    let result!: Result<LoginResponse>
    try {
      const result1 = await this.loginRepository.login(user)
      if (result1) {
        result = result1
      }
    } catch (error) {
      throw AppError.from(error)
    }
    return result
  }
}
