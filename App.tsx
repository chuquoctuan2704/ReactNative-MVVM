import React, { ReactElement } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RootSiblingParent } from 'react-native-root-siblings'
import { I18nProvider } from './src/providers/i18n-provider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SystemToastProvider } from './src/providers/system-toast-provider'
import { SystemActivityIndicatorProvider } from './src/providers/system-activity-indicator-provider'
import { ExitModalProvider } from './src/providers/exit-modal-provider'
import { Host } from 'react-native-portalize'
import { SplashScreen } from './src/screen/splash-screen'
import { PreferencesProvider } from './src/providers/preferences-provider'

const queryClient = new QueryClient()

export function App(): ReactElement {
  return (
    <RootSiblingParent>
      {/* ngon ngu */}
      <I18nProvider>
        {/* Quan ly va tim nap du lieu, lưu vào bộ nhớ đệm và cập nhật dữ liệu không đồng bộ trong React */}
        <QueryClientProvider client={queryClient}>
          {/* Hien thi Toast */}
          <SystemToastProvider>
            {/*  */}
            <SystemActivityIndicatorProvider>
              {/*  */}
              <ExitModalProvider>
                <SafeAreaProvider>
                  {/* Hien thi component len tren tat ca <Portal> */}
                  <PreferencesProvider>
                    <Host>
                      <SplashScreen>
                        <></>
                      </SplashScreen>
                    </Host>
                  </PreferencesProvider>
                </SafeAreaProvider>
              </ExitModalProvider>
            </SystemActivityIndicatorProvider>
          </SystemToastProvider>
        </QueryClientProvider>
      </I18nProvider>
    </RootSiblingParent>
  )
}
