import { app, safeStorage } from 'electron'

import { makeAppSetup, makeAppWithSingleInstanceLock } from './factories'
import { registerLoggerIPC } from './logger'
import { MainWindow, registerAboutWindowCreationByIPC } from './windows'
import { registerDigitalOceanIPC } from './windows/DigitalOcean'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)

  registerAboutWindowCreationByIPC()
  registerDigitalOceanIPC()
  registerLoggerIPC()
})
