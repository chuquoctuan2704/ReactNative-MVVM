import React, { createContext, ReactElement } from 'react'
import Toast from 'react-native-root-toast'

export type SystemToastState = {
  showSystemToast: (text: string, duration?: number) => Toast
  hideSystemToast: (toast: Toast) => void
}

const defaultContextValue = {
  showSystemToast: (text: string, duration?: number): Toast => {
    return Toast.show(text, {
      duration,
      shadow: true,
      animation: true,
      hideOnPress: true,
      backgroundColor: 'white',
      opacity: 1,
      textColor: '#1b2733',
      position: Toast.positions.CENTER,
      containerStyle: {
        width: 270,
        borderRadius: 14,
        padding: 30
      },
      textStyle: {
        fontSize: 14
      }
    })
  },
  hideSystemToast: (toast: Toast) => {
    Toast.hide(toast)
  }
}

export const SystemToastContext = createContext<SystemToastState>(defaultContextValue)

export function SystemToastProvider({ children }: { children: React.ReactNode }): ReactElement {
  return <SystemToastContext.Provider value={defaultContextValue}>{children}</SystemToastContext.Provider>
}
