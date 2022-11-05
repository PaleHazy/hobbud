import { app, safeStorage } from 'electron'

import { makeAppSetup, makeAppWithSingleInstanceLock } from './factories'
import { MainWindow, registerAboutWindowCreationByIPC } from './windows'
import { registerDigitalOceanIPC } from './windows/DigitalOcean'

makeAppWithSingleInstanceLock(async () => {
  await app.whenReady()
  await makeAppSetup(MainWindow)

  registerAboutWindowCreationByIPC()
  registerDigitalOceanIPC()
})
