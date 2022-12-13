import { ipcRenderer, safeStorage } from 'electron'

import { IPC } from 'shared/constants'

export async function digitalOceanGetToken() {
  return ipcRenderer.invoke(IPC.DIGITALOCEAN.GET_TOKEN)
}

export function digitalOceanSetToken(token: string) {
  const channel = IPC.DIGITALOCEAN.SET_TOKEN
  ipcRenderer.invoke(channel, token)
}

export async function digitalOceanGetAccount() {
  return ipcRenderer.invoke(IPC.DIGITALOCEAN.GET_ACCOUNT)
}
