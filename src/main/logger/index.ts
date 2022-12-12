import { ipcMain } from "electron"
import { IPC } from "shared/constants"
import { logger } from "shared/utils/logger"

export function registerLoggerIPC() {
  ipcMain.handle(IPC.LOGGER, (_, ...args) => {
    logger.info(args)
  })
}
