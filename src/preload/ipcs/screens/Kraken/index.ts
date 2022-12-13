import { ipcRenderer, safeStorage } from 'electron'

import { IPC } from 'shared/constants'



export function krakenGetBalance() {
  const channel = IPC.KRAKEN.GET_BALANCE
  return ipcRenderer.invoke(channel)
}

