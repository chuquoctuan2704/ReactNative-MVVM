import { createStackNavigator } from '@react-navigation/stack'
import Debug from 'debug'
import React, { ReactElement } from 'react'
import { RootStackParameterList } from '../../common/navigation-parameters'
import { LoginScreen } from './login/presentation/login-screen'
import { RegisterScreen } from './register/presentation/register-screen'

const debug = Debug('screen-list')
const Stack = createStackNavigator<RootStackParameterList>()

export function ScreenIntroList(): ReactElement {
  // const { t } = useTranslation()
  // const credentialDetailScreenTitle = useMemo(() => t('app.name'), [t])

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
