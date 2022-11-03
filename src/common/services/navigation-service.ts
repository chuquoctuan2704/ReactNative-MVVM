import { NavigationContainerRef } from '@react-navigation/native'

let navigator: NavigationContainerRef | null

export function setNavigatorReference(navigatorReference: NavigationContainerRef | null): void {
  navigator = navigatorReference
}

// TODO: remove any
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
export function navigate(routeName: string, parameters?: any): void {
  navigator?.navigate(routeName, parameters)
}

export function goBack(): void {
  navigator?.goBack()
}
