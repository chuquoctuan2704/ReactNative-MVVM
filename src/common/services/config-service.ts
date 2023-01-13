import packageInfo from '../../../package.json'
import env from '../../assets/env.json'

export type GlobalConfig = {
  env: 'dev' | 'prd'
  niceVerificationInitialPageUri: string
  mobileServiceUrl: string
  authServiceUrl: string
  visitorServiceUrl: string
  applicationVersion: string
  walletServiceUrl: string
}

export const globalConfig: GlobalConfig = {
  env: env.env as 'dev' | 'prd',
  niceVerificationInitialPageUri: env.niceVerificationInitialPageUri,
  mobileServiceUrl: env.mobileServiceUrl,
  authServiceUrl: env.authServiceUrl,
  visitorServiceUrl: env.visitorServiceUrl,
  applicationVersion: packageInfo.version,
  walletServiceUrl: env.walletServiceUrl
}
