export const IPC = {
  WINDOWS: {
    ABOUT: {
      CREATE_WINDOW: 'windows: create-about-window',
      WHEN_WINDOW_CLOSE: 'windows: when-about-window-close',
    },
  },
  DIGITALOCEAN: {
    GET_TOKEN: 'digitalocean: get-token',
    SET_TOKEN: 'digitalocean: set-token',
    GET_ACCOUNT: 'digitalocean: get-account',
  },
  KRAKEN: {
    GET_ACCOUNT: 'kraken: get-account',
    GET_BALANCE: 'kraken: get-balance',
    SIGN: 'kraken: sign',

  },

  LOGGER: "logger: log"
}
