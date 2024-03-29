import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
// import Debug from 'debug'
import React, { ReactElement } from 'react'
import { RootStackParameterList } from '../../common/navigation-parameters'
import { HomeScreen } from './home/home-screen'
import { SettingScreen } from './setting/setting-screen'

// const debug = Debug('screen-list')
const Stack = createStackNavigator<RootStackParameterList>()
const defaultScreenOption = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  title: '',
  headerStyle: {
    backgroundColor: '#ffffff',
    shadowOpacity: 0,
    elevation: 0
  }
}

export enum ListScreenMain {
  HOME = 'Home',
  SETTING = 'Setting'
}

export function ScreenMainList(): ReactElement {
  // const { t } = useTranslation()
  // const credentialDetailScreenTitle = useMemo(() => t('app.name'), [t])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ListScreenMain.HOME}
        component={HomeScreen}
        options={{ ...defaultScreenOption, headerShown: true }}
      />
      <Stack.Screen
        name={ListScreenMain.SETTING}
        component={SettingScreen}
        options={{ ...defaultScreenOption, headerShown: true }}
      />
    </Stack.Navigator>
  )
}
