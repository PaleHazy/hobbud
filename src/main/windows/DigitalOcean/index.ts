import { ipcMain, safeStorage } from 'electron'
import { writeFileSync, readFileSync } from 'fs'
import { IPC } from 'shared/constants'

export function registerDigitalOceanIPC() {
  registerDigitalOceanSetTokenIPC()
  registerDigitalOceanGetTokenIPC()
}

export function registerDigitalOceanSetTokenIPC() {
  ipcMain.handle(IPC.DIGITALOCEAN.SET_TOKEN, (_, token) => {
    const encryptedString = safeStorage.encryptString(token)
    writeFileSync('do_tok', encryptedString)
  })
}

export function registerDigitalOceanGetTokenIPC() {
  ipcMain.handle(IPC.DIGITALOCEAN.GET_TOKEN, () => {
    const encryptedString = readFileSync('do_tok')
    const decryptedString = safeStorage.decryptString(encryptedString)
    return decryptedString
  })
}
