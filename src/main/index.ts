import { app, safeStorage } from 'electron'

import { makeAppSetup, makeAppWithSingleInstanceLock } from './factories'
import { registerLoggerIPC } from './logger'
import { MainWindow, registerAboutWindowCreationByIPC } from './windows'
import { registerDigitalOceanIPC } from './screens/DigitalOcean'
import { registerKrakenIPC } from './screens/Kraken'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)

  registerAboutWindowCreationByIPC()
  registerDigitalOceanIPC()
  registerKrakenIPC()
  registerLoggerIPC()
})
