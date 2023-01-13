import { AppError } from './error'

export class Result<T> {
  data: T | null
  status: boolean
  message: AppError | undefined

  constructor(result: T | null, status: boolean, message?: AppError) {
    this.data = result
    this.status = status
    this.message = message
  }
}

export type ResultError = {
  data: unknown
  code: number
  msg: string
}
