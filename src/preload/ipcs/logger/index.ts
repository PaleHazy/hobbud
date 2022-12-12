import { ipcRenderer } from "electron"
import { IPC } from "shared/constants"

export function logger(...args: any[]) {
  const channel = IPC.LOGGER
  ipcRenderer.invoke(channel, args)
}
