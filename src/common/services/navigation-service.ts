import { NavigationContainerRef } from '@react-navigation/native'

let navigator: NavigationContainerRef | null

export function setNavigatorReference(navigatorReference: NavigationContainerRef | null): void {
  navigator = navigatorReference
}

export function navigate(routeName: string, parameters?: any): void {
  navigator?.navigate(routeName, parameters)
}

export function goBack(): void {
  navigator?.goBack()
}
