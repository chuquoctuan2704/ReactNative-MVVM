import { ValidateEmailResponse, ValidatePasswordResponse } from '../../domain/entities/login-response'
import validator from 'validator'

export class LoginLocalDatasource {
  regexPass: RegExp = RegExp('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$')
  checkValidateEmail = (email: string): Promise<ValidateEmailResponse> => {
    let isValid = false
    let message = ''
    if (email.length === 0) {
      isValid = false
      message = ''
    } else if (validator.isEmail(email)) {
      isValid = true
      message = ''
    } else {
      isValid = false
      message = 'Khong dung dinh dang email'
    }
    return Promise.resolve({
      isValid: isValid,
      message: message
    })
  }

  checkValidatePassword = (pass: string): Promise<ValidatePasswordResponse> => {
    let isValid = false
    let message = ''
    if (pass.length === 0) {
      isValid = false
      message = ''
    } else if (pass.length < 8) {
      isValid = false
      message = 'mat khau phai dai hon 8 ky tu'
    } else if (this.regexPass.test(pass)) {
      isValid = false
      message = 'Khong dung dinh dang pass'
    } else {
      isValid = true
      message = ''
    }
    return Promise.resolve({
      isValid: isValid,
      message: message
    })
  }
}
