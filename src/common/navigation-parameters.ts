export type Example = Record<string, unknown>

export type RootStackParameterList = {
  Main: Record<string, undefined>
  Example: Example
}

export type HomeScreenParameters = {
  type: string
  issuerName: string
  issuerIconUrl: string
  jwt: string
  qrRandomNumber: string
}

export type TabScreenNavigationParameterList = {
  HomeScreen: HomeScreenParameters
}
