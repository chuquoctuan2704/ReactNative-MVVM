import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import Debug from 'debug'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { RootStackParameterList } from '../../common/navigation-parameters'
import { LoginScreen } from './login-screen'
import { RegisterScreen } from './register-screen'

const debug = Debug('screen-list')
const Stack = createStackNavigator<RootStackParameterList>()
const defaultScreenOption = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  title: '',
  headerStyle: {
    backgroundColor: '#ffffff',
    shadowOpacity: 0,
    elevation: 0,
  },
}

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
