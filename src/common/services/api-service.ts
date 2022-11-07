import Debug from 'debug'
import {
  BaseService,
  Body,
  FormUrlEncoded,
  GET,
  Path,
  POST,
  RequestInterceptorFunction,
  Response,
  ResponseInterceptorFunction,
  ServiceBuilder,
} from 'ts-retrofit'
import { LoginResponse } from '../../features/intro/login/data/dto/login-response'
import { LoginModel } from '../../features/intro/login/domain/entities/login-model'
import { Result } from '../network/result'
const debug = Debug('API-service')

class RetrofitService extends BaseService {
  @POST('/')
  @FormUrlEncoded
  async login(@Body _item: LoginModel): Promise<Response<Result<LoginResponse>>> {
    return <Response<Result<LoginResponse>>>{}
  }
}

const RequestInterceptor: RequestInterceptorFunction = (config) => {
  debug('axios request succeeded')
  const { url, method } = config
  debug(`method: ${method || 'undefined'}, url: ${url || 'undefined'}`)
  // debug(`headers: ${JSON.stringify(config.headers, null, 2)}`)
  // debug(`params: ${JSON.stringify(config.params, null, 2)}`)
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
  .setTimeout(30000)
  .setEndpoint('http://ip.jsontest.com')
  .setResponseInterceptors(ResponseInterceptor)
  .setRequestInterceptors(RequestInterceptor)
  .build(RetrofitService)
