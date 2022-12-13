import { ipcMain } from 'electron'
import { IPC } from 'shared/constants'
import { createHmac } from 'crypto'
import { URLSearchParams } from 'url'
import { getBalance } from 'lib/http/Kraken'

//https://api.kraken.com/0/private/Balance

export function registerKrakenIPC() {
  registerKrakenGetAccountBalance()
}

function registerKrakenGetAccountBalance() {
  ipcMain.handle(IPC.KRAKEN.GET_BALANCE, async () => {
    return getBalance()
  })
}
