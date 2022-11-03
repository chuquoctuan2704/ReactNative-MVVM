import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import Debug from 'debug'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { RootStackParameterList } from '../common/navigation-parameters'
import { LoginScreen } from './login-screen'

const debug = Debug('luniverse:screen-list')
const Stack = createStackNavigator<RootStackParameterList>()
const defaultScreenOption = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  title: '', // NOTE: 타이틀이 무조건 가운데 정렬되는 관계로 headerLeft 에서 타이틀까지 표시한다. 기본값 무시를 위해 강제로 빈 문자열로 설정한다.
  headerStyle: {
    backgroundColor: '#ffffff',
    shadowOpacity: 0,
    elevation: 0,
  },
}

export function ScreenList(): ReactElement {
  // const { t } = useTranslation()
  // const credentialDetailScreenTitle = useMemo(() => t('app.name'), [t])
  debug('ScreenList')

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={LoginScreen} options={{ ...defaultScreenOption, headerShown: false }} />
    </Stack.Navigator>
  )
}
