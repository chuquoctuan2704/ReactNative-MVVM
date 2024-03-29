import Debug from 'debug'
import {
  BaseService,
  Body,
  FormUrlEncoded,
  POST,
  RequestInterceptorFunction,
  Response,
  ResponseInterceptorFunction,
  ServiceBuilder
} from 'ts-retrofit'
import { LoginResponse } from '../../features/intro/login/domain/entities/login-response'
import { LoginModel } from '../../features/intro/login/data/dto/login-model'
import { Result } from '../network/result'
import { token } from '../../features/screen-control'
import { RegisterModel } from '~/features/intro/register/data/dto/register-model'
import { RegisterResponse } from '~/features/intro/register/domain/entities/register-reponse'
const debug = Debug('API-service')

class RetrofitService extends BaseService {
  @POST('/')
  @FormUrlEncoded
  async login(@Body _item: LoginModel): Promise<Response<Result<LoginResponse>>> {
    return <Response<Result<LoginResponse>>>{}
  }

  @POST('/')
  @FormUrlEncoded
  async register(@Body _item: RegisterModel): Promise<Response<Result<RegisterResponse>>> {
    return <Response<Result<RegisterResponse>>>{}
  }
}

const RequestInterceptor: RequestInterceptorFunction = (config) => {
  config.headers = { ...config.headers, Authorization: token }
  config.timeout = 30000
  debug('axios request succeeded')
  const { url, method } = config
  debug(`method: ${method || 'undefined'}, url: ${url || 'undefined'}`)
  debug(`headers: ${JSON.stringify(config.headers, null, 2)}`)
  debug(`params: ${JSON.stringify(config.params, null, 2)}`)
  debug(`data: ${JSON.stringify(config.data, null, 2)}`)
  return config
}

const ResponseInterceptor: ResponseInterceptorFunction = (response) => {
  debug('After receiving response from server.')
  debug(`statusCode: ${response.status}`)
  debug(`responseData: ${JSON.stringify(response.data, null, 2)}`)
  return response
}
export const ApiService = new ServiceBuilder()
  .setEndpoint('http://ip.jsontest.com')
  .setRequestInterceptors(RequestInterceptor)
  .setResponseInterceptors(ResponseInterceptor)
  .build(RetrofitService)
