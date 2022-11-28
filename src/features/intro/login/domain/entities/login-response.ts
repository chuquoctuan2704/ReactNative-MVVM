export interface LoginResponse {
  token: string
}

export interface ValidateEmailResponse {
  isValid: boolean
  message: string
}

export interface ValidatePasswordResponse {
  isValid: boolean
  message: string
}
