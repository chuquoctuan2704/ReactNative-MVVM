import { AppRegistry } from 'react-native'
import { App } from './App.tsx'
import { name as appName } from './app.json'
import debug from 'debug'
// import { globalConfig } from './src/common/services/config-service'

// if (globalConfig.env === 'dev') {
debug.enable('*')
// }
AppRegistry.registerComponent(appName, () => App)
