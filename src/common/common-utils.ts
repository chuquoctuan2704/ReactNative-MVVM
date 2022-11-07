import { Dimensions } from 'react-native'

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message
  else return String(error)
}

export function widthScreen(): number {
  return Dimensions.get('window').width
}

export function heightScreen(): number {
  return Dimensions.get('window').height
}
