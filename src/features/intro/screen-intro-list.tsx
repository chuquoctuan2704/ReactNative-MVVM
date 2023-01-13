import { createStackNavigator } from '@react-navigation/stack'
// import Debug from 'debug'
import React, { ReactElement } from 'react'
import { RootStackParameterList } from '../../common/navigation-parameters'
import { LoginScreen } from './login/presentation/login-screen'
import { RegisterScreen } from './register/presentation/register-screen'

// const debug = Debug('screen-list')
const Stack = createStackNavigator<RootStackParameterList>()
export enum ListScreenIntro {
  LOGIN = 'Login',
  REGISTER = 'Register'
}

export function ScreenIntroList(): ReactElement {
  // const { t } = useTranslation()
  // const credentialDetailScreenTitle = useMemo(() => t('app.name'), [t])

  return (
    <Stack.Navigator>
      <Stack.Screen name={ListScreenIntro.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name={ListScreenIntro.REGISTER} component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
