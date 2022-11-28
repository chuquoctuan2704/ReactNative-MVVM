import { AppError } from '~/common/network/error'
import { Result } from '~/common/network/result'
import { ValidateEmailResponse, ValidatePasswordResponse } from '~/features/intro/login/domain/entities/login-response'
import { RegisterResponse } from '../entities/register-reponse'
import { RegisterRepository } from '../../data/repositories/register-repository'
import { RegisterModel } from '../../data/dto/register-model'

export class RegisterUsecase {
  constructor(private registerRepository: RegisterRepository) {}

  async register(user: RegisterModel): Promise<Result<RegisterResponse>> {
    let result!: Result<RegisterResponse>
    try {
      const res = await this.registerRepository.register(user)
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
      const res = this.registerRepository.checkValidateEmail(email)
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
      const res = this.registerRepository.checkValidatePassword(password)
      if (res) {
        result = res
      }
    } catch (error) {
      throw AppError.from(error)
    }
    return result
  }
}
