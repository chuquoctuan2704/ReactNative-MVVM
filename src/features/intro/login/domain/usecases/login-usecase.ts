import { Result } from '../../../../../common/network/result'
import { AppError } from '../../../../../common/network/error'
import { LoginResponse, ValidateEmailResponse, ValidatePasswordResponse } from '../../data/dto/login-response'
import { LoginRepository } from '../../data/repositories/login-repository'
import { LoginModel } from '../entities/login-model'

export class LoginUsecase {
  constructor(private loginRepository: LoginRepository) {}

  async login(user: LoginModel): Promise<Result<LoginResponse>> {
    let result!: Result<LoginResponse>
    try {
      const res = await this.loginRepository.login(user)
      if (res) {
        result = res
      }
    } catch (error) {
      throw AppError.from(error)
    }
    return result
  }

  checkValidateEmail(email: string): Promise<ValidateEmailResponse> {
    let result!: Promise<ValidateEmailResponse>
    try {
      const res = this.loginRepository.checkValidateEmail(email)
      if (res) {
        result = res
      }
    } catch (error) {
      throw AppError.from(error)
    }
    return result
  }

  checkValidatePassword(password: string): Promise<ValidatePasswordResponse> {
    let result!: Promise<ValidatePasswordResponse>
    try {
      const res = this.loginRepository.checkValidatePassword(password)
      if (res) {
        result = res
      }
    } catch (error) {
      throw AppError.from(error)
    }
    return result
  }
}
