import { ipcMain, safeStorage } from 'electron'
import { writeFileSync, readFileSync } from 'fs'
import { getDigitalOceanAccount } from 'lib/http/DigitalOcean'
import { IPC } from 'shared/constants'
import { logger } from '../../../shared/utils/logger'


export function registerDigitalOceanIPC() {
  registerDigitalOceanSetTokenIPC()
  registerDigitalOceanGetTokenIPC()
  registerDigitalOceanGetAccount()

}

export function registerDigitalOceanSetTokenIPC() {
  ipcMain.handle(IPC.DIGITALOCEAN.SET_TOKEN, (_, token) => {
    startClient(token)
    const encryptedString = safeStorage.encryptString(token)
    writeFileSync('do_tok', encryptedString)
  })
}

export function registerDigitalOceanGetTokenIPC() {
  ipcMain.handle(IPC.DIGITALOCEAN.GET_TOKEN, () => {
    const token = getDOToken()
    return token
  })
}

export function startClient(_token: string) {

}

export function getDOToken() {
  try {
    const encryptedString = readFileSync('do_tok')
    const token = safeStorage.decryptString(encryptedString)
    startClient(token)
    return token
  }catch(e) {
    console.error(e)
    return null
  }
}


function registerDigitalOceanGetAccount() {
  ipcMain.handle(IPC.DIGITALOCEAN.GET_ACCOUNT, async () => {
    const account = await getDigitalOceanAccount()
    return account
  })
}
