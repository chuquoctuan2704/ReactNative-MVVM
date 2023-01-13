import { AxiosError } from 'axios'
import { ErrorCode, StatusCode } from './error-code'
import { ResultError } from './result'

export class AppError extends Error {
  errorCode?: number

  constructor(errorMessage: string, errorCode?: number) {
    super(errorMessage)
    this.errorCode = errorCode
  }

  // static parseSqliteErrorCode(code: number): ErrorCode {
  //   let errorCode: ErrorCode

  //   // TODO : fix undefined error // if (code === SQLErrors.CONSTRAINT_ERR)
  //   if (code === 8) {
  //     errorCode = ErrorCode.DATABASE_CONSTRAINT_ERR
  //   } else {
  //     errorCode = ErrorCode.UNKNOWN_ERR
  //   }

  //   return errorCode
  // }

  static from(error: unknown): AppError {
    const err = error as AxiosError
    switch (err.response?.status) {
      case StatusCode.SERVER_ERROR:
        return new AppError((err.response?.data as ResultError).msg, err.response?.status)
      case StatusCode.AUTH_ERROR:
        return new AppError((err.response?.data as ResultError).msg, err.response?.status)
      default: {
        if (err.code === ErrorCode.CONNECT_TIME_OUT) {
          return new AppError('Lag qua')
        } else if (err.code === ErrorCode.ERR_NETWORK) {
          return new AppError('Mat mang roi')
        } else {
          return new AppError(err.message)
        }
      }
    }
  }
}
